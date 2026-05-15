// Hardcoded pricing catalog data — mirrors pricing.service.ts output shape.
// Keep MARGIN values and item lists in sync with
// /aitaskassembly-appsrv/src/modules/pricing/pricing.service.ts

const CREDITS_PER_DOLLAR = 500;
const DEFAULT_SHOT_DURATION = 8;
const STARTER_CREDITS_PER_MONTH = 24500 * (CREDITS_PER_DOLLAR / 50); // 245,000
const PRO_CREDITS_PER_MONTH = 87500 * (CREDITS_PER_DOLLAR / 50); // 875,000

const MARGIN = {
  VIDEO: 0.3,
  IMAGE: 0.3,
  AUDIO: 0.5,
  MOCAP: 0.5,
  AI: 0.4,
  RENDER: 0.3,
};

const toItem = (raw, margin) => {
  const vendorCredits = raw.vendorDollars * CREDITS_PER_DOLLAR;
  const customerCredits = Math.round(vendorCredits * (1 + margin));
  const customerDollars = customerCredits / CREDITS_PER_DOLLAR;
  return {
    ...raw,
    customerCredits,
    customerDollars,
  };
};

const D = DEFAULT_SHOT_DURATION;

/* ---------------- VIDEO ---------------- */
const videoRaw = [
  {
    id: 'grok-imagine',
    label: 'Grok Imagine',
    modelId: 'xai/grok-imagine-video/text-to-video',
    unit: `${D}s clip, 720p, native audio`,
    vendorDollars: 0.07 * D,
    badge: '720p',
  },
  {
    id: 'wan-2-6',
    label: 'Wan 2.6',
    modelId: 'wan/v2.6/text-to-video',
    unit: `${D}s clip, 1080p, native audio`,
    vendorDollars: 0.15 * D,
    badge: '1080p',
  },
  {
    id: 'veo-3-1-fast-low',
    label: 'Veo 3.1 Fast (720p)',
    modelId: 'fal-ai/veo3.1/fast',
    unit: `${D}s clip, 720p, native audio`,
    vendorDollars: 0.15 * D,
    badge: '720p Fast',
  },
  {
    id: 'veo-3-1-fast-hq',
    label: 'Veo 3.1 Fast (1080p)',
    modelId: 'fal-ai/veo3.1/fast',
    unit: `${D}s clip, 1080p, native audio`,
    vendorDollars: 0.15 * D,
    badge: '1080p Fast',
  },
  {
    id: 'veo-3-1-hq',
    label: 'Veo 3.1',
    modelId: 'fal-ai/veo3.1',
    unit: `${D}s clip, 1080p, native audio`,
    vendorDollars: 0.4 * D,
    badge: '1080p',
  },
  {
    id: 'seedance-2-fast',
    label: 'Seedance 2.0 Fast (720p)',
    modelId: 'bytedance/seedance-2.0/fast',
    unit: `${D}s clip, 720p, native audio`,
    vendorDollars: 0.2419 * D,
    badge: '720p Fast',
  },
  {
    id: 'seedance-2-hq',
    label: 'Seedance 2.0 (1080p)',
    modelId: 'bytedance/seedance-2.0',
    unit: `${D}s clip, 1080p, native audio`,
    vendorDollars: 0.6804 * D,
    badge: '1080p Top Quality',
  },
  {
    id: 'wan-onprem',
    label: 'Wan (on-prem GPU)',
    modelId: 'wan',
    unit: `${D}s clip, + lipsync`,
    vendorDollars: 0.2 * D + 0.05,
    badge: '+ lipsync',
  },
];

