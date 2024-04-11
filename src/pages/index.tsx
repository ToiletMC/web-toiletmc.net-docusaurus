import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/guide#即刻加入游戏"
          >
            加入游戏：play.toiletmc.net
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`为了更美好的世界`}
      description="厕所总部是一个创立于2019年8月15日的 Minecraft 服务器，紧跟最新的 Minecraft 版本同时提供粘液科技和魔法的全新玩法。有许多来玩过的玩家最后选择留在厕所总部，组成一个和谐友爱的游戏社区。"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
