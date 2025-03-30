// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("getByDataTest", (selector) => {
  return cy.get(`[data-test*="${selector}"]`);
});

Cypress.Commands.add(
  "findByDataTest",
  { prevSubject: true },
  (subject, selector) => {
    return cy.wrap(subject).find(`[data-test*="${selector}"]`);
  }
);

Cypress.Commands.add("takeScreenshot", () => {
  if (Cypress.config("isInteractive")) {
    return;
  }
  cy.screenshot({ capture: "runner" });
});
