# Cypress + Cucumber Web Automation Framework

Framework de automatización de pruebas para Web basada en Cypress integrado con Cucumber.
Este proyecto implementa la escritura de pruebas en formato BDD (Gherkin).
Además permite la configuración de entornos, generación de reportes y buenas prácticas de estructuración de código.

## 🚀 Características

- Automatización de pruebas web usando Cypress
- Integración con Cucumber y lenguaje Gherkin
- Estructura basada en POM
- Uso de comandos personalizados
- Generación de reporte con Mochawesome
- Separación de variables por ambiente
- Intercepción y mockeo de peticiones

## 🛠️ Tecnologías Utilizadas

- **Lenguaje de programación**: Javascript
- **Frameworks de automatización**:
  - [Cypress](https://www.cypress.io/)
  - [Cucumber](https://cucumber.io/)
- **Herramientas adicionales**:
  - [NPM](https://www.npmjs.com/)
  - [Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter)

## 📂 Estructura del Proyecto

```
AUT-WEB-CYPRESS
│── cypress
│   │── e2e                   # Contiene los archivos de prueba en formato .feature
│   │   │── chooseProducts.feature
│   │   │── login.feature
│   │── fixtures              # Datos de prueba estáticos
│   │── settings              # Configuración de entornos
│   │   │── dev.settings.json
│   │   │── qa.settings.json
│   │── support               # Soporte para comandos y definiciones de páginas
│   │   │── pages      # Implementación del Page Object Model (POM)
│   │   │── step_definitions  # Definiciones de pasos para Cucumber
│   │── commands.js           # Comandos personalizados de Cypress
│   │── e2e.js                # Archivo de configuración para pruebas end-to-end
│── .cypress-cucumber-preprocessorrc.json # Configuración de Cucumber
│── .gitlab-ci.yml            # Configuración de CI/CD en GitLab
│── cypress.config.js         # Configuración general de Cypress
│── package.json              # Dependencias y scripts de Node.js
```

## 📋 Instalación

### Clonar el Repositorio

```sh
git clone https://github.com/wpmontenegro/aut-web-cypress.git
cd aut-web-cypress
```

### Instalación de Dependencias

```sh
npm install
```

## ▶️ Ejecución de pruebas

### Modo interactivo

Ejecutar las pruebas:

```sh
npm run cy:open
```

### Modo headless

Ejecutar las pruebas:

```sh
npm run cy:run
```

## 🔧 Configuración

El framework permite la ejecución en distintos entornos mediante archivos JSON en `cypress/settings/`.

Ejemplo de `qa.settings.json`:

```json
{
  "baseUrl": "https://www.saucedemo.com",
  "env": {
    "environment": "qa"
  }
}
```

Para especificar el entorno al ejecutar pruebas:

```sh
npx cypress run --env environment=qa
```

## 🏗 Page Object Model (POM)

Se ha implementado un patrón **POM** para mejorar la mantenibilidad de los localizadores.

Ejemplo de `productPage.js`:

```js
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
```

## 📜 Comandos Personalizados

En el archivo `commands.js`, se han definido algunos comandos personalizados:

```js
Cypress.Commands.add("getByDataTest", (selector) => {
  return cy.get(`[data-test="${selector}"]`);
});
```

## 📊 Reportes de Pruebas

El framework genera reportes utilizando Mochawesome.
Los reportes se almacenan en la carpeta `cypress/reports/`.

## 📬 Contacto

Para preguntas o sugerencias, puedes contactarme a través de:

- Correo electrónico: wmontenegro@outlook.com.pe
- LinkedIn: [**wmontenegro**](https://www.linkedin.com/in/wmontenegro)
- GitHub: [**wpmontenegro**](https://github.com/wpmontenegro)
