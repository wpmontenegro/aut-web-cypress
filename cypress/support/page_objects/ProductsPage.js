class ProductPage {
  agregarProductoAlCarrito(product) {
    cy.get(".inventory_item_name")
      .contains(product)
      .closest(".inventory_item_description")
      .findByDataTest("add-to-cart")
      .click();
  }

  verificarCantidadProductosEnCarrito(numberItems) {
    cy.getByDataTest("shopping-cart-badge").contains(numberItems);
  }
}

const productPage = new ProductPage();
export default productPage;
