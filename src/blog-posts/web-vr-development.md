---
title: 'Web VR Development'
date: '2020-12-19'
tags: ['VR']
---

With all the recent news about VR, maybe you could have wonder how you could create your VR experience. Going through a store approval process for your app can be tough if you are a solo developer, because some of them ask you for tons of documentation even before having your game ready, and they are rejecting most of them.

If you want to prototipe or create small experiences targeting your players directly, you should take a look to [WebXR standard](https://www.w3.org/TR/webxr/). This WebXR allows us to deploy our VR experiences and deliver them via web browser. This way, we can avoid store proceesses (and their fees). [(Read more on fundamentals of WebXR)](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Fundamentals).

## How to start

I think the best way to start developing WebVR experiences is using [A-Frame](https://aframe.io) framework. A-Frame was initially created by [Mozilla](https://www.mozilla.org/) and now is supported by [Supermedium](https://www.supermedium.com/) and the community. You can create cool experiences with it even if you are not a developer. This framework is built on top of [three.js](https://threejs.org/) (handling WebGL) and the WebXR standard, so our experiences will be cross-platform and supported by all modern web browsers.

In their [main page](https://aframe.io/), they provide some examples but you will get a great value from their [documentation](https://aframe.io/docs/1.1.0/introduction/). The most important part is to understand the [entity-component-system](https://aframe.io/docs/1.1.0/introduction/entity-component-system.html) it uses.

## The entity-component-system

This architecture is widely used on game engines like Unity. An **entity** is an object in your scene, without any behaviour or look. Every entity has a position, a rotation and a scale. A **component** is a modifier for our entity. It can add behaviour to the entity, a model (3D), shaders, materials, colors, etc. You can add as many components as you want to an entity, so this architecture favours composition over inheritance. You can use plenty of component provided by A-Frame by default, others provided by the community or create yours  by writing JS code. A **system** can be attached to your scene to allow communication between components or to store global values of your game, like the score.

## My demo game

I have recently created a VR experience using A-Frame. You can check the source code [here](https://github.com/rlence86/webvrdemo-ballgame). You can also play it [here](https://webvrdemo.ramonlence.com/). This game was tested in [Oculus Quest](https://www.oculus.com/quest) but it should work in other devices.

In the [repo](https://github.com/rlence86/webvrdemo-ballgame) you can find a **dist** folder. That is the folder to be published. Inside it, you can find the **index.html** file.
Fist thing you can see on the header is A-Frame importing, followed by imports for phisics and colliding sistems components to detect ball collisions with the VR hands. Last JS import is the **main.js** which is generated during project build. This file will include our JS code.

In the body, first elements are there for importing media like images and sounds. This experience is loading all of them before starting but this can be customised depending on your needs. 

Game background looking like Tron is provided by [aframe-environment-component](https://github.com/supermedium/aframe-environment-component) which you can also use for your experiences. Also this HTML is instatiating the platform under player's feet. Last thing you can see in the HTML is an empty entity with id **game-placeholder** and with the component **game** attached to it. Let's take a look to the custom components.

In *src/components* you can find all custom components I used for this experience. The **game** component is handling the game status and is in charge of showing the starting menu, instantiating the **ball-game** and detect when it is finished. The **menu** component is in charge of showing the options (only one in this example), handle when it is selected and emitting an event when that happens. The **ball-game** component is in charge of start instantiating random balls, detect when they are intercepted or they reach their target and emit an event when the game is over. The **ball** component defines every ball behaviour.

## Some WebVR demos

I made this video to show some WebVR demos. First one is the basic [Hello World of A-Frame](https://aframe.io/examples/showcase/helloworld/). Second one is the [game](https://webvrdemo.ramonlence.com/) I created and discussed before. The last one is the [WebXR Hello World](https://mixedreality.mozilla.org/hello-webxr/) developed by Mozilla. This last one was not created with A-Frame and you can find more details about it in their [blog](https://blog.mozvr.com/hello-webxr/).

[![WebVR Demo](https://img.youtube.com/vi/DWry679L8WY/0.jpg)](https://www.youtube.com/watch?v=DWry679L8WY "WebVR Demo")