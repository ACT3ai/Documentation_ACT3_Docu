import json
import os
import time
from pathlib import Path
from urllib.parse import urljoin

import requests

API_BASE = "https://wiki.act3ai.com/api.php"
SITE_BASE = "https://wiki.act3ai.com/"
OUTPUT_DIR = Path("/home/ubuntu/Documentation_ACT3_Docu/internal/migration/wiki_export")
PAGES_DIR = OUTPUT_DIR / "pages"
HTML_DIR = OUTPUT_DIR / "html"

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "ManusWikiMigrator/1.0"})


def api_get(params):
    resp = SESSION.get(API_BASE, params=params, timeout=60)
    resp.raise_for_status()
    return resp.json()


def list_all_pages():
    pages = []
    apcontinue = None
    while True:
        params = {
            "action": "query",
            "list": "allpages",
            "aplimit": "max",
            "format": "json",
            "apnamespace": 0,
        }
        if apcontinue:
            params["apcontinue"] = apcontinue
        data = api_get(params)
        pages.extend(data.get("query", {}).get("allpages", []))
        apcontinue = data.get("continue", {}).get("apcontinue")
        if not apcontinue:
            break
    return pages


def parse_page(title):
    params = {
        "action": "parse",
        "page": title,
        "prop": "text|links|displaytitle|sections|images|categories",
        "format": "json",
    }
    data = api_get(params)
    return data["parse"]


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PAGES_DIR.mkdir(parents=True, exist_ok=True)
    HTML_DIR.mkdir(parents=True, exist_ok=True)

    pages = list_all_pages()
    manifest = []

    for idx, page in enumerate(pages, start=1):
        title = page["title"]
        try:
            parsed = parse_page(title)
        except Exception as exc:
            manifest.append({
                "title": title,
                "pageid": page.get("pageid"),
                "error": str(exc),
            })
            continue

        safe_name = f"{idx:04d}__" + "".join(c if c.isalnum() else "_" for c in title).strip("_")
        html_path = HTML_DIR / f"{safe_name}.html"
        json_path = PAGES_DIR / f"{safe_name}.json"

        html = parsed.get("text", {}).get("*", "")
        html_path.write_text(html, encoding="utf-8")

        page_record = {
            "index": idx,
            "title": title,
            "pageid": page.get("pageid"),
            "displaytitle": parsed.get("displaytitle", title),
            "sections": parsed.get("sections", []),
            "links": parsed.get("links", []),
            "images": parsed.get("images", []),
            "categories": parsed.get("categories", []),
            "source_url": urljoin(SITE_BASE, f"index.php?title={title.replace(' ', '_')}"),
            "html_file": str(html_path),
        }
        json_path.write_text(json.dumps(page_record, indent=2, ensure_ascii=False), encoding="utf-8")
        manifest.append(page_record)
        time.sleep(0.1)

    manifest_path = OUTPUT_DIR / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Exported {len(manifest)} pages to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
