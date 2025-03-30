const loginPage = {
  getUsername: () => {
    return cy.get("#user-name");
  },

  getPassword: () => {
    return cy.get("#password");
  },

  getLoginButton() {
    return cy.get("#login-button");
  },

  getErrorMessage() {
    return cy.getByDataTest("error");
  },
};

export default loginPage;
