// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MINTvernetzt Docs',
  tagline: 'Dinosaurs are cool!',
  url: 'https://developer.mint-vernetzt.de/',
  baseUrl: '/',
  onBrokenLinks: 'warn', // throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MINTvernetzt',
  projectName: 'MINTvernetzt Docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      de : {
        htmlLang: 'de-DE',
      }
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'under-construction',
        content:
            '🚧 This page is still under construction. 🚧',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'MINTvernetzt',
        logo: {
          alt: 'm',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'm',
          src: 'img/logo-big.svg',
          srcDark: 'img/logo-big.svg',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
              {
                label: 'Website',
                to: '/website/welcome',
              },
              {
                label: 'Community-Platform',
                to: '/community-platform/welcome',
              },
            ],
          },
          {
            title: 'Social media',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/mintvernetzt',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mintvernetzt/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/mintvernetzt',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCVQSAkscPmmPmjYWDVuvQYg',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mint-vernetzt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. All Rights Reserved matrix gGmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
  }),

  customFields: {
    footer: {
      customLinks: [
        {
          label: 'Imprint',
          translationId: 'footer.imprint',
          href: 'https://mint-vernetzt.de/imprint/',
        },
        {
          label: 'Privacy Policy',
          translationId: 'footer.privacy',
          href: 'https://mint-vernetzt.de/privacy/',
        },
        {
          label: 'Newsletter',
          translationId: 'footer.newsletter',
          href: 'https://mint-vernetzt.de/mintvernetzt/#newsletter',
        },
        {
          label: 'Contact',
          translationId: 'footer.contact',
          href: 'https://mint-vernetzt.de/about/#contact-details',
        },
      ],
      customLogo:{
        src: 'img/bmbf.svg',
        alt: 'Bundesministerium für Bildung und Forschung',
        srcDark: 'img/bmbf.svg',
      }
    }
  },

  plugins: [
    async function tailwindcss(_context, _options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
