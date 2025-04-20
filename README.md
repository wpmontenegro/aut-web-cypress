# Cypress Cucumber Automation Framework

## 📌 Descripción

Este framework de automatización de pruebas web está basado en **Cypress** e implementa **Cucumber** para facilitar la escritura de pruebas en un formato BDD. Además, permite la configuración de entornos, generación de reportes y buenas prácticas de estructuración de código.

---

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

---

## 📋 Instalación

1. Clonar el repositorio:

   ```sh
   git clone https://gitlab.com/testever/aut-web-cypress
   cd aut-web-cypress
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Configurar el entorno en el archivo `cypress.config.js` o en los archivos dentro de `cypress/settings/`.

4. Ejecutar pruebas:
   - En modo interactivo:
     ```sh
     npm run cy:open
     ```
   - En modo headless:
     ```sh
     npm run cy:run
     ```

---

## 🏗 Tecnologías y Herramientas Utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- [Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter) (para reportes)
- GitLab CI/CD

---

## 🔧 Configuración de Entornos

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

---

## 🏗 Page Object Model (POM)

Se ha implementado un patrón **POM** para mejorar la mantenibilidad de los localizadores.

Ejemplo de `productPage.js`:

```js
class ProductPage {
  getElementToAddCart(product) {
    return cy
      .get(".inventory_item_name")
      .contains(product)
      .closest(".inventory_item_description")
      .findByDataTest("add-to-cart");
  }
  getNumberOfItems() {
    return cy.getByDataTest("shopping-cart-badge");
  }
}
export const productPage = new ProductPage();
```

---

## 📜 Comandos Personalizados

En el archivo `commands.js`, se han definido algunos comandos personalizados:

```js
Cypress.Commands.add("getByDataTest", (selector) => {
  return cy.get(`[data-test*="${selector}"]`);
});
```

---

## 📊 Reportes

El framework genera reportes utilizando **Mochawesome**.

Los reportes se almacenan en la carpeta `cypress/reports/`.

---

## 🔄 Integración con CI/CD

Se ha configurado **GitLab CI/CD** en el archivo `.gitlab-ci.yml` para ejecutar pruebas automáticamente en cada commit.

Ejemplo de configuración:

```yaml
stages:
  - test

test:e2e:
  image: cypress/included:latest
  script:
    - npx cypress run
  artifacts:
    paths:
      - cypress/reports/
```

---

## 📌 Contribuciones

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz un commit (`git commit -m "Agregada nueva funcionalidad"`)
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---
