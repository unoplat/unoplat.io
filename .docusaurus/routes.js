import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '059'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6cc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '540'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '814'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '677'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd2a'),
    exact: true
  },
  {
    path: '/aboutus',
    component: ComponentCreator('/aboutus', 'd3c'),
    routes: [
      {
        path: '/aboutus/',
        component: ComponentCreator('/aboutus/', 'aee'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '426'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dataMeshPlane',
        component: ComponentCreator('/docs/dataMeshPlane', 'bb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/devExperience',
        component: ComponentCreator('/docs/devExperience', 'bac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/generativePlane',
        component: ComponentCreator('/docs/generativePlane', 'faa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/knowledgeEngineering',
        component: ComponentCreator('/docs/knowledgeEngineering', 'f24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/managementPlane',
        component: ComponentCreator('/docs/managementPlane', 'b60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/platformAsService',
        component: ComponentCreator('/docs/platformAsService', '0a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/storageAndStreaming',
        component: ComponentCreator('/docs/storageAndStreaming', 'a31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/superChargedAppTemplates',
        component: ComponentCreator('/docs/superChargedAppTemplates', '641'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/installation',
    component: ComponentCreator('/installation', '1ed'),
    routes: [
      {
        path: '/installation/',
        component: ComponentCreator('/installation/', '20d'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/playground',
    component: ComponentCreator('/playground', '6f7'),
    routes: [
      {
        path: '/playground/',
        component: ComponentCreator('/playground/', '193'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8f2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
