---
title: 'Devlog: A basketball Game - 1'
date: '2020-12-20'
tags: ['Games dev']
---

Last night I kickstarted a new game made with [Unity](https://unity.com/). I wanted to start it a long time ago but I think the time has come. 

I'm not a game developer, but I want to learn on every iteration I plan to do with this. The game isn't still clear in my mind, but I want to make a Voxel Basketball game. I have started to make some voxel assets and I'm also enrolled in a [voxel characters course](https://www.domestika.org/es/courses/1404-introduccion-al-voxel-art-para-el-diseno-de-personajes/course), so I think this is the best way to put everything into practice.

<div style="text-align:center">
  <iframe
    src="https://instagram.com/p/CI_JoiyHbIp/embed"
    frameborder="0"
    allowfullscreen
    scrolling="no"
    allowtransparency
    width="320"
    height="320"
  ></iframe>
</div>

## The prototype

I have also started prototyping in Unity with two players and a ball. At this early stage, you can control only the player with the ball, and pass the ball to the other player. While the ball is in the air, both players are blocked. When the second player receives the ball (which happens with 100% accuracy at this point) you control that player and you can move it in the scene. You can also pass the ball back to the first player.

I'm quite happy with this first interaction between players and how easy is to handle making the ball a child of some of the player, detach it and make it the child of the other player when received. I have also added a little box on top of each player to know where are they looking to.

<iframe width="560" height="315" src="https://www.youtube.com/embed/p8cRAZXuSZw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Next steps

- Make the player look to the teammate before passing the ball (no magic passes without looking).
- Fine-tune player movement. I want the rotation to be more fluid and not only look at 90, 180, 270, 360 degrees.
- Add basketball court and put the camera in isometric perspective (approx).
- Add outer bounds on the basketball court so players can't escape from it.
- Add a basket and make players able to shot and score.