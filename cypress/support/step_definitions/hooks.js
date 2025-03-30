import "cypress-mochawesome-reporter/cucumberSupport";
import {
  Before,
  BeforeAll,
  AfterStep,
} from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.log("This hook will be executed once at the beginnig of a feature.");
});

Before({ tags: "@Login" }, () => {
  cy.log("This hook will be executed before scenarios tagged with @Login.");
});

AfterStep(() => {
  cy.takeScreenshot();
});
