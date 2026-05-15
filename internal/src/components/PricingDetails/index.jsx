import React, { useState, useMemo } from 'react';
import styles from './styles.module.css';
import {
  catalog,
  QUICK_ANSWERS,
  projectExample,
  CREDITS_PER_DOLLAR,
  DEFAULT_SHOT_DURATION,
} from './data';

/* ---------------- FORMATTERS ---------------- */

const fmtUsd = (n) =>
  n == null
    ? '—'
    : n >= 100
      ? `$${n.toFixed(0)}`
      : n >= 1
        ? `$${n.toFixed(2)}`
        : `$${n.toFixed(3)}`;

const fmtCredits = (n) =>
  n == null
    ? '—'
    : n.toLocaleString('en-US', { maximumFractionDigits: 0 });

/* ---------------- NAV LINKS ---------------- */

const NAV_LINKS = [
  { id: 'section-compare', label: 'Model compare' },
  { id: 'section-answers', label: 'Quick answers' },
  { id: 'section-plans', label: 'Plans' },
  { id: 'section-storage', label: 'Storage' },
  { id: 'section-capacity', label: 'What can I make?' },
  { id: 'section-project', label: 'Project breakdown' },
  { id: 'section-catalog', label: 'Full catalog' },
  { id: 'section-math', label: 'Credit math' },
];

/* ---------------- ROOT ---------------- */

export default function PricingDetails() {
  return (
    <div className={styles.root}>
      <div className={styles.stack}>
        <CatalogHeader />
        <PricingNav />
        <section id="section-compare" className={styles.section}>
          <ComparisonStrip />
        </section>
        <section id="section-answers" className={styles.section}>
          <QuickAnswersSection />
        </section>
        <section id="section-plans" className={styles.section}>
          <PlansSection />
        </section>
        <section id="section-storage" className={styles.section}>
          <StorageSection />
        </section>
        <section id="section-capacity" className={styles.section}>
          <ProductionsSection />
        </section>
        <section id="section-project" className={styles.section}>
          <ProjectCostExample />
        </section>
        <section id="section-catalog" className={styles.section}>
          <CatalogSection />
        </section>
        <section id="section-math" className={styles.section}>
          <CreditMathFooter />
        </section>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */

function CatalogHeader() {
  const { creditsPerDollar, dollarsPerCredit, defaultShotDurationSeconds } =
    catalog.constants;

  const pillParts = [];
  if (creditsPerDollar != null)
    pillParts.push(`$1 USD = ${creditsPerDollar.toLocaleString()} credits`);
  if (dollarsPerCredit != null)
    pillParts.push(
      `1 credit = $${dollarsPerCredit.toFixed(4).replace(/0+$/, '0')}`,
    );
  if (defaultShotDurationSeconds != null)
    pillParts.push(`Default shot = ${defaultShotDurationSeconds}s`);

  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>ACT3 AI Pricing</h1>
      <p className={styles.heroSubtitle}>
        Every credit, every model, every minute. See exactly what your video
        will cost before you generate a single frame.
      </p>
      {pillParts.length > 0 && (
        <span className={styles.heroPill}>{pillParts.join(' · ')}</span>
      )}
    </div>
  );
}

/* ---------------- STICKY NAV ---------------- */

function PricingNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navInner}>
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SECTION TITLE ---------------- */

function SectionTitle({ title, subtitle, icon }) {
  return (
    <div className={styles.sectionTitleWrap}>
      <div className={styles.sectionTitleRow}>
        {icon && <span className={styles.sectionTitleIcon}>{icon}</span>}
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
  );
}

/* ---------------- COMPARISON STRIP ---------------- */

function ComparisonStrip() {
  const video = catalog.categories.find((c) => c.id === 'video');
  const items = video?.items ?? [];
  if (!items.length) return null;

  const ids = ['grok-imagine', 'wan-2-6', 'veo-3-1-hq', 'seedance-2-hq'];
  const headline = ids
    .map((id) => items.find((i) => i.id === id))
    .filter(Boolean);

  if (!headline.length) return null;

  return (
    <div>
      <SectionTitle
        icon={<span aria-hidden>📈</span>}
        title="Side-by-side: most popular models"
        subtitle={`Cheapest to most premium — all per ${catalog.constants.defaultShotDurationSeconds}s shot.`}
      />
      <div className={styles.grid4}>
        {headline.map((item, idx) => (
          <ModelCompareCard
            key={item.id}
            item={item}
            featured={idx === headline.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function ModelCompareCard({ item, featured }) {
  const cls = [
    styles.card,
    styles.cardHover,
    styles.modelCard,
    featured ? styles.cardFeatured : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={cls}>
      <div className={styles.modelCardHead}>
        <h3 className={styles.modelCardTitle}>{item.label}</h3>
        {item.badge && (
          <span
            className={`${styles.badge} ${featured ? styles.badgePrimary : ''}`}
          >
            {item.badge}
          </span>
        )}
      </div>
      <hr className={styles.divider} />
      <div className={styles.captionMuted}>{item.unit}</div>
      <div className={`${styles.baseline} ${styles.mt8}`}>
        <span className={styles.bigCredits}>
          {fmtCredits(item.customerCredits)}
        </span>
        <span className={styles.creditsLabel}>credits</span>
      </div>
      <div className={styles.approxUsd}>≈ {fmtUsd(item.customerDollars)}</div>
    </div>
  );
}

/* ---------------- QUICK ANSWERS ---------------- */

function QuickAnswersSection() {
  const findItem = (catId, itemId) =>
    catalog.categories
      .find((c) => c.id === catId)
      ?.items?.find((i) => i.id === itemId);
  const findProd = (id) => catalog.productions.find((p) => p.id === id);

  const cards = QUICK_ANSWERS.map((spec) => {
    if (spec.kind === 'item') {
      const item = findItem(spec.categoryId, spec.itemId);
      if (!item) return null;
      return {
        key: spec.itemId,
        q: spec.q,
        bigValue: fmtCredits(item.customerCredits),
        smallValue: fmtUsd(item.customerDollars),
        unit: 'credits',
        note: spec.note,
      };
    }
    if (spec.kind === 'production') {
      const p = findProd(spec.productionId);
      if (!p) return null;
      return {
        key: spec.productionId,
        q: spec.q,
        bigValue: fmtCredits(p.customerCredits),
        smallValue: fmtUsd(p.customerDollars),
        unit: 'credits',
        note: spec.note,
      };
    }
    const p = findProd(spec.productionId);
    if (!p) return null;
    const cap = spec.planId === 'starter' ? p.starterPerMonth : p.proPerMonth;
    if (cap == null) return null;
    return {
      key: `${spec.productionId}-${spec.planId}`,
      q: spec.q,
      bigValue: cap.toFixed(1).replace(/\.0$/, ''),
      smallValue: '',
      unit: '/ month',
      note: spec.note,
    };
  }).filter(Boolean);

  if (!cards.length) return null;

  return (
    <div>
      <SectionTitle
        title="Quick answers"
        subtitle="The questions customers ask first, with hard numbers."
      />
      <div className={styles.grid3}>
        {cards.map((c) => (
          <div
            key={c.key}
            className={`${styles.card} ${styles.cardHover} ${styles.qa}`}
          >
            <div className={styles.qaQuestion}>{c.q}</div>
            <div className={styles.qaBaseline}>
              <span className={styles.qaBigValue}>{c.bigValue}</span>
              {c.smallValue ? (
                <span className={styles.creditsLabel}>{c.smallValue}</span>
              ) : (
                <span className={styles.creditsLabel}>{c.unit}</span>
              )}
            </div>
            <div className={styles.qaNote}>{c.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PLANS ---------------- */

function PlansSection() {
  return (
    <div>
      <SectionTitle
        title="Subscription plans"
        subtitle="Pick the plan that matches how much you create per month."
      />
      <div className={styles.grid3Big}>
        {catalog.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan }) {
  const cls = [
    styles.planCard,
    plan.featured ? styles.planCardFeatured : '',
  ]
    .filter(Boolean)
    .join(' ');

  const rolloverText =
    plan.rolloverCredits != null
      ? `${fmtCredits(plan.rolloverCredits)} cr`
      : plan.rolloverMonths != null
        ? `${plan.rolloverMonths} mo`
        : '—';

  const storageText =
    plan.storageLabel ??
    (plan.storageGb != null ? `${plan.storageGb} GB` : '—');

  return (
    <div className={cls}>
      {plan.featured && <span className={styles.pillFeatured}>Most popular</span>}
      <div className={styles.planName}>{plan.name}</div>

      <div className={styles.planPriceRow}>
        {plan.contactSales ? (
          <span className={styles.planPriceContact}>Contact sales</span>
        ) : (
          <>
            <span className={styles.planPrice}>{fmtUsd(plan.priceUsd)}</span>
            <span className={styles.planPer}>/mo</span>
          </>
        )}
      </div>

      {plan.creditsPerMonth != null && (
        <div className={styles.planCredits}>
          {fmtCredits(plan.creditsPerMonth)} credits/mo
        </div>
      )}

      <div className={styles.planMeta}>
        <div className={styles.planMetaKey}>Rollover</div>
        <div className={styles.planMetaVal}>{rolloverText}</div>
        <div className={styles.planMetaKey}>Storage</div>
        <div className={styles.planMetaVal}>{storageText}</div>
        <div className={styles.planMetaKey}>Concurrent jobs</div>
        <div className={styles.planMetaVal}>{plan.concurrentJobs ?? '—'}</div>
        <div className={styles.planMetaKey}>Use</div>
        <div className={styles.planMetaVal}>{plan.useType ?? '—'}</div>
      </div>

      <div className={styles.planFeatures}>
        {plan.features.map((f) => (
          <div key={f} className={styles.planFeatureRow}>
            <span className={styles.planFeatureCheck} aria-hidden>
              ✓
            </span>
            <span className={styles.planFeatureText}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STORAGE ---------------- */

function StorageSection() {
  return (
    <div>
      <SectionTitle
        icon={<span aria-hidden>☁️</span>}
        title="Storage included in your plan"
        subtitle="Every plan ships with cloud storage for your projects, renders, and uploaded assets. No per-gigabyte fees — what your plan includes is what you get."
      />
      <div className={styles.grid3Big}>
        {catalog.plans.map((plan) => (
          <StorageCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className={`${styles.card} ${styles.helperCard}`}>
        <div className={styles.helperGrid}>
          <div>
            <span className={styles.helperLabel}>How it works</span>
            <p className={styles.helperText}>
              Storage is included in your monthly plan price — never billed
              separately. We track per-organization usage in real time and you
              can view your current consumption from your dashboard.
            </p>
          </div>
          <div>
            <span className={styles.helperLabel}>What happens at the limit</span>
            <p className={styles.helperText}>
              When you reach your storage cap, new uploads and renders are
              paused until you free space or upgrade. Nothing in your existing
              library is deleted automatically when you hit the limit.
            </p>
          </div>
          <div>
            <span className={styles.helperLabel}>Deleting files</span>
            <p className={styles.helperText}>
              Deleted videos and assets remain recoverable for ~30 days before
              being purged. Freeing space frees it immediately from your active
              quota.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StorageCard({ plan }) {
  const displayValue =
    plan.storageLabel ??
    (plan.storageGb != null ? `${plan.storageGb} GB` : '—');
  const monthly = plan.contactSales
    ? 'Contact sales'
    : `${fmtUsd(plan.priceUsd)} / mo`;
  const cls = [
    styles.card,
    plan.featured ? styles.cardFeatured : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={cls}>
      <div className={styles.storageHead}>
        <span className={styles.overline}>{plan.name}</span>
        {plan.featured && (
          <span className={`${styles.badge} ${styles.badgePrimary}`}>
            Most popular
          </span>
        )}
      </div>
      <div className={styles.baseline}>
        <span className={styles.storageValue}>{displayValue}</span>
        <span className={styles.creditsLabel}>storage</span>
      </div>
      <span className={styles.storageInfo}>Included with {monthly}</span>
    </div>
  );
}

/* ---------------- PRODUCTIONS ---------------- */

function ProductionsSection() {
  if (!catalog.productions.length) return null;
  return (
    <div>
      <SectionTitle
        title="What can I make on each plan?"
        subtitle="Real script-length productions, end-to-end. Each card shows total credits and how many fit in a month on each plan."
      />
      <div className={styles.grid5}>
        {catalog.productions.map((p) => (
          <CapacityCard key={p.id} production={p} />
        ))}
      </div>
    </div>
  );
}

function CapacityCard({ production }) {
  return (
    <div className={`${styles.card} ${styles.cardHover}`}>
      <h4 className={styles.capCardTitle}>{production.label}</h4>
      <div className={styles.capCardSub}>
        {production.shots.toLocaleString()} shots · {production.durationSeconds}
        s total
      </div>

      <div className={`${styles.baseline} ${styles.mt16}`}>
        <span className={styles.bigCredits}>
          {fmtCredits(production.customerCredits)} cr
        </span>
        <span className={styles.creditsLabel}>
          {fmtUsd(production.customerDollars)}
        </span>
      </div>

      <hr className={styles.divider} />

      <div className={styles.capRow}>
        <span className={styles.capRowLabel}>Starter</span>
        <span className={styles.capRowValue}>
          {production.starterPerMonth != null && production.starterPerMonth > 0
            ? `${production.starterPerMonth.toFixed(1).replace(/\.0$/, '')} / mo`
            : '—'}
        </span>
      </div>
      <div className={styles.capRow}>
        <span className={styles.capRowLabel}>Pro</span>
        <span className={styles.capRowValue}>
          {production.proPerMonth != null && production.proPerMonth > 0
            ? `${production.proPerMonth.toFixed(1).replace(/\.0$/, '')} / mo`
            : '—'}
        </span>
      </div>
    </div>
  );
}

/* ---------------- PROJECT EXAMPLE ---------------- */

const sumSteps = (steps) =>
  steps.reduce((sum, s) => sum + s.perUnit * s.count, 0);

function ProjectCostExample() {
  const { storySteps, productionSteps, veo31PerShot } = projectExample;
  const PROJECT_TOTAL_SHOTS = projectExample.totalShots;
  const PROJECT_SHOT_DURATION = projectExample.shotDuration;
  const PROJECT_TOTAL_FOOTAGE_SECONDS = projectExample.totalFootageSeconds;
  const PROJECT_DIALOGUE_SHOTS = projectExample.dialogueShots;
  const PROJECT_MERGE_CREDITS_PER_SEC = projectExample.mergeCreditsPerSec;

  const storyTotal = sumSteps(storySteps);
  const prodTotal = sumSteps(productionSteps);
  const total = storyTotal + prodTotal;

  const videoStep = productionSteps.find((s) => s.step.startsWith('Video'));
  const videoCredits = videoStep.perUnit * videoStep.count;
  const imageCredits = productionSteps[0].perUnit * productionSteps[0].count;
  const audioCredits =
    productionSteps[2].perUnit * productionSteps[2].count +
    productionSteps[3].perUnit * productionSteps[3].count;
  const mergeCredits = PROJECT_MERGE_CREDITS_PER_SEC * PROJECT_TOTAL_FOOTAGE_SECONDS;

  const altVideoCredits = veo31PerShot * PROJECT_TOTAL_SHOTS;
  const altTotal = total - videoCredits + altVideoCredits;

  const buckets = [
    { label: 'Story structure', credits: storyTotal, cls: styles.bucketInfo },
    {
      label: 'First-frame images',
      credits: imageCredits,
      cls: styles.bucketSecondary,
    },
    {
      label: 'Video generation',
      credits: videoCredits,
      cls: styles.bucketPrimary,
    },
    { label: 'Dialogue audio', credits: audioCredits, cls: styles.bucketSuccess },
    {
      label: 'Final merge & assembly',
      credits: mergeCredits,
      cls: styles.bucketWarning,
    },
  ];

  const starter = catalog.plans.find((p) => p.id === 'starter');
  const pro = catalog.plans.find((p) => p.id === 'pro');
  const starterCapacity = starter?.creditsPerMonth
    ? starter.creditsPerMonth / total
    : null;
  const proCapacity = pro?.creditsPerMonth ? pro.creditsPerMonth / total : null;

  return (
    <div>
      <SectionTitle
        icon={<span aria-hidden>🧾</span>}
        title="Example — full cost of one 50-shot project"
        subtitle="Exactly what gets charged, in order, taking a project from blank canvas to final video using Seedance 2.0 Fast (720p) for every shot."
      />

      <div className={`${styles.card} ${styles.assumptCard}`}>
        <h3 className={styles.assumptTitle}>Project assumptions</h3>
        <div className={styles.assumptGrid}>
          <Fact label="Default shot length" value={`${PROJECT_SHOT_DURATION} seconds`} />
          <Fact
            label="Story structure"
            value="3 Acts → 12 Beats → 41 Scenes → 50 Shots"
          />
          <Fact
            label="Total generated footage"
            value={`${PROJECT_TOTAL_FOOTAGE_SECONDS}s (50 × 8s)`}
          />
          <Fact
            label="Shots with dialogue"
            value={`${PROJECT_DIALOGUE_SHOTS} of ${PROJECT_TOTAL_SHOTS}`}
          />
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Step</th>
              <th className={styles.num}>Per-unit credits</th>
              <th className={styles.num}>× Count</th>
              <th className={styles.num}>Subtotal credits</th>
              <th className={styles.num}>≈ USD</th>
            </tr>
          </thead>
          <tbody>
            {storySteps.map((s, i) => {
              const subtotal = s.perUnit * s.count;
              return (
                <tr key={s.step}>
                  <td>{i + 1}</td>
                  <td>{s.step}</td>
                  <td className={styles.num}>{fmtCredits(s.perUnit)}</td>
                  <td className={`${styles.num} ${styles.countCell}`}>× {s.count}</td>
                  <td className={`${styles.num} ${styles.numStrong}`}>
                    {fmtCredits(subtotal)}
                  </td>
                  <td className={styles.num}>{fmtUsd(subtotal / CREDITS_PER_DOLLAR)}</td>
                </tr>
              );
            })}
            <tr className={styles.subtotalRow}>
              <td colSpan={4}>Story-structure subtotal</td>
              <td className={`${styles.num} ${styles.numAccent}`}>
                {fmtCredits(storyTotal)}
              </td>
              <td className={`${styles.num} ${styles.numStrong}`}>
                {fmtUsd(storyTotal / CREDITS_PER_DOLLAR)}
              </td>
            </tr>
            {productionSteps.map((s, i) => {
              const subtotal = s.perUnit * s.count;
              const isVideo = s.step.startsWith('Video');
              return (
                <tr key={s.step} className={isVideo ? styles.videoStepRow : ''}>
                  <td>{storySteps.length + i + 1}</td>
                  <td>{s.step}</td>
                  <td className={`${styles.num} ${isVideo ? styles.numStrong : ''}`}>
                    {fmtCredits(s.perUnit)}
                  </td>
                  <td className={`${styles.num} ${styles.countCell}`}>× {s.count}</td>
                  <td
                    className={`${styles.num} ${styles.numStrong} ${isVideo ? styles.numAccent : ''}`}
                  >
                    {fmtCredits(subtotal)}
                  </td>
                  <td className={`${styles.num} ${isVideo ? styles.numStrong : ''}`}>
                    {fmtUsd(subtotal / CREDITS_PER_DOLLAR)}
                  </td>
                </tr>
              );
            })}
            <tr className={styles.totalRow}>
              <td colSpan={4}>Project total</td>
              <td className={`${styles.num} ${styles.numAccent}`}>
                {fmtCredits(total)}
              </td>
              <td className={`${styles.num} ${styles.numAccent}`}>
                {fmtUsd(total / CREDITS_PER_DOLLAR)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.infoNote}>
        The merge / final render fee is charged on{' '}
        <strong>total generated footage</strong> ({PROJECT_TOTAL_FOOTAGE_SECONDS}{' '}
        sec), not the trimmed final cut. Trimming shots in the editor does not
        refund merge credits already spent.
      </div>

      <div style={{ marginTop: 72 }}>
        <SectionTitle title="Where each credit goes" />
        <div className={styles.grid3}>
          {buckets.map((b) => {
            const pct = (b.credits / total) * 100;
            return (
              <div key={b.label} className={styles.card}>
                <div className={styles.bucketHead}>
                  <span className={styles.bucketLabel}>{b.label}</span>
                  <span className={`${styles.bucketChip} ${b.cls}`}>
                    {pct.toFixed(1)}%
                  </span>
                </div>
                <div className={styles.bucketCredits}>{fmtCredits(b.credits)}</div>
                <div className={styles.bucketBar}>
                  <div
                    className={styles.bucketBarFill}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: 72 }}>
        <SectionTitle
          title="How many of these projects per month?"
          subtitle="Using your plan's monthly credit allowance against the project total above."
        />
        <div className={styles.grid3Big}>
          {starter && (
            <PlanCapacityCard
              planName={starter.name}
              priceUsd={starter.priceUsd}
              creditsPerMonth={starter.creditsPerMonth}
              capacity={starterCapacity}
            />
          )}
          {pro && (
            <PlanCapacityCard
              planName={pro.name}
              priceUsd={pro.priceUsd}
              creditsPerMonth={pro.creditsPerMonth}
              capacity={proCapacity}
              featured
            />
          )}
          <PlanCapacityCard planName="Enterprise" enterprise />
        </div>
      </div>

      <div className={styles.warningCard}>
        <h3 className={styles.warningTitle}>
          Same project on a premium model — for comparison
        </h3>
        <p className={styles.warningBody}>
          Re-running the same 50 shots on <strong>Veo 3.1 (1080p)</strong>{' '}
          instead of Seedance 2.0 Fast. Only the video step changes.
        </p>
        <div className={styles.warningStack}>
          <div>
            <div className={styles.captionMuted}>Video step (was)</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>
              Seedance 2.0 Fast — {fmtCredits(videoCredits)} cr (
              {fmtUsd(videoCredits / CREDITS_PER_DOLLAR)})
            </div>
          </div>
          <div>
            <div className={styles.captionMuted}>Video step (now)</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>
              Veo 3.1 — {fmtCredits(altVideoCredits)} cr (
              {fmtUsd(altVideoCredits / CREDITS_PER_DOLLAR)})
            </div>
          </div>
          <div>
            <div className={styles.captionMuted}>New project total</div>
            <div className={styles.warningEmph} style={{ fontSize: 14, marginTop: 2 }}>
              {fmtCredits(altTotal)} cr ≈ {fmtUsd(altTotal / CREDITS_PER_DOLLAR)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <span className={styles.factLabel}>{label}</span>
      <div className={styles.factValue}>{value}</div>
    </div>
  );
}

function PlanCapacityCard({
  planName,
  priceUsd,
  creditsPerMonth,
  capacity,
  featured,
  enterprise,
}) {
  const cls = [
    styles.card,
    featured ? styles.cardFeatured : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls}>
      <span className={styles.capacityCardOverline}>{planName}</span>
      {enterprise ? (
        <>
          <div className={styles.entUnlimited}>Unlimited at scale</div>
          <span className={styles.capacityCaption}>
            Custom credit allowance — required for episodic or feature work
          </span>
        </>
      ) : (
        <>
          <div className={`${styles.baseline} ${styles.mt8}`}>
            <span className={styles.capacityBig}>
              ~
              {capacity != null
                ? (Math.floor(capacity * 10) / 10).toFixed(1)
                : '—'}
            </span>
            <span className={styles.capacitySmall}>projects / month</span>
          </div>
          <span className={styles.capacityCaption}>
            {fmtUsd(priceUsd)} / month · {fmtCredits(creditsPerMonth)} credits
          </span>
        </>
      )}
    </div>
  );
}

/* ---------------- FULL CATALOG (TABS) ---------------- */

function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('video');
  const categories = catalog.categories;

  const current = useMemo(
    () => categories.find((c) => c.id === activeCategory) ?? categories[0],
    [activeCategory, categories],
  );

  if (!current) return null;

  return (
    <div>
      <SectionTitle
        icon={<span aria-hidden>⇄</span>}
        title="Full model & action catalog"
        subtitle="Browse every priced model. Tap a category to switch tables."
      />

      <div className={styles.tabs} role="tablist">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === activeCategory}
            className={`${styles.tabBtn} ${c.id === activeCategory ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveCategory(c.id)}
            type="button"
          >
            {c.label}
          </button>
        ))}
      </div>

      <CategoryTable category={current} />
    </div>
  );
}

function CategoryTable({ category }) {
  const items = category.items ?? [];
  return (
    <div>
      {category.description && (
        <p
          className={styles.captionMuted}
          style={{ marginBottom: 16, fontSize: 14 }}
        >
          {category.description}
        </p>
      )}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Model / Action</th>
              <th>Unit</th>
              <th className={styles.num}>You pay (credits)</th>
              <th className={styles.num}>≈ USD</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className={styles.modelLabel}>
                    <span className={styles.modelLabelName}>{item.label}</span>
                    {item.badge && (
                      <span className={`${styles.badge} ${styles.badgeOutline}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.modelId && (
                    <span className={styles.modelLabelId} title={item.modelId}>
                      {item.modelId}
                    </span>
                  )}
                </td>
                <td>
                  <span className={styles.captionMuted}>{item.unit}</span>
                </td>
                <td className={`${styles.num} ${styles.numAccent}`}>
                  {fmtCredits(item.customerCredits)}
                </td>
                <td className={styles.num}>{fmtUsd(item.customerDollars)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- CREDIT MATH ---------------- */

function CreditMathFooter() {
  const { creditsPerDollar, dollarsPerCredit, defaultShotDurationSeconds } =
    catalog.constants;

  const rows = [];
  if (creditsPerDollar != null)
    rows.push({
      k: 'Conversion',
      v: `${creditsPerDollar.toLocaleString()} credits = $1`,
    });
  if (dollarsPerCredit != null)
    rows.push({
      k: '1 credit',
      v: `$${dollarsPerCredit.toFixed(4).replace(/0+$/, '0')}`,
    });
  if (defaultShotDurationSeconds != null)
    rows.push({
      k: 'Default shot',
      v: `${defaultShotDurationSeconds} seconds`,
    });
  rows.push({ k: 'Image 4K output', v: '2× credits' });
  rows.push({ k: 'Rollover bank', v: '2.5 months' });

  const half = Math.ceil(rows.length / 2);
  const left = rows.slice(0, half);
  const right = rows.slice(half);

  return (
    <div>
      <SectionTitle
        title="Credit math"
        subtitle="How credits convert to dollars, and the multipliers that affect every priced action."
      />
      <div className={styles.card}>
        <div className={styles.mathGrid}>
          <MathColumn rows={left} />
          <MathColumn rows={right} />
        </div>
      </div>
    </div>
  );
}

function MathColumn({ rows }) {
  return (
    <div>
      {rows.map((r) => (
        <div key={r.k} className={styles.mathRow}>
          <span className={styles.mathRowKey}>{r.k}</span>
          <span className={styles.mathRowVal}>{r.v}</span>
        </div>
      ))}
    </div>
  );
}
