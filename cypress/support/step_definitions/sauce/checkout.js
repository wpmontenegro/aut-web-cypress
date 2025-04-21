import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "../../pages/sauce/ProductsPage";
import { cartPage } from "../../pages/sauce/CartPage";
import { checkoutPage } from "../../pages/sauce/CheckoutPage";

When("ingreso a la seccion de checkout", () => {
  productPage.shoppingCartButton().click();
  cartPage.checkoutButton().click();
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

    checkoutPage.firstNameInput().type(firstName);
    checkoutPage.lastNameInput().type(lastName);
    checkoutPage.postalCodeInput().type(postalCode);
    checkoutPage.continueButton().click();
  });
});

Then("debería ver la página del resumen de la compra", () => {
  cy.url().should("include", "/checkout-step-two");
});
