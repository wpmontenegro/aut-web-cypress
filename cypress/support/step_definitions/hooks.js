import "cypress-mochawesome-reporter/cucumberSupport";
import {
  Before,
  After,
  BeforeAll,
  AfterStep,
} from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.log("This hook will be executed once at the beginnig of a feature.");
});

Before({ tags: "@Screenshot" }, () => {
  cy.log("This hook will be executed before scenarios tagged with @Login.");
});

After(() => {
  cy.log("This hook will be executed after all scenarios.");
});

AfterStep(() => {
  cy.screenshot();
});
