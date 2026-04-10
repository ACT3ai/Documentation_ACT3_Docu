// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACT3 AI Documentation',
  tagline: 'AI Filmmaking — script to cinematography to video',
  favicon: 'img/favicon.ico',

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false, // disable blog until needed
        theme: {
          customCss: './src/css/custom.css',
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
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/getting-started/introduction',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/docs/concepts/beats',
            position: 'left',
            label: 'Beats',
          },
          {
            to: '/docs/concepts/shots',
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
            to: '/docs/legacy-wiki',
            position: 'left',
            label: 'Legacy Wiki',
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
              { label: 'Getting Started', to: '/docs/getting-started/introduction' },
              { label: 'Core Concepts', to: '/docs/concepts/overview' },
              { label: 'Features', to: '/docs/category/features' },
              { label: 'Integrations', to: '/docs/category/integrations' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'ACT3 AI', href: 'https://act3ai.com' },
              { label: 'API Reference', to: '/docs/api/api-overview' },
              { label: 'FAQ', to: '/docs/faq/faq-general' },
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
