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
    path: '/docs',
    component: ComponentCreator('/docs', '1da'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/datainfra-appreloader',
        component: ComponentCreator('/docs/unoplat-datainfra/datainfra-appreloader', '913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/datainfra-flinkoperator',
        component: ComponentCreator('/docs/unoplat-datainfra/datainfra-flinkoperator', 'eae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/datainfra-harbor',
        component: ComponentCreator('/docs/unoplat-datainfra/datainfra-harbor', 'a5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/datainfra-k6',
        component: ComponentCreator('/docs/unoplat-datainfra/datainfra-k6', 'a8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/datainfra-keda',
        component: ComponentCreator('/docs/unoplat-datainfra/datainfra-keda', '569'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/datainfra-sealedsecrets',
        component: ComponentCreator('/docs/unoplat-datainfra/datainfra-sealedsecrets', 'e2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-datainfra/intro-to-datainfra',
        component: ComponentCreator('/docs/unoplat-datainfra/intro-to-datainfra', '798'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-dev-plane/intro-to-developer-plane',
        component: ComponentCreator('/docs/unoplat-dev-plane/intro-to-developer-plane', '723'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-monitoring-plane/intro-to-monitoring-and-observability',
        component: ComponentCreator('/docs/unoplat-monitoring-plane/intro-to-monitoring-and-observability', 'd4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-network-and-policy-plane/intro-to-consul',
        component: ComponentCreator('/docs/unoplat-network-and-policy-plane/intro-to-consul', '90c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/unoplat-network-and-policy-plane/intro-to-datainfra',
        component: ComponentCreator('/docs/unoplat-network-and-policy-plane/intro-to-datainfra', '216'),
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
