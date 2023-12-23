import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Contributors=[
    {
        title: 'Jay Ghiya',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
       
      },
      {
        title: 'Vipin Shreyas Kumar',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      },
   ];

function Contributor({Svg, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> 
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function ContributorCard() {
  return (
      <section className={styles.features}>
      <div className="container">
        <h1>Contributors</h1>
        <div className="row">
          {Contributors.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      </div>
      </section>
   
  );
}