/* ---------------- IMAGE ---------------- */
const imageRaw = [
  {
    id: 'imagin-fast',
    label: 'Imagin Fast',
    vendor: 'Internal',
    unit: 'per image (1k)',
    vendorDollars: 0.02,
    badge: 'draft',
  },
  {
    id: 'imagin-preview',
    label: 'Imagin Preview',
    vendor: 'Internal',
    unit: 'per image (1k)',
    vendorDollars: 0.04,
    badge: 'preview',
  },
  {
    id: 'imagin-ultra',
    label: 'Imagin Ultra',
    vendor: 'Internal',
    unit: 'per image (1k)',
    vendorDollars: 0.06,
    badge: 'high quality',
  },
  {
    id: 'nano-banana',
    label: 'Nano Banana 2',
    vendor: 'Google',
    unit: 'per image (1k)',
    vendorDollars: 0.08,
    badge: 'portrait',
  },
  {
    id: 'nano-banana-pro',
    label: 'Nano Banana Pro',
    vendor: 'Google',
    unit: 'per image (1k)',
    vendorDollars: 0.15,
    badge: 'premium',
  },
];

/* ---------------- AUDIO ---------------- */
const PER_CHAR = 0.0003;
const audioRaw = [
  {
    id: 'tts-100-chars',
    label: 'Text-to-Speech (100 chars)',
    vendor: 'TTS provider',
    unit: 'per 100 characters',
    vendorDollars: PER_CHAR * 100,
  },
  {
    id: 'tts-500-chars',
    label: 'Text-to-Speech (500 chars)',
    vendor: 'TTS provider',
    unit: 'per 500 characters',
    vendorDollars: PER_CHAR * 500,
  },
  {
    id: 'tts-1000-chars',
    label: 'Text-to-Speech (1,000 chars)',
    vendor: 'TTS provider',
    unit: 'per 1,000 characters',
    vendorDollars: PER_CHAR * 1000,
  },
  {
    id: 'lipsync',
    label: 'Lipsync (per clip)',
    vendor: 'fal.ai',
    unit: 'per ~5s clip',
    vendorDollars: 0.05,
  },
  {
    id: 'auto-trim',
    label: 'Auto-trim audio',
    vendor: 'Internal',
    unit: 'per shot',
    vendorDollars: 0.05,
  },
  {
    id: 'auto-trim-speech',
    label: 'Auto-trim + Speech replace',
    vendor: 'Internal',
    unit: 'per shot',
    vendorDollars: 0.1,
  },
];

/* ---------------- MOCAP ---------------- */
const mocapRaw = [
  {
    id: 'mocap-body',
    label: 'MoCap — Body',
    vendor: 'Internal',
    unit: 'per second of footage',
    vendorDollars: 0.21,
  },
  {
    id: 'mocap-head',
    label: 'MoCap — Head',
    vendor: 'Internal',
    unit: 'per second of footage',
    vendorDollars: 0.21,
  },
  {
    id: 'mocap-voice',
    label: 'MoCap — Voice',
    vendor: 'Internal',
    unit: 'per second of footage',
    vendorDollars: 0.21,
  },
];

/* ---------------- RENDER ---------------- */
const renderRaw = [
  {
    id: 'blender-render',
    label: 'Blender Render',
    vendor: 'Internal GPU',
    unit: 'per second of shot',
    vendorDollars: 0.11,
  },
  {
    id: 'upscale-1080p',
    label: 'Upscale to 1080p',
    vendor: 'Internal GPU',
    unit: `per ${D}s shot`,
    vendorDollars: 0.11 * D,
  },
  {
    id: 'upscale-4k',
    label: 'Upscale to 4K (2160p)',
    vendor: 'Internal GPU',
    unit: `per ${D}s shot`,
    vendorDollars: 0.11 * D,
  },
  {
    id: 'shot-set-generation',
    label: 'Shot Set Generation',
    vendor: 'Internal',
    unit: 'per set',
    vendorDollars: 0.05,
  },
  {
    id: 'comfy-default',
    label: 'ComfyUI default video',
    vendor: 'Internal GPU',
    unit: `per ${D}s shot`,
    vendorDollars: 0.4,
  },
];

