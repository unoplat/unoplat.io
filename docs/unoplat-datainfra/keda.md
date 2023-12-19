---
id: datainfra-keda
title: Reactive Scaling with KEDA 
sidebar_position: 3
---

> What works at scale may be different from scaling what works.

KEDA - Kubernetes Event-Driven Autoscaler is a Kubernetes (k8s) operator that automates the scaling of Kubernetes resources. KEDA works with Horizontal Pod Autoscaler(HPA) to trigger the scaling of conatiners on k8s. 

## Need for KEDA 

KEDA facilitates the concept of reactive scaling of k8s resources. Its a single-purpose, light weight component which can be added to any k8s cluster. With KEDA you can easily map resources that needs to be scaled.