class LoginPage {
  constructor() {
    this.usernameField = "#user-name";
    this.passwordField = "#password";
    this.loginButton = "#login-button";
  }

  ingresarCredenciales(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}

export default LoginPage;
