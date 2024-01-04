import React, { useState } from 'react';
import clsx from 'clsx';
import'./custom.features.css'

const planes =[
    {
        Svg: require('@site/static/img/PaaS.svg').default,
        title: 'Platform As A Service',
        hoverText: 'UnoPlats Platform as a Service (PaaS) offering integrates advanced tools for development, deployment, and management, streamlining the SaaS creation process with features like CI/CD automation, container orchestration, and DevSecOps.',
        followUpLink:'/docs/platformAsService'
    },
    {
        Svg: require('@site/static/img/StorageAndStreaming.svg').default,
        title: 'Storage and Streaming Systems',
        hoverText: 'These systems in UnoPlat eliminate the complexity and steep learning curve typically associated with storage and streaming technologies.',
        followUpLink:'/docs/storageAndStreaming'
    },
    {
        Svg: require('@site/static/img/SuperChargedAppTemplates.svg').default,
        title: 'Supercharged App Templates',
        hoverText: 'The heart of UnoPlat, these templates are designed as foundational building blocks for SaaS creation, enabling users to easily assemble and customize their applications with minimal coding',
        followUpLink:'/docs/superChargedAppTemplates'

    },
    {
        Svg: require('@site/static/img/DeveloperExperience.svg').default,
        title: 'Developer Experience Plane',
        hoverText: 'UnoPlat Developer Experience: The Developer Experience in UnoPlat is designed to emulate the cohesive and sophisticated environment typically found in large enterprises, where dedicated teams create a seamless production-like experience.',
        followUpLink:'/docs/devExperience'
    },
    {
        Svg: require('@site/static/img/GenerativePlane.svg').default,
        title: 'Generative Plane',
        hoverText: 'Exciting Stuff Coming Soon',
        followUpLink:'/docs/generativePlane'
    },
    {
        Svg: require('@site/static/img/DataMesh.svg').default,
        title: 'Data Mesh',
        hoverText: 'UnoPlat simplifies the creation and management of a DataMesh, decentralizing and democratizing data across the application. It allows innovators to seamlessly access and integrate transactional and analytical data within their app templates, without delving into the intricacies of data infrastructure.',
        followUpLink:'/docs/dataMeshPlane'
    },
    {
        Svg: require('@site/static/img/ManagementPlane.svg').default,
        title: 'Management Plane',
        hoverText: 'The Management Plane, centered around the UnoPlat CLI (Command Line Interface), is designed to provide SaaS builders with a unified and simplified control mechanism for their projects.',
        followUpLink:'/docs/managementPlane'
    },
    {
        Svg: require('@site/static/img/KnowledgeEngineering.svg').default,
        title: 'Knowledge Engineering Templates',
        hoverText: 'UnoPlats Knowledge Engineering involves integrating domain expertise and data into the platform, thereby enhancing its capabilities for informed decision-making and process automation',
        followUpLink:'/docs/knowledgeEngineering'
    }
   
];

function setHoverText(text) {
    // Code logic to set the hover text
    <p className="hover-text">{text}</p>
    
  }

function Feature({Svg, title, hoverText,followUpLink}) {
    const [showParagraph, setShowParagraph] = useState(false);
    const handleImageClick = () => {
        setShowParagraph(!showParagraph);
      };
    return (
     
      <div className={clsx('col col--3')}>
        <div className="text--center">
          <div className="image-container">
          <Svg className="featureSvgs" role="img" onClick={handleImageClick} />
          <div className="text--center padding-horiz--md">
          {/* <h3>{title}</h3> */}
        </div>
          {showParagraph && (
          <div className="text-box">
              <p className="hover-text">{hoverText}</p>
              <a className="follow-up-link" href={followUpLink}>Read More ...</a>
          </div>        
        )}
        </div>
        </div> 

       
      </div>
    );
  }

  export default function Hexagon() {
    return (
        <div className="solution">
        <h1 className="solution-heading">How UnoPlat Helps ?</h1>
        <p className="text-box">
          " UnoPlat streamlines SaaS development by offering SuperCharged Application Templates for easy assembly and customization of applications with minimal coding"
       </p>
      <section className="features">
        <div className="container">
          <div className="row">
            {planes.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      </div>
    );
  }



