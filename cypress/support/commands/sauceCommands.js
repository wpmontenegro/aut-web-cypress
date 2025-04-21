import { loginPage } from "../pages/sauce/LoginPage";

// CUSTOM
Cypress.Commands.add("getUserDataByType", (type) => {
  return cy.fixture("data/users").then((users) => {
    return users.find((u) => u.type == type);
  });
});

Cypress.Commands.add("loginByType", (type) => {
  cy.getUserDataByType(type).then((user) => {
    loginPage.usernameInput().type(user.username);
    loginPage.passwordInput().type(user.password);
    loginPage.loginButton().click();
  });
});
