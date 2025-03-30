class LoginPage {
  ingresarCredenciales(username, password) {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    return this;
  }

  clickLogin() {
    return cy.get("#login-button").click();
  }
}

const loginPage = new LoginPage();
export default loginPage;
