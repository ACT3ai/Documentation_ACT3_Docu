// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACT3 AI Documentation',
  tagline: 'AI Filmmaking — script to cinematography to video',
  favicon: 'img/favicon/favicon.ico',

  // Full favicon / PWA icon set (provided in static/img/favicon/).
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicon/favicon.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/img/favicon/favicon-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/webp',
        sizes: '96x96',
        href: '/img/favicon/favicon-96x96-dark.webp',
        media: '(prefers-color-scheme: dark)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicon/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/img/favicon/site.webmanifest',
      },
    },
  ],

  future: {
    v4: true,
  },

  url: 'https://documentation.act3ai.com',
  baseUrl: '/',

  organizationName: 'act3ai',
  projectName: 'Documentation_ACT3_Docu',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // All paths below resolve relative to the project root (CWD), not this config file's location.
  // Docusaurus derives siteDir from the CWD, not from --config file location.
  staticDirectories: ['internal/static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './internal/sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        pages: {
          path: 'internal/src/pages',
        },
        theme: {
          customCss: './internal/src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/act3ai-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ACT3 AI Docs',
        logo: {
          alt: 'ACT3 AI Logo',
          src: 'img/favicon/favicon-96x96.png',
          srcDark: 'img/favicon/favicon-96x96-dark.webp',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/concepts/beats',
            position: 'left',
            label: 'Beats',
          },
          {
            to: '/concepts/shots',
            position: 'left',
            label: 'Shots',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'All Docs',
          },
          {
            href: 'https://act3ai.com',
            label: 'ACT3 AI',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/' },
              { label: 'Core Concepts', to: '/concepts/overview' },
              { label: 'Features', to: '/category/features' },
              { label: 'Integrations', to: '/category/integrations' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'ACT3 AI', href: 'https://act3ai.com' },
              { label: 'API Reference', to: '/api/overview' },
              { label: 'FAQ', to: '/faq/general' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ACT3 AI. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
