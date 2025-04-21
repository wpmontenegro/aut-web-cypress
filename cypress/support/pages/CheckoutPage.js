class CheckoutPage {
  getFirstName() {
    return cy.getByDataTest("firstName");
  }

  getLastName() {
    return cy.getByDataTest("lastName");
  }

  getPostalCode() {
    return cy.getByDataTest("postalCode");
  }

  getContinue() {
    return cy.get("[name='continue']");
  }
}

export const checkoutPage = new CheckoutPage();
