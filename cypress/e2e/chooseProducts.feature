# CASO DE PRUEBA PARA ELEGIR PRODUCTOS EN LA TIENDA DESDE UN DATATABLE
Feature: Elegir productos en la tienda

  Background: Ingreso pantalla Productos
    Given el usuario se encuentra en la página de inventario

  @Products @HP
  Scenario: Elegir productos en la tienda
    When agrego los productos al carrito
      | Sauce Labs Backpack | Sauce Labs Bike Light | Sauce Labs Bolt T-Shirt |
    Then el carrito debe tener 3 productos