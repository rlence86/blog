---
title: 'Creating Jokill Gateway'
date: '2021-06-02'
tags: ['Jokill', 'Java', 'SpringBoot', 'Cloud']
---

I want to restrict access to all my microservices because I want to have a single entry point. This pattern is known as [API Gateway](https://microservices.io/patterns/apigateway.html). The main idea is that every call from the Frontend app will go through this Gateway and be redirected to the final destination by it.

At this point, the architecture after adding the Gateway should be something like this:

<img src="https://drive.google.com/uc?export=view&id=160kw3w7YGUsINJmuY4FzY-Hesyvwa-v4" alt="Jokill architecture v1" width="100%"/>

To develop the Gateway, I will use [Spring Cloud Gateway](https://spring.io/projects/spring-cloud-gateway) which is one more piece of the [Spring Cloud family](https://spring.io/projects/spring-cloud).

This is the first time I'm going to use this library, so I will follow these tutorials to get familiarised with it:
- [Getting Started](https://spring.io/blog/2019/06/18/getting-started-with-spring-cloud-gateway)
- [Hiding Services and Discovery](https://spring.io/blog/2019/07/01/hiding-services-runtime-discovery-with-spring-cloud-gateway)
- [Securing Services](https://spring.io/blog/2019/08/16/securing-services-with-spring-cloud-gateway)

My idea at this point is to handle authentication and other non-functional requirements at this point as much as possible. Let's see how it evolves.