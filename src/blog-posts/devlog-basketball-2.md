---
title: 'Devlog: A basketball Game - 2'
date: '2020-12-27'
tags: ['Games dev']
---

## Done on this batch (from [the previous post](https://www.ramonlence.com/devlog-basketball-1/))

- <del>Make the player look to the teammate before passing the ball (no magic passes without looking).</del> DONE
- <del>Fine-tune player movement. I want the rotation to be more fluid and not only look at 90, 180, 270, 360 degrees.</del> DONE
- <del>Add basketball court and put the camera in isometric perspective (approx).</del> DONE
- <del>Add outer bounds on the basketball court so players can't escape from it.</del> DONE
- <del>Add a basket and make players able to shot and score.</del> DONE

<iframe width="560" height="315" src="https://www.youtube.com/embed/6fNmjlFCqlA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this batch, I've made improvements marked in the last post. The first design change is about game mechanics. Previous version movements worked with a keyboard/controller. Now, this is a mouse click game (or tap screen on mobile version). Like in the previous version, we control the player with the ball. When we click on the court, the player moves to that position. If we click on a mate, the player passes the ball, but first, our player looks to the mate, so we can mark the first target as done.

Rotation now is fluid, the player looks to the target position before starting moving, so no more movement is restricted to 90, 180, 270, 360 degrees.

A basketball court was added with a provisional texture found out there. Also added camera in isometric (approx) perspective.

Invisible bounds were added. For now, a message is logged when the ball trespasses them.

The basket was created with MagicaVoxel, experimenting with layers. Export from MagicaVoxel to Unity is quite easy (in .obj format). When the player clicks on the basket, a shot is made using a parabolic trajectory. Currently, all shots are good and we score on every attempt. I will start adjusting it in the next steps.


## Next steps
- Adjust ball speed when passing depending on the distance.
- Adjust shot speed depending on the distance to basket.
- Add a third player to the scene.
- Add score (1 point every good shot).
- Add a system to score randomly. (Simple system, 50% on every shot).
