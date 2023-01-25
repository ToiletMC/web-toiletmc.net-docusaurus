import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '始终紧跟最新版本',
    Svg: require('@site/static/img/drawing.svg').default,
    description: (
      <>
        紧跟 Minecraft 版本发布的脚步，为你来带最新的游戏体验，同时支持旧版本进入。
      </>
    ),
  },
  {
    title: '持续运行 4 年',
    Svg: require('@site/static/img/cake.svg').default,
    description: (
      <>
        服务器决不轻易跑路，在这几年中，服务器积累了一群数量相当可观的老玩家。
      </>
    ),
  },
  {
    title: 'PaperSpigot 强力驱动',
    Svg: require('@site/static/img/paper-logo.svg').default,
    description: (
      <>
        高性能的 Minecraft 服务器基石，修复了许多原版中存在的漏洞，并包含性能改进。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
