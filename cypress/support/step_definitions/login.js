import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pages/LoginPage";

Given("el usuario abre la página de login", () => {
  cy.visit("/");
});

When("ingresa el usuario de tipo {string} y se loguea", (type) => {
  cy.loginByType(type);
});

Then("debería ver la página de inventario", () => {
  cy.url().should("include", "/inventory");
  cy.contains("Products").should("be.visible");
});

Then("debería ver el mensaje de error {string}", (message) => {
  loginPage.getErrorMessage().should("include.text", message);
});
