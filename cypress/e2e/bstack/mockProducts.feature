# CASO DE PRUEBA PARA MOCKEAR PRODUCTOS EN LA TIENDA DESDE JSON
Feature: Mockear productos en la tienda

    Background: Ingreso pantalla Celulares
        Given intercepto la API de celulares para mockear los productos

    @Mocks @HP
    Scenario: Mockear listado de celulares
        When el usuario se encuentra en la página de celulares
        Then debería ver la lista de celulares mockeada
