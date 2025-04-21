export const loginPage = {
  usernameInput: () => cy.get("#user-name"),
  passwordInput: () => cy.getByDataTest("password"),
  loginButton: () => cy.get(".submit-button"),
  errorMessage: () => cy.getByDataTest("error"),
};
