import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "../pages/ProductsPage";

Given("el usuario se encuentra en la página de inventario", () => {
  cy.visit("/");
  cy.loginByType("standard");
});

When("agrego los productos al carrito", (table) => {
  table.raw()[0].forEach((item) => {
    productPage.getElementToAddCart(item).as("itemToAddCart").click();

    cy.get("@itemToAddCart").should("have.text", "Remove");
  });
});

Then("el carrito debe tener {int} productos", (numberItems) => {
  productPage.getNumberOfItems().contains(numberItems);
});
