import React from "react";
import clsx from "clsx";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SearchBar from "@theme/SearchBar";
import styles from "./index.module.scss";
import { SearchBarFocusedContext } from "../hooks/SearchBarFocusedContext";
import Link from "@docusaurus/Link";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode, setColorMode } = useColorMode();
  const [isBannerUp, setBannerUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const setFocusedAnimation = (bool) => {
    setFocused(bool);

    if (bool) {
      setTimeout(() => {
        setBannerUp(bool);
      }, 200);
    } else {
      setBannerUp(bool);
    }
  };

  return (
    <SearchBarFocusedContext.Provider
      value={{ isFocused: isFocused, setFocused: setFocusedAnimation }}
    >
      <header>
        <div className="container">
          <div className={clsx(styles.heroBannerLayout)}>
            <div className={styles.heroBanner}>
              <div
                className={clsx(
                  styles.imgNavLayout,
                  isFocused ? styles.bannerUp : ""
                )}
              >
                <div className={clsx(styles.bannerImgLayout)}>
                  <div
                    className={clsx(
                      styles.darkModeSwitch,
                      isAnimating ? styles.pull : ""
                    )}
                    onClick={() => {
                      handleClick();
                      setColorMode(colorMode === "light" ? "dark" : "light");
                    }}
                  ></div>
                  <div className={styles.bannerThemeShadow}></div>
                  <div className={styles.bannerImg}></div>
                  <div className={styles.bannerImgInnerShadow}></div>
                </div>
                <div className={styles.mainNavLayout}>
                  <div className={styles.mainNavBox}>
                    <Link to="help">
                      <span>指南</span>
                    </Link>
                    <Link to="about">
                      <span>关于</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  styles.searchBarLayout,
                  isBannerUp ? styles.bannerUp : ""
                )}
              >
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </header>
    </SearchBarFocusedContext.Provider>
  );
}

export default function Home() {
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
