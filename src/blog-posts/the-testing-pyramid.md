---
title: 'The Testing Pyramid'
date: '2020-05-07'
tags: ['Testing']
---

The first time I heard about the Testing Pyramid was two years ago and, at that moment, I didn't know how important it was going to be in my day by day development.

Testing Pyramid can be considered a framework where all your automated testing should fit. You can think about something like the food pyramid. For testing, in this case.
![](https://upload.wikimedia.org/wikipedia/commons/6/64/Testing_Pyramid.svg)

This pyramid can have variations depending on if you are testing frontend or backend system, but conceptually it is common for all of them.

The idea is simple, in the base of the pyramid you should have the fastest tests to run: unit tests. **You should test with unit tests as much as you can**. 
For instance, in a Java class, you can test all methods trying to have full coverage (or the maximum you can get). It is important that you mock your dependencies for them to be really unit.

The next layer, integration, is for testing how things work together. This is where exercise isolated subsystems, like doing endpoint calls and check the application is returning expected results. With these tests, we can cover things like configurations or annotations that can't be tested from a unit test perspective. We should create as many integration tests as needed to cover all paths that are not covered trying not to overtest. For instance, if we have an endpoint, we need to check it provides a correct response but, in the same flow, we don't have to test all the logic because it is tested in the unit test layer. Avoid overtesting is one of the most important things to take into account. So, again, **don't test what's tested in the previous layer**. These tests are much slower than unit tests, so we have to test all we need, but no more.

The last layer, e2e, is for checking all subsystems, already tested in the integration layer, are working together. This is the slowest kind of test, so **we have to wisely select flows we want to test**. At this level, what we want to discover is a system that is disconnected from others, like a database or a microservice so when you have the minimum amount of scenarios affecting all your systems, you should be done.

As a rule of thumb, if you change something in your code, some test should be broken. If it doesn't happen, you need to catch that error in a stage as low as possible (unit, integration, e2e).

So, when you plan your development, you should think in this pyramid, ore someone similar, for having you covered and don't make your build take longer that it needs.

This is how I understand this pyramid, but I recommend you to also read [Martin Fowler's post](https://martinfowler.com/bliki/TestPyramid.html) about this.

I feel this is now natural for me. My current target is to follow this Testing Pyramid in a TDD way.