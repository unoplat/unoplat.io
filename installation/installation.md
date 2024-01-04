---
title: Installation Guide
slug: /
layout: page
date: 09/09/2023
Tags:
 -Installtion
sidebar_position: 1
---

### Installing UnoPlat

UnoPlat believes in speed and enriching developer experience. We support Command Line Interface (CLI) based installation

#### Prerequisite:
1. [Fig](https://fig.io/)
2. [Rancher Desktop](https://rancherdesktop.io/) / [Orbstack](https://orbstack.dev/download)

**Note**: You can find the installation steps on fig as well
1. Go to Scripts 
2. In Marketplace, search for unoplat-playground
3. Click the button and follow the steps on screen 

#### Installation Steps for MacOS:

1. Install kubectl package using a package manager(brew)

```
brew install kubectl
```

2. Install Helm package 

```
brew install helm
```

3. Install step package for Certificate Authority and Cert Generation

```
brew install step
```

4. Install jq package 

```
brew install jq
```



5. Run the command:

```
fig run deploy-unoplat-playground
```

 and witness the deployment of UnoPlat


 **Happy Platforming ~ Team UnoPlat**

