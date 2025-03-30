import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../page_objects/LoginPage";
import productPage from "../page_objects/ProductsPage";

Given("el usuario se encuentra en la página de inventario", () => {
  cy.visit("/");
  loginPage.ingresarCredenciales("standard_user", "secret_sauce");
  loginPage.clickLogin();
});

When("selecciona los productos", (table) => {
  table.raw()[0].forEach((item) => {
    productPage.agregarProductoAlCarrito(item);
  });
});

Then("se deberían agregar {int} productos al carrito", (numberItems) => {
  productPage.verificarCantidadProductosEnCarrito(numberItems);
});
