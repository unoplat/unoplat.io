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
        <header className={clsx("headerMain",styles.headerMain)}>
          <div className="headerContainer">
                  <h1 className={clsx("headerTitle",styles.headerTitle)}>{siteConfig.title}</h1>
                  <p className={clsx("headerTagLine",styles.headerTagLine)}>Single Human Backend Enterprise</p>            
        </div> 
        <div className={clsx("buttons",styles.buttons)}>
                    <Link
                      className={clsx("button button--secondary button--lg",styles.docButton)}
                      to="/docs">
                      Documentaion
                  </Link>

                
                    <Link
                        className={clsx("button button--secondary button--lg",styles.gitButton)}
                        to="https://github.com/unoplat">
                        <span className="gitButton">
                        <img className={clsx("gitIcon",styles.gitIcon)} src={"/img/github.png"} alt="Star On GitHub"></img>
                        Star On GitHub
                        </span>
                       

                    </Link>
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
