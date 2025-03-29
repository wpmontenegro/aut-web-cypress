import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/LoginPage";

const loginPage = new LoginPage();

Given("el usuario abre la página de login", () => {
  cy.visit("/");
});

When(
  "ingresa el usuario {string} y contraseña {string}",
  (username, password) => {
    loginPage.ingresarCredenciales(username, password);
  }
);

When("presiona el botón de login", () => {
  loginPage.clickLogin();
});

Then("debería ver la página de inventario", () => {
  cy.url().should("include", "/inventory");
});
