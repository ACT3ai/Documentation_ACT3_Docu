import json
import re
from pathlib import Path
from urllib.parse import parse_qs, urlparse

from bs4 import BeautifulSoup, Comment, NavigableString
from markdownify import markdownify as md

REPO_ROOT = Path('/home/ubuntu/Documentation_ACT3_Docu')
EXPORT_DIR = REPO_ROOT / 'internal/migration/wiki_export'
DOCS_DIR = REPO_ROOT / 'docs/legacy-wiki'
MANIFEST_PATH = EXPORT_DIR / 'manifest.json'
SITE_BASE = 'https://wiki.act3ai.com'


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = text.replace('&', ' and ')
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-+', '-', text).strip('-')
    return text or 'page'


def escape_frontmatter(text: str) -> str:
    return text.replace('"', '\\"')


def load_manifest():
    return json.loads(MANIFEST_PATH.read_text(encoding='utf-8'))


def build_slug_map(records):
    counts = {}
    title_to_slug = {}
    slug_to_title = {}
    for record in records:
        title = record['title']
        base = slugify(title)
        slug = base
        counts.setdefault(base, 0)
        if slug in slug_to_title:
            counts[base] += 1
            slug = f"{base}-{counts[base]+1}"
        slug_to_title[slug] = title
        title_to_slug[title] = slug
    return title_to_slug


def normalize_title_for_match(title: str) -> str:
    return title.replace('_', ' ').strip()


def remove_noise(soup):
    for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()
    for selector in ['div#toc', 'span.mw-editsection', 'sup.reference', 'table.ambox', 'table.metadata']:
        for node in soup.select(selector):
            node.decompose()
    return soup


def rewrite_links(soup, title_to_slug):
    title_lookup_lower = {k.lower(): v for k, v in title_to_slug.items()}
    for a in soup.find_all('a'):
        href = a.get('href', '')
        if href.startswith('#'):
            continue
        if href.startswith('/index.php') or href.startswith('https://wiki.act3ai.com/index.php'):
            parsed = urlparse(href if href.startswith('http') else SITE_BASE + href)
            params = parse_qs(parsed.query)
            title = params.get('title', [None])[0]
            if title:
                normalized = normalize_title_for_match(title)
                slug = title_to_slug.get(normalized)
                if slug is None:
                    slug = title_lookup_lower.get(normalized.lower())
                if slug:
                    a['href'] = f"/docs/legacy-wiki/{slug}"
                else:
                    a['href'] = parsed.geturl()
            else:
                a['href'] = parsed.geturl()
        elif href.startswith('/'):
            a['href'] = SITE_BASE + href
    return soup


def cleanup_markdown(text: str) -> str:
    text = text.replace('\\*\\*', '**')
    text = re.sub(r'<(https?://[^>\s]+)>', r'[\1](\1)', text)
    text = re.sub(r'<([^>\n]+)>', r'&lt;\1&gt;', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r'\n\|\s*\n', '\n', text)
    return text.strip() + '\n'


def html_to_markdown(html: str) -> str:
    markdown = md(
        html,
        heading_style='ATX',
        bullets='-',
        strip=['span'],
    )
    return cleanup_markdown(markdown)


def render_page(record, title_to_slug):
    title = record['title']
    slug = title_to_slug[title]
    html_path = Path(record['html_file'])
    soup = BeautifulSoup(html_path.read_text(encoding='utf-8'), 'html.parser')
    soup = remove_noise(soup)
    soup = rewrite_links(soup, title_to_slug)

    root = soup.select_one('div.mw-parser-output') or soup
    markdown = html_to_markdown(str(root))

    frontmatter = [
        '---',
        f'id: legacy-wiki-{slug}',
        f'title: "{escape_frontmatter(title)}"',
        f'sidebar_label: "{escape_frontmatter(title)}"',
        f'description: "Migrated from the legacy ACT3AI MediaWiki page {escape_frontmatter(title)}."',
        f'slug: /legacy-wiki/{slug}',
        '---',
        '',
        '> This page was migrated from the legacy ACT3AI MediaWiki site.',
        '',
    ]
    return '\n'.join(frontmatter) + markdown


def build_index(records, title_to_slug):
    lines = [
        '---',
        'id: legacy-wiki-index',
        'title: "Legacy Wiki Migration Index"',
        'sidebar_label: "Legacy Wiki"',
        'description: "Index of pages migrated from the legacy ACT3AI MediaWiki site."',
        'slug: /legacy-wiki',
        '---',
        '',
        '# Legacy Wiki Migration Index',
        '',
        'This section contains the complete set of pages migrated from the legacy ACT3AI MediaWiki site.',
        '',
        f'Total migrated pages: **{len(records)}**.',
        '',
        '| Legacy Page | New Page |',
        '|---|---|',
    ]
    for record in sorted(records, key=lambda r: r['title'].lower()):
        title = record['title']
        slug = title_to_slug[title]
        lines.append(f'| {title} | [/docs/legacy-wiki/{slug}](/docs/legacy-wiki/{slug}) |')
    lines.append('')
    return '\n'.join(lines)


def build_category():
    return json.dumps({
        'label': 'Legacy Wiki',
        'position': 99,
        'link': {
            'type': 'doc',
            'id': 'legacy-wiki-index'
        }
    }, indent=2) + '\n'


def main():
    records = [r for r in load_manifest() if 'error' not in r]
    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    title_to_slug = build_slug_map(records)

    (DOCS_DIR / '_category_.json').write_text(build_category(), encoding='utf-8')
    (DOCS_DIR / 'index.mdx').write_text(build_index(records, title_to_slug), encoding='utf-8')

    for record in records:
        slug = title_to_slug[record['title']]
        output_path = DOCS_DIR / f'{slug}.mdx'
        output_path.write_text(render_page(record, title_to_slug), encoding='utf-8')

    slug_map_path = EXPORT_DIR / 'slug-map.json'
    slug_map_path.write_text(json.dumps(title_to_slug, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f'Wrote {len(records)} MDX pages to {DOCS_DIR}')


if __name__ == '__main__':
    main()
