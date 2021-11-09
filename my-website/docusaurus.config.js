// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Identity Network Foundation",
  tagline:
    "INF provides open access to a global identity creation and verification network, and associated digital wallet for humanity.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "INF", // Usually your GitHub org/user name.
  projectName: "everest-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/inf-log-new.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Governance",
          },
          {
            to: "https://everest-foundation.medium.com/",
            label: "Blog",
            position: "left",
          },
          {
            to: "https://docs.google.com/forms/d/1-Ycwr5_cMzlbsSVnwTVpxb4on52z_X-YFSGi4GlMmDw/edit",
            label: "Vote",
            position: "left",
          },
          {
            href: "https://wallet.everest.org/takePhoto",
            label: "Sign In",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Governance",
                to: "/docs/intro",
              },
            ],
          },

          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://everest-foundation.medium.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Identity Network Foundation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
