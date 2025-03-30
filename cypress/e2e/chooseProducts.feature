Feature: Elegir productos en la tienda

  Background: Ingreso pantalla Productos
    Given el usuario se encuentra en la página de inventario

  @Products @HP
  Scenario: Elegir productos en la tienda
    When selecciona los productos
      | Sauce Labs Backpack | Sauce Labs Bike Light | Sauce Labs Bolt T-Shirt |
    Then se deberían agregar 3 productos al carrito