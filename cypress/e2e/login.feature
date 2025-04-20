Feature: Login en SauceDemo

  Background: Ingreso pantalla Login
    Given el usuario abre la página de login

  @Login @HP
  Scenario: Usuario inicia sesión exitosamente
    When ingresa el usuario de tipo "<type>" y se loguea
    Then debería ver la página de inventario
    Examples:
      | type     |
      | standard |
      | visual   |

  @Login @SP
  Scenario: Usuario bloqueado falla al iniciar sesión
    When ingresa el usuario de tipo "<type>" y se loguea
    Then debería ver el mensaje de error "<error>"
    Examples:
      | type   | error                                               |
      | locked | Epic sadface: Sorry, this user has been locked out. |
