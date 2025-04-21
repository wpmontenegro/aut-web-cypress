class LoginPage {
  getUsername() {
    return cy.get("#user-name");
  }

  getPassword() {
    return cy.getByDataTest("password");
  }

  getLoginButton() {
    return cy.get(".submit-button");
  }

  getErrorMessage() {
    return cy.getByDataTest("error");
  }
}

export const loginPage = new LoginPage();
