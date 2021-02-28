---
title: 'Creating Jokill homepage and some tests for it'
date: '2021-02-28'
tags: ['Jokill', 'Angular', 'Jest', 'Cypress']
---

The first step in frontend development for my Jokill system is creating a simple homepage. The main idea is to have a small explanation about the project 
and some tests for the current components. The mobile layout looks like this:

<img src="https://drive.google.com/uc?export=view&id=1D0WLbK7wtPeEezSgYwqz-XjMGgqhYAP8" alt="Jokill homepage mobile layout" width="200"/>

##Unit and snapshot testing
To create this structure in my Angular app, I have created 4 components. The first one is the App component, the main one which contains all others. Its template looks like this:

```html
<div class="app__container">
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
</div>
```

As we can see, this component is using a Header component, a Footer component and a Router to display different pages sharing header and footer between them. To unit test this component using [Jest](https://jestjs.io/) I created dummy components for the header and the footer with the same selectors used in the real component. I also created a routing rule to inject another dummy component, testing also routing is correctly injected in this component. You can check file src/app/app.component.spec.ts on this [commit](https://github.com/rlence86/jokill-web/commit/06584e5c0318f6594e437fb860d07d4151a0ab1b).

I also added a snapshot test using these dummy components, so I can make sure that class app__container is correctly injected and never removed.

```
  it(`Renders correctly`, fakeAsync(() => {
    router.navigateByUrl('');
    tick();
    expect(fixture).toMatchSnapshot();
  }));
```

This test navigates to the dummy URL to show the dummy component and takes a snapshot. [Snapshot testing](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest) is explained on Jest site and I have started using this in my project. Probably in this phase is a bit overtesting but I think it will be useful when the project evolves.

Header and Footer tests are trivial, so for them I only added snapshots to check that CSS attributes are in place.

I added a new default route to the HomePage component, so the first thing the site renders is this page, as shown in the screenshot.

```
const routes: Routes = [
  { path: '', component: HomePageComponent }
];
```

Whit this route added to app-routing.module.ts, we will get the desired effect. 

Our HomePageComponent is very simple and it is only rendering plain HTML, so the only test I added there is another snapshot of it to know if any change is made on it.

##E2E testing
I also added a simple e2e with [Cypress](https://www.cypress.io/) which, at this phase is overtesting from my point of view but I wanted to have all kinds of tests to check that my build command is working correctly.

The test is as simple as this one:
```
it('Loads home page', () => {
  cy.visit('/');
  cy.get('header').contains('Jokill');
  cy.get('footer').contains('Made with');
  cy.get('.home-page__container').contains('Welcome to Jokill');
});
```
At this point, the only value that could be provided by Cypress is adding screenshot testing, to check that styles are rendering what we want to see and colors or spaces are not changing over time. I plan to add it in the next steps to have coverage of this visual part.