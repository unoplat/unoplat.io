import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '888'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fa1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '586'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '195'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '58a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7c0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '805'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '719'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '793'),
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
    path: '/',
    component: ComponentCreator('/', '9f4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
