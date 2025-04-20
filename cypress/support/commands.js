import { loginPage } from "./pages/LoginPage";

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

// CUSTOM
Cypress.Commands.add("getUserDataByType", (type) => {
  return cy.fixture("data/users").then((users) => {
    return users.find((u) => u.type == type);
  });
});

Cypress.Commands.add("loginByType", (type) => {
  cy.getUserDataByType(type).then((user) => {
    loginPage.getUsername().type(user.username);
    loginPage.getPassword().type(user.password);
    loginPage.getLoginButton().click();
  });
});
