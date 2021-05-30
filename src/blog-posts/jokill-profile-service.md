---
title: 'Creating Jokill Profile Service'
date: '2021-05-30'
tags: ['Jokill', 'Java', 'SpringBoot']
---

The first microservice to be built is the Jokill Profile Service. It will be responsible to manage everything profile-related. In this first iteration, it will be a simple CRUD microservice to handle profile info from our users.

I will be using JPA for persistance and the first model for a profile will be this:

```java
public class Profile {
    @Id
    @Column(length = 36, unique = true, nullable = false)
    private UUID profileId;

    @Column
    private String userName;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;
}
```
Every CRUD operation (Create, Read, Update, Delete) will have its controller and service to keep controllers and services doing only one thing. All of them will use a ProfileRepository which is a standard implementation of a JpaRepository.

With unit tests covering all controllers and services and an Integration Test making REST calls to endpoints, this microservice is ready to start storing users.

In the next steps, I will convert the Integration test into a more BDD (Behavior Driven Development) approach using [Cucumber](https://www.baeldung.com/cucumber-spring-integration).

You can check the code of the microservice [here](https://github.com/rlence86/jokill-profile-service).