class ProductPage {
  constructor() {
    this.itemName = ".inventory_item_name";
    this.itemDescription = ".inventory_item_description";
    this.butonAddToCart = "add-to-cart";
    this.shoppingCart = "shopping-cart-badge";
  }

  agregarProductoAlCarrito(product) {
    cy.contains(this.itemName, product)
      .closest(this.itemDescription)
      .findByDataTest(this.butonAddToCart)
      .click();
  }

  verificarCantidadProductosEnCarrito(numberItems) {
    cy.getByDataTest(this.shoppingCart).contains(numberItems);
  }
}

export default ProductPage;
