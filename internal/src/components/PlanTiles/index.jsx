import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/* Each tile deep-links into the matching tab of the app's plan settings. */
const TILES = [
  {
    id: 'plans',
    label: 'Plans',
    desc: 'Compare subscription tiers and pick the one that matches how much you create each month.',
  },
  {
    id: 'pricing-details',
    label: 'Pricing Details',
    desc: 'See the credit cost of every video, image, audio, and render action, model by model.',
  },
  {
    id: 'movie-costs',
    label: 'Movie Costs',
    desc: 'Estimate what a full movie costs to produce before you commit to a production run.',
  },
];

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);
const LOCAL_APP_URL = 'http://localhost:3000';

/* Resolve the app's base URL so the same component works in dev and in prod:
   - built site            -> customFields.appBaseUrl (prod default, ACT3_APP_URL override)
   - served from localhost -> the locally running app on :3000
   useIsBrowser keeps the server-rendered href and the hydrated href from
   disagreeing, so React never warns about a mismatch. */
function useAppBaseUrl() {
  const isBrowser = useIsBrowser();
  const { siteConfig } = useDocusaurusContext();
  const configured =
    siteConfig.customFields?.appBaseUrl ?? 'https://app.act3ai.com';

  if (isBrowser && LOCAL_HOSTS.has(window.location.hostname)) {
    return LOCAL_APP_URL;
  }

  return configured;
}

export default function PlanTiles() {
  const appBaseUrl = useAppBaseUrl();

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {TILES.map((tile) => (
          <a
            key={tile.id}
            className={styles.tile}
            href={`${appBaseUrl}/settings/plans?tab=${tile.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.tileHead}>
              <span className={styles.tileTitle}>{tile.label}</span>
              <ExternalArrow />
            </div>
            <p className={styles.tileDesc}>{tile.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function ExternalArrow() {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 16 16"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h7v7M13 3L4 12" />
    </svg>
  );
}
