// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://liang-tian-yu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liang-tian-yu', // Usually your GitHub org/user name.
  projectName: 'liang-tian-yu.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-CN',
      },
    }
  },

  presets: [
    [
      './src/preset', // use local preset instead of classic
      /** @type {import('./src/preset').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liang-tian-yu/liang-tian-yu.github.io/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liang-tian-yu/liang-tian-yu.github.io/tree/main/blog',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('./src/preset').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/blog/archive', label: '归档', position: 'left'},
          {
            href: 'https://github.com/liang-tian-yu/liang-tian-yu.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '版块',
            items: [
              {
                label: '文档',
                to: '/docs',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '归档',
                to: '/blog/archive',
              }
            ],
          },
          {
            title: '关于',
            items: [
              {
                label: '邮箱',
                href: 'mailto:liang_tian_yu@foxmail.com',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '友链',
                to: '/links',
              },
            ],
          },
        ],
        copyright: `2024 - ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      search: {
        hashed: true,
        language: [ 'en', 'zh' ],
        highlightSearchTermsOnTargetPage: true,
        hideSearchBarWithNoSearchContext: true,
      }
    }),
};

export default config;
