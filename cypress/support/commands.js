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

Cypress.Commands.add("login", (username, password) => {
  loginPage.getUsername().type(username);
  loginPage.getPassword().type(password);
  loginPage.getLoginButton().click();
});
