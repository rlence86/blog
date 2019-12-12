---
title: 'A taste of Kubernetes in your laptop'
date: '2019-12-12'
tags: ['Kubernetes']
---

I have been wondering how to run my own [Kubernetes](https://kubernetes.io/docs/home/) in localhost with testing purposes. My first shot was using a vagrant recipe to mount a full Kubernetes cluster with a master and two slaves. 

After some attempts, I abandoned the idea because of some issues with vagrant and after some troubleshooting, I just could create the master node. I was about to abandon the idea when I met [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/). Minikube is a single node Kubernetes cluster to be able to run it with fewer resources. Following the link, you have some different methods to install it. The only prerequisite is to have some of the supported [drivers](https://minikube.sigs.k8s.io/docs/reference/drivers/) installed. I have used [VirtualBox](https://www.virtualbox.org/).

To create your Kubernetes cluster, you have to run (this will try to allow 2GB of your memory for the cluster, so take it into account):

```bash
minikube start --vm-driver=virtualbox
```

When it finishes, you will see something like "Done! kubectl is now configured to use".

From now on, you will be able to interact with your cluster using kubectl or the dashboard. To use kubectl, you can install it in your terminal or use "minikube kubectl" instead. I will show my examples using the second option.

To get the info of your cluster:

```bash
minikube kubectl cluster-info
```

I want to create a new deployment in my cluster. In this deployment, I will install a [Jenkins](https://jenkins.io/) platform and expose it to be able to access it from my browser. To create it, I will use the docker image jenkins hosted in the [Docker Hub](https://hub.docker.com/_/jenkins/). Kubernetes will grab the image and will create a new deployment in my local cluster.

```bash
minikube kubectl -- create deployment jenkins --image=jenkins
```

You will see something like "deployment.apps/jenkins created". We can see the status of our new pods by running:

```bash
minikube kubectl get pod
```

Now, we can expose this new deployment as a service, so it can be accessible from outside of the cluster:

```bash
minikube kubectl -- expose deployment jenkins --type=NodePort --port=8080
```

We expose the port 8080 from the application. Depending of the application we are deploying here, we would need to expose a different port. After running it you will have something like "service/jenkins exposed".

How can we access our recently exposed service? Well, by running:

```bash
minikube service jenkins --url
```

You will have the exposed url and you can open it in your browser.

To be able to unlock Jenkins, we need to have some info from its logs. We will do it from the dashboard. To run your Kubernetes dashboard:

```bash
minikube dashboard
```

It will open a new tab in your browser where you will be able to manage your cluster. Let's look for our jenkins pod for reading its logs. On the left menu, click on pods. Now, click on jenkins pod and, when you are in, click in the logs icon (upper right symbols). This will show us the logs and we can copy the code below the "Please use the following password to proceed to installation:" text. 

Paste that code in the Jenkins form in your web browser and you will be able to finish your Jenkins installation. This way, you have a CI environment served from your Kubernetes cluster. Cool, eh?

With kubectl or the dashboard, you can add or remove your deployments. If you want to stop your minikube cluster, just run:

```bash
minikube stop
```

And, if you want to stop playing with it and remove everything, run:

```bash
minikube delete
```