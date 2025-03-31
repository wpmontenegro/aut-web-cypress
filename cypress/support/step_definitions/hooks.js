import "cypress-mochawesome-reporter/cucumberSupport";
import { Before, AfterStep } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.clearGlobalStore();
});

AfterStep(() => {
  cy.takeScreenshot();
});
