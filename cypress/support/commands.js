import loginPage from "./page_objects/LoginPage";

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

Cypress.Commands.add("getUserDataByType", (type) => {
  return cy.fixture("users.json").then((users) => {
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
