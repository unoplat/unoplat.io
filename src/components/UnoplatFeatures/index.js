import React, { useState } from 'react';
import clsx from 'clsx';
import'./custom.features.css'

const planes =[
    {
        Svg: require('@site/static/img/PaaS.svg').default,
        title: 'Platform As A Service',
        hoverText: 'The onmouseover event is similar to the onmouseenter event. The difference is that the onmouseenter event does not bubble (does not propagate up the document hierarchy). See "More Examples" at the bottom of this page to better understand the differences.',
        followUpLink:'/docs/platform-as-a-service/introduction'
    },
    {
        Svg: require('@site/static/img/StorageAndStreaming.svg').default,
        title: 'Storage and Streaming Plane',
        hoverText: 'Random Text',
        followUpLink:'/docs/data-streaming-plane/introduction'
    },
    {
        Svg: require('@site/static/img/SuperChargedAppTemplates.svg').default,
        title: 'Supercharged App Templates',
        hoverText: 'Random Text',
        followUpLink:'/docs/super-charged-app-templates/introduction'

    },
    {
        Svg: require('@site/static/img/DeveloperExperience.svg').default,
        title: 'Developer Experience Plane',
        hoverText: 'Random Text',
        followUpLink:'/docs/developer-experience-plane/introduction'
    },
    {
        Svg: require('@site/static/img/GenerativePlane.svg').default,
        title: 'Generative Plane',
        hoverText: 'Random Text',
        followUpLink:'/docs/generative-plane/introduction'
    },
    {
        Svg: require('@site/static/img/DataMesh.svg').default,
        title: 'Data Mesh',
        hoverText: 'Random Text',
        followUpLink:'/docs/data-mesh-plane/introduction'
    },
    {
        Svg: require('@site/static/img/ManagementPlane.svg').default,
        title: 'Management Plane',
        hoverText: 'Random Text',
        followUpLink:'/docs/management-plane/introduction'
    },
    {
        Svg: require('@site/static/img/KnowledgeEngineering.svg').default,
        title: 'Knowledge Engineering Plane',
        hoverText: 'Random Text',
        followUpLink:'/docs/knowledge-engineering-plane/introduction'
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
          <h3>{title}</h3>
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
          "UnoPlat utilizes Kubernetes as the orchestration medium, deploying a fleet of toolkits that enable the creation and management of a Data Mesh. UnoPlat is composed of a collection of planes"
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



