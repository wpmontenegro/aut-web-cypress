import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "../pages/ProductsPage";
import { cartPage } from "../pages/CartPage";
import { checkoutPage } from "../pages/CheckoutPage";

When("ingreso a la seccion de checkout", () => {
  productPage.getShoppingCart().click();
  cartPage.getCheckout().click();
});

When("llamo a una API para obtener mis datos y lleno el formulario", () => {
  cy.request("GET", `${Cypress.env("apiUrl")}/users/2`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("data");

    const {
      first_name: firstName,
      last_name: lastName,
      id: postalCode,
    } = response.body.data;

    checkoutPage.getFirstName().type(firstName);
    checkoutPage.getLastName().type(lastName);
    checkoutPage.getPostalCode().type(postalCode);
    checkoutPage.getContinue().click();
  });
});

Then("debería ver la página del resumen de la compra", () => {
  cy.url().should("include", "/checkout-step-two");
});
