import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import productPage from "../page_objects/ProductsPage";

Given("el usuario se encuentra en la página de inventario", () => {
  cy.visit("/");
  cy.loginByType("standar");
});

When("selecciona los productos", (table) => {
  table.raw()[0].forEach((item) => {
    productPage.getElementToAddCart(item).click();
  });
});

Then("se deberían agregar {int} productos al carrito", (numberItems) => {
  productPage.getNumberOfItems().contains(numberItems);
});
