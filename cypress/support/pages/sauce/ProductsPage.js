export const productPage = {
  addItemToCartButton: (product) =>
    cy
      .get(".inventory_item_name")
      .contains(product)
      .closest(".inventory_item_description")
      .find("button"),
  numberOfItems: () => cy.getByDataTest("shopping-cart-badge"),
  shoppingCartButton: () => cy.getByDataTest("shopping-cart-link"),
};