/* ---------------- AI WRITING ---------------- */
const aiRaw = [
  { id: 'ai-plot', label: 'Generate Plot', vendor: 'OpenAI / xAI', unit: 'per plot', vendorDollars: 0.019 },
  { id: 'ai-character-overview', label: 'Generate Character Overview', vendor: 'OpenAI / xAI', unit: 'per overview', vendorDollars: 0.0198 },
  { id: 'ai-character-profile', label: 'Generate Character Profile', vendor: 'OpenAI / xAI', unit: 'per profile', vendorDollars: 0.0771 },
  { id: 'ai-act', label: 'Generate Act', vendor: 'OpenAI / xAI', unit: 'per act', vendorDollars: 0.0151 },
  { id: 'ai-beat', label: 'Generate Beat', vendor: 'OpenAI / xAI', unit: 'per beat', vendorDollars: 0.0319 },
  { id: 'ai-scene', label: 'Generate Scene', vendor: 'OpenAI / xAI', unit: 'per scene', vendorDollars: 0.055 },
  { id: 'ai-scene-set', label: 'Generate Scene Set', vendor: 'OpenAI / xAI', unit: 'per scene set', vendorDollars: 0.0521 },
  { id: 'ai-shot', label: 'Generate Shot', vendor: 'OpenAI / xAI', unit: 'per shot', vendorDollars: 0.0858 },
  { id: 'ai-shot-depth', label: 'Generate Shot Depth', vendor: 'OpenAI / xAI', unit: 'per shot', vendorDollars: 0.0481 },
  { id: 'ai-shot-script', label: 'Generate Shot Script', vendor: 'OpenAI / xAI', unit: 'per shot', vendorDollars: 0.0019 },
  { id: 'ai-shot-p2v', label: 'Generate Shot P2V', vendor: 'OpenAI / xAI', unit: 'per shot', vendorDollars: 0.01027 },
  { id: 'ai-shot-merged-dynamic', label: 'Shot Merged Dynamic Tasks', vendor: 'OpenAI / xAI', unit: 'per shot', vendorDollars: 0.0343 },
  { id: 'ai-mega-prompt', label: 'Generate Mega Prompt YAML', vendor: 'OpenAI / xAI', unit: 'per shot', vendorDollars: 0.01315 },
  { id: 'ai-script-import', label: 'Script Import', vendor: 'OpenAI / xAI', unit: 'per import', vendorDollars: 120 },
  { id: 'ai-worker', label: 'AI Worker', vendor: 'OpenAI / xAI', unit: 'per run', vendorDollars: 1.9 },
];

/* ---------------- CATEGORIES ---------------- */
const categories = [
  {
    id: 'video',
    label: 'Video Generation',
    description: `Per ${D}-second clip. Side-by-side comparison of every supported model.`,
    items: videoRaw.map((r) => toItem(r, MARGIN.VIDEO)),
  },
  {
    id: 'image',
    label: 'Image Generation',
    description: '4K resolution doubles the credit cost on all image models.',
    items: imageRaw
      .map((r) => toItem(r, MARGIN.IMAGE))
      .sort((a, b) => a.customerCredits - b.customerCredits),
  },
  {
    id: 'audio',
    label: 'Audio (TTS, Lipsync, Post-processing)',
    description: 'Speech generation and post-processing actions.',
    items: audioRaw.map((r) => toItem(r, MARGIN.AUDIO)),
  },
  {
    id: 'mocap',
    label: 'Motion Capture',
    description: 'Per-second motion capture, billed by uploaded footage length.',
    items: mocapRaw.map((r) => toItem(r, MARGIN.MOCAP)),
  },
  {
    id: 'render',
    label: 'Render, Upscale & Export',
    description: 'Internal GPU render passes and post-generation upscale.',
    items: renderRaw.map((r) => toItem(r, MARGIN.RENDER)),
  },
  {
    id: 'ai-writing',
    label: 'AI Writing & Story Generation',
    description: 'LLM-driven story hierarchy actions (plot → act → beat → scene → shot).',
    items: aiRaw.map((r) => toItem(r, MARGIN.AI)),
  },
];

