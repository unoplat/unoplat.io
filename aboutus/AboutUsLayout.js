import React from 'react';
import clsx from 'clsx';
import './aboutus.css';

const Contributors=[  
  {
    name: 'Vipin Shreyas Kumar',
    position: 'Co-Founder',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: "Small description",
    linkedin: "https://www.linkedin.com/in/vipinshreyaskumar/"
   
  },
  {
        name: 'Jay Ghiya',
        position: 'Co-Founder',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
       description: "Small description to be filled later",
       linkedin: "https://www.linkedin.com/in/jay-ghiya/"

  },
      
   ];

function Contributor({Svg, name,position,description,linkedin}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="card-demo margin --md">
        <Svg className={"featureSvg"} role="img" />
      </div> 
      <div className="text--center padding-horiz--md">
        <div>
          <h3>{name}</h3>
          <a href={linkedin}>
            <img className="LinkedinImage " src="/img/linkedin.png" alt="Linkedin" />
          </a>
        </div>
        
        <h4>{position}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ContributorCard() {
  return (
      <section className={"features"}>
      <div className="container">
        <div className="row">
          {Contributors.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      </div>
      </section>
   
  );
}