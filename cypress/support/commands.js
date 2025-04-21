import "./commands/sauceCommands";

const globalStore = new Map();

// LOCATORS
Cypress.Commands.add("getByDataTest", (selector) => {
  return cy.get(`[data-test="${selector}"]`);
});

Cypress.Commands.add(
  "findByDataTest",
  { prevSubject: true },
  (subject, selector) => {
    return cy.wrap(subject).find(`[data-test*="${selector}"]`);
  }
);

// SCREENSHOT
Cypress.Commands.add("takeScreenshot", () => {
  if (Cypress.config("isInteractive")) {
    return;
  }
  cy.screenshot({ capture: "runner" });
});

// DATA MANAGMENT
Cypress.Commands.add("setGlobalValue", (key, value) => {
  globalStore.set(key, value);
});

Cypress.Commands.add("getGlobalValue", (key) => {
  return cy.wrap(globalStore.get(key) || null);
});

Cypress.Commands.add("clearGlobalStore", () => {
  globalStore.clear();
});
