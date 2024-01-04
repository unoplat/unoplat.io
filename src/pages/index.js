import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import TheProblemCard from '../components/TheProblem';
import Hexagon from '../components/UnoplatFeatures';
import HowItWorks from '../components/howItWorks';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
    return(
        <header className={clsx("headerMain",styles.headerMain)}>
          <div className="headerContainer">
                  <h1 className={clsx("headerTitle",styles.headerTitle)}>{siteConfig.title}</h1>
                  <img  className={clsx("logoImage",styles.logoImage)} src ={"/img/unoplatnew.svg"} alt="unoplat logo"/>
                  <p className={clsx("headerTagLine",styles.headerTagLine)}>Single Human Backend Enterprise</p>            
        </div> 
        <div className={clsx("buttons",styles.buttons)}>
                    <Link
                      className={clsx("button button--secondary button--lg",styles.docButton)}
                      to="/docs">
                      Documentation
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
      >
      <HomepageHeader />
      <main>
      <TheProblemCard/>
      <Hexagon/>
      <HowItWorks/>
      </main>
    </Layout>
  );
}
