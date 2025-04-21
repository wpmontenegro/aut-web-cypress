# CASO DE PRUEBA PARA REALIZAR CHECKOUT DE PRODUCTOS Y LLAMAR A UNA API PARA OBTENER DATOS DEL USUARIO
Feature: Realizar checkout de los productos en el carrito

    Background: Selecciono mis Productos
        Given el usuario se encuentra en la página de inventario
        When agrego los productos al carrito
            | Sauce Labs Backpack | Sauce Labs Bike Light |

    @Checkout @HP
    Scenario: Realizar compra de productos en la tienda
        When ingreso a la seccion de checkout
        And llamo a una API para obtener mis datos y lleno el formulario
        Then debería ver la página del resumen de la compra