class CartPage {
  getCheckout() {
    return cy.get("[name='checkout']");
  }
}

export const cartPage = new CartPage();
