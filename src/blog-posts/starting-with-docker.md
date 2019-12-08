---
title: 'Starting with Docker'
date: '2019-12-08'
tags: ['Docker']
---

Until now I have approached [Docker](https://www.docker.com/) as a user, installing it (facing some problems in Windows) and running some already created images from [Docker Hub](https://hub.docker.com/).

This time, as I want to go deeper and create my images to be able to run my apps anywhere, I have followed this [Hello Docker tutorial](https://www.basefactor.com/hello-docker).

To follow it, you will clone two repositories and follow some detailed instructions with explanations. The tutorial will guide you throw creating images and running them. It will also show you how to create your .dockerignore and Dockerfile, how to create images from them and run them.

Depending on your installation, you will be able to run docker directly or maybe you will need to run them as superuser.

Docker is a quite good approach to ship your software. As an example, I wasn't able to run the frontend app on my laptop without containerizing it. I was facing several node problems. After putting it in a Docker container following the tutorial instructions, everything went smooth.

Give it a try! You will spend about an hour on going through it and you will get a real taste about how Docker works.