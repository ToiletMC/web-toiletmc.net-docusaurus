// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "厕所总部",
  tagline: "高版本 Minecraft 生存服务器",
  url: "https://toiletmc.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ToiletMC", // Usually your GitHub org/user name.
  projectName: "toiletmc.net", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "help",
          routeBasePath: "help",
          editUrl: "https://github.com/ToiletMC/toiletmc.net/tree/main",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/ToiletMC/toiletmc.net/tree/main',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        editUrl: "https://github.com/ToiletMC/toiletmc.net/tree/main",
        // ……其他选项
      },
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: ["help", "community"],
        docsDir: ["help", "community"],
        language: ["en", "zh"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "厕所总部",
        logo: {
          alt: "My Site Logo",
          src: "img/logo32.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "帮助",
          },
          {
            to: "community",
            position: "left",
            label: "社区",
            activeBaseRegex: `/community/`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "宣传",
            items: [
              {
                label: "我的世界找服网",
                href: "https://www.fansmc.com/server/426.html",
              },
              {
                label: "我的世界中文站",
                href: "https://www.minecraftzw.com/27108.html",
              },
              {
                label: "MCBBS",
                href: "https://www.mcbbs.net/thread-1385657-1-1.html",
              },
              {
                label: "MC百科",
                href: "https://play.mcmod.cn/sv20183361.html",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "QQ群聊",
                href: "https://jq.qq.com/?_wv=1027&k=Uc4Zt2F1",
              },
              {
                label: "爱发电",
                href: "https://afdian.net/a/ToiletMC",
              },
              {
                label: "Bilibili",
                href: "https://space.bilibili.com/1167348859",
              },
            ],
          },
          {
            title: "其它",
            items: [
              {
                label: "Github",
                href: "https://github.com/ToiletMC",
              },
            ],
          },
        ],
        copyright: `版权所有 © 2019-${new Date().getFullYear()} 厕所总部。 </br> <a href="https://beian.miit.gov.cn/" target=“_blank”>浙ICP备2021038660号-4</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
