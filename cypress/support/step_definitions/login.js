import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page_objects/LoginPage";

Given("el usuario abre la página de login", () => {
  cy.visit("/");
});

When(
  "ingresa el usuario {string} y contraseña {string}",
  (username, password) => {
    loginPage.getUsername().type(username);
    loginPage.getPassword().type(password);
  }
);

When("presiona el botón de login", () => {
  loginPage.getLoginButton().click();
});

Then("debería ver la página de inventario", () => {
  cy.url().should("include", "/inventory");
});
