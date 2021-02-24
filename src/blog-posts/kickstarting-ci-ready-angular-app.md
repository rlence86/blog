---
title: 'Kickstarting CI ready Angular app'
date: '2021-02-24'
tags: ['Jokill', 'Angular', 'Jest', 'Cypress']
---

## Creating the app

I will create a frontpage for the Jokill project, so my first step is creating an Angular app for it. After this step, it will be a very simple app and it could be implemented as a simple HTML page, but this will be the frontend for the users in the end and I will add many more capabilities to it in the future.

To create a new Angular app, you can follow the simple steps described in [Angular CLI](https://cli.angular.io/) documentation. I can create my project just by running

```
ng new jokill-web
```

## Changing testing engines

This new project has a default component App that will be my starting point to work. It also provides tests for it (unit tests) that will run with [Karma](https://karma-runner.github.io/latest/index.html). I'm very used to work with Karma, but this time I want to give it a go with [Jest](https://jestjs.io/) because I've heard good things about it. Very good things.

According to this [article](https://charith-rhettiarachchi.medium.com/why-use-jest-over-karma-for-angular-testing-b56ffa82f8):
- Jest is several times faster than Karma. Jest doesn't use a browser for running tests
- Jest has support for snapshot testing (I want to try this)
- Better for CI because you don't need to have a browser on your pipeline
- Zero config

So I followed these really [good instructions](https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/) to remove Karma and Jasmine and add Jest to my project.

Once I had installed Jest, I want to run tests doing 
```
npm run test
```
so I remove the test line inside package.json file (scripts section) and add these lines:
```
"test": "jest",
"test:watch": "jest --watch"
```

For e2e tests, Angular provides [Protractor](https://www.protractortest.org/#/) which I've never used before. Anyway, from what I've read [out there](https://christianlydemann.com/why-i-moved-from-protractor-to-cypress/), I have decided to remove Protractor from the Angular project and use [Cypress](https://www.cypress.io/) instead, following these [instructions](https://medium.com/briebug-blog/switching-to-cypress-from-protractor-in-less-than-30-seconds-b60b00def4a0).

Once installed Cypress, we can check and modify the first e2e included in cypress/integration/spec.ts. I modified it to have something like this (and make it work):
```
it('loads examples', () => {
  cy.visit('/');
  cy.contains('home-page works!');
});
```

## Preparing to CI

Following this [tutorial](https://docs.cypress.io/guides/continuous-integration/introduction.html) I created a "ci" command to run linting, all tests, and build, to be able to use it later in our pipeline. My package scripts area looks like this:
```
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "cy:run": "cypress run",
    "e2e:ci": "start-server-and-test start http://localhost:4200 cy:run",
    "ci": "ng lint && npm run test && npm run e2e:ci && ng build --prod"
  },
```
So running npm run ci, I check linting, run jest tests in CI mode, and use start-server-and-test plugin (as explained [here](https://docs.cypress.io/guides/continuous-integration/introduction.html)) to run my server and run e2e tests on it. The last step is the build of the site.

## Wrap-up
In this post I have explained how I did these changes:
- Create a clean Angular project.
- Remove Karma and Jasmine and use Jest instead.
- Remove Protractor and use Cypress instead.
- Create a command to run linting, Jest tests, Cypress tests and build.

