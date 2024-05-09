import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "厕所总部",
  tagline: "高版本 Minecraft 生存服务器",
  favicon: "img/logo/favicon.png",

  // Set the production url of your site here
  url: "https://toiletmc.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ToiletMC", // Usually your GitHub org/user name.
  projectName: "web-toiletmc.net", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "guide",
          routeBasePath: "guide",
          editUrl: "https://github.com/ToiletMC/web-toiletmc.net/tree/main",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "1Q1C9VU3SX",
      apiKey: "e301f3f8b4684cd3b2eab10cc4cdbff5",
      indexName: "toiletmc",
      contextualSearch: true,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "厕所总部",
      logo: {
        alt: "ToiletMC Logo",
        src: "img/logo/logo512.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "帮助",
        },
        {
          type: "dropdown",
          label: "审核",
          position: "right",
          items: [
            {
              label: "绿色联盟",
              to: "/review/green-alliance",
            },
            {
              label: "建筑审核",
              to: "/review/build",
            },
          ],
        },
        {
          to: "about",
          position: "left",
          label: "关于",
        },
        {
          href: "http://qq.toiletmc.net",
          label: "加入Q群",
          position: "right",
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
              href: "http://qq.toiletmc.net",
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
          title: "开源",
          items: [
            {
              label: "Github",
              href: "https://github.com/ToiletMC",
            },
            {
              label: "Gitee",
              href: "https://gitee.com/toiletmc",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "建议反馈",
              href: "https://support.qq.com/products/49264",
            },
            {
              label: "维护日志",
              to: "changelog",
            },
            {
              label: "处罚记录",
              to: "punishment",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} toiletmc.net 保留所有权利。<br/>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011302000137">浙公网安备 33011302000137号</a><br/>
      <a href="https://beian.miit.gov.cn/" target=“_blank”>浙ICP备2021038660号-4</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
