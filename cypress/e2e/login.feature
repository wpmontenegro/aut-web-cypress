Feature: Login en SauceDemo

  Background: Ingreso pantalla Login
    Given el usuario abre la página de login

  @Login @HP
  Scenario: Usuario inicia sesión exitosamente
    When ingresa el usuario "<user>" y contraseña "<password>"
    And presiona el botón de login
    Then debería ver la página de inventario
    Examples:
      | user          | password     |
      | standard_user | secret_sauce |
      | visual_user   | secret_sauce |

  @Login @SP
  Scenario: Usuario bloqueado falla al iniciar sesión
    When ingresa el usuario de tipo "<type>" y nos logueamos
    Then debería ver el mensaje de error "<error>"
    Examples:
      | type   | error                                               |
      | locked | Epic sadface: Sorry, this user has been locked out. |
