class ProductPage {
  getElementToAddCart(product) {
    return cy
      .get(".inventory_item_name")
      .contains(product)
      .closest(".inventory_item_description")
      .find("button");
  }

  getNumberOfItems() {
    return cy.getByDataTest("shopping-cart-badge");
  }

  getShoppingCart() {
    return cy.getByDataTest("shopping-cart-link");
  }
}

export const productPage = new ProductPage();
