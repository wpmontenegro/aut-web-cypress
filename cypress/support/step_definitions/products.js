import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/LoginPage";
import ProductPage from "../page_objects/ProductsPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

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

When("se deberían agregar {int} productos al carrito", (numberItems) => {
  productPage.verificarCantidadProductosEnCarrito(numberItems);
});