/* ---------------- PLANS ---------------- */
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    priceUsd: 49,
    creditsPerMonth: STARTER_CREDITS_PER_MONTH,
    rolloverCredits: STARTER_CREDITS_PER_MONTH * 2.5,
    rolloverMonths: 2.5,
    storageGb: 50,
    concurrentJobs: 3,
    useType: 'Personal use',
    features: [
      'Personal use only',
      'Motion videos without watermark',
      'AI Image and Video Gen',
      'Camera Controls',
      'Character Casting and Animation',
      'Videos retained for 4 months of non-use',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    priceUsd: 175,
    creditsPerMonth: PRO_CREDITS_PER_MONTH,
    rolloverCredits: PRO_CREDITS_PER_MONTH * 2.5,
    rolloverMonths: 2.5,
    storageGb: 740,
    concurrentJobs: 6,
    useType: 'Commercial up to 100k audience',
    featured: true,
    features: [
      'Commercial use up to 100k audience',
      'Motion videos without watermark',
      'Power of Blender AI Story Controls',
      'Power of Blender AI VFX Controls',
      'Create Private 2D and 3D Sets',
      'AI Image and Video Gen',
      'Camera Controls',
      'Character Casting and Animation',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    contactSales: true,
    rolloverMonths: 2.5,
    storageLabel: 'Unlimited',
    concurrentJobs: 10,
    useType: 'Unlimited commercial',
    features: [
      '4K video creation',
      'Priority support',
      'Unlimited commercial use',
      '10+ concurrent jobs',
      'Motion videos without watermark',
      'Power of Blender AI Story Controls',
      'Power of Blender AI VFX Controls',
      'Create Private 2D and 3D Sets',
    ],
  },
];

/* ---------------- PRODUCTIONS ---------------- */
const veo3Default = 0.4 * D; // Veo 3.1 default vendor cost per shot
const productionList = [
  { id: 'one-shot', label: 'Single 8s Shot', shots: 1 },
  { id: 'scene', label: 'Full Scene (3 shots)', shots: 3 },
  { id: 'five-min', label: '5-min Video (~50 shots)', shots: 50 },
  { id: 'thirty-min', label: '30-min Episode (~300 shots)', shots: 300 },
  { id: 'feature', label: '2-hour Feature (~1,200 shots)', shots: 1200 },
];

const productions = productionList.map((p) => {
  const vendorDollars = veo3Default * p.shots;
  const customerCredits = Math.round(
    vendorDollars * CREDITS_PER_DOLLAR * (1 + MARGIN.VIDEO),
  );
  const customerDollars = customerCredits / CREDITS_PER_DOLLAR;
  const starterPerMonth =
    Math.floor((STARTER_CREDITS_PER_MONTH / customerCredits) * 10) / 10;
  const proPerMonth =
    Math.floor((PRO_CREDITS_PER_MONTH / customerCredits) * 10) / 10;
  return {
    id: p.id,
    label: p.label,
    shots: p.shots,
    durationSeconds: p.shots * D,
    customerCredits,
    customerDollars,
    starterPerMonth,
    proPerMonth,
  };
});

const catalog = {
  constants: {
    creditsPerDollar: CREDITS_PER_DOLLAR,
    dollarsPerCredit: 1 / CREDITS_PER_DOLLAR,
    defaultShotDurationSeconds: DEFAULT_SHOT_DURATION,
  },
  plans,
  categories,
  productions,
};

/* ---------------- QUICK ANSWERS ---------------- */
const QUICK_ANSWERS = [
  {
    kind: 'item',
    q: 'How much for an 8-second Veo 3.1 clip?',
    categoryId: 'video',
    itemId: 'veo-3-1-hq',
    note: '1080p with native audio',
  },
  {
    kind: 'item',
    q: 'How much for a Seedance 2.0 Fast clip?',
    categoryId: 'video',
    itemId: 'seedance-2-fast',
    note: '720p, 8s with native audio',
  },
  {
    kind: 'item',
    q: 'How much for a Grok Imagine clip?',
    categoryId: 'video',
    itemId: 'grok-imagine',
    note: 'Cheapest 8s video model on the platform',
  },
  {
    kind: 'production',
    q: 'How much for a 5-minute video?',
    productionId: 'five-min',
    note: '~50 shots end-to-end on Veo 3.1',
  },
  {
    kind: 'production',
    q: 'How much for a 30-minute episode?',
    productionId: 'thirty-min',
    note: '~300 shots end-to-end',
  },
  {
    kind: 'capacity',
    q: 'How many 5-min videos on Starter?',
    productionId: 'five-min',
    planId: 'starter',
    note: 'Starter plan credit allowance',
  },
  {
    kind: 'capacity',
    q: 'How many 30-min episodes on Pro?',
    productionId: 'thirty-min',
    planId: 'pro',
    note: 'Pro plan credit allowance',
  },
  {
    kind: 'item',
    q: 'How much for a Nano Banana Pro image?',
    categoryId: 'image',
    itemId: 'nano-banana-pro',
    note: '1K resolution; 4K doubles credits',
  },
  {
    kind: 'item',
    q: 'How much for a dialog line (TTS)?',
    categoryId: 'audio',
    itemId: 'tts-500-chars',
    note: '~500 characters per line',
  },
  {
    kind: 'item',
    q: 'How much to import a full script?',
    categoryId: 'ai-writing',
    itemId: 'ai-script-import',
    note: 'Biggest single action — plan ahead',
  },
];

