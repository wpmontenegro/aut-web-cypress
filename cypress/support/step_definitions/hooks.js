import {
  Before,
  After,
  BeforeAll,
} from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.log("This hook will be executed once at the beginnig of a feature.");
});

Before({ tags: "@Login" }, () => {
  cy.log("This hook will be executed before scenarios tagged with @Login.");
});

After(() => {
  cy.log("This hook will be executed after all scenarios.");
});
