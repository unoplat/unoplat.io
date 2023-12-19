---
id: intro-to-datainfra
title: The Infrastructure Plane
sidebar_position: 1
---
# Introduction to Infrastructure Plane

The infrastructure plane forms the basis of unoplat. It consists of components which are required for transit, persistence and forms the operational/control plane for the major of the components like flink, prometheus, grafana, k6 etc. 

Infrastructure is sometimes associated with compute infrastructure for example k8s provisioning. Unoplat provides a cloud agnostic platform to bootstrap your data platform with any k8s provider for the compute infrastructure. The infrastructure plane in unoplat consititues the the control plane for various frameworks for used by the dataproducts, transist and persistence infrastructure (MongoDB, Redpanda), secret management, container registry and  app management  . 