/* ---------------- PROJECT EXAMPLE ---------------- */
const PROJECT_TOTAL_SHOTS = 50;
const PROJECT_SHOT_DURATION = 8;
const PROJECT_DIALOGUE_SHOTS = 30;
const PROJECT_TOTAL_FOOTAGE_SECONDS = PROJECT_TOTAL_SHOTS * PROJECT_SHOT_DURATION;
const PROJECT_MERGE_CREDITS_PER_SEC = 77;

const PROJECT_STORY_STEPS = [
  { step: 'Generate Plot', perUnit: 13, count: 1, countLabel: '1 plot' },
  { step: 'Generate Character Overview', perUnit: 14, count: 1, countLabel: '1 overview' },
  { step: 'Generate Character Profile', perUnit: 54, count: 1, countLabel: '1 profile' },
  { step: 'Generate Acts', perUnit: 11, count: 3, countLabel: '3 acts' },
  { step: 'Generate Beats', perUnit: 22, count: 12, countLabel: '12 beats' },
  { step: 'Generate Scenes', perUnit: 39, count: 41, countLabel: '41 scenes' },
  { step: 'Generate Shot (overview)', perUnit: 60, count: 50, countLabel: '50 shots' },
  { step: 'Generate Shot Depth', perUnit: 34, count: 50, countLabel: '50 shots' },
  { step: 'Generate Shot Script', perUnit: 1, count: 50, countLabel: '50 shots' },
  { step: 'Generate Mega Prompt YAML', perUnit: 9, count: 50, countLabel: '50 shots' },
];

const PROJECT_PRODUCTION_STEPS = [
  { step: 'First-frame Image (Imagin Preview)', perUnit: 26, count: 50, countLabel: '50 shots' },
  { step: 'Video — Seedance 2.0 Fast (8s × 720p)', perUnit: 1258, count: 50, countLabel: '50 shots' },
  { step: 'Text-to-Speech dialogue (~60 chars)', perUnit: 14, count: 30, countLabel: '30 shots' },
  { step: 'Audio auto-trim', perUnit: 25, count: 30, countLabel: '30 shots' },
  {
    step: 'Final merge / render',
    perUnit: PROJECT_MERGE_CREDITS_PER_SEC,
    count: PROJECT_TOTAL_FOOTAGE_SECONDS,
    countLabel: `${PROJECT_TOTAL_FOOTAGE_SECONDS} sec`,
  },
];

const projectExample = {
  totalShots: PROJECT_TOTAL_SHOTS,
  shotDuration: PROJECT_SHOT_DURATION,
  dialogueShots: PROJECT_DIALOGUE_SHOTS,
  totalFootageSeconds: PROJECT_TOTAL_FOOTAGE_SECONDS,
  mergeCreditsPerSec: PROJECT_MERGE_CREDITS_PER_SEC,
  storySteps: PROJECT_STORY_STEPS,
  productionSteps: PROJECT_PRODUCTION_STEPS,
  veo31PerShot: 2080,
};

export {
  catalog,
  QUICK_ANSWERS,
  projectExample,
  CREDITS_PER_DOLLAR,
  DEFAULT_SHOT_DURATION,
};
