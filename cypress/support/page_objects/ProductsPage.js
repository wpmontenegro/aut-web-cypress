const productPage = {
  getElementToAddCart: (product) => {
    return cy
      .get(".inventory_item_name")
      .contains(product)
      .closest(".inventory_item_description")
      .findByDataTest("add-to-cart");
  },

  getNumberOfItems: () => {
    return cy.getByDataTest("shopping-cart-badge");
  },
};

export default productPage;
