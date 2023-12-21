import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ContributorCard from '@site/src/components/Contributors/contributors';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
    return(
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={clsx('hero hero-image', styles.heroImage)}>
            < img src={require("/img/unoplat.png").default} />
          </div>
        </header>
    )
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ContributorCard />
      </main>
    </Layout>
  );
}
