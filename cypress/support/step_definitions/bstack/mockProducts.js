import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cellphonesPage } from "../../pages/bstack/CellphonesPage";
import { urls } from "../../utils/urls";

const cellphonesPath = "mocks/cellphones";

Given("intercepto la API de celulares para mockear los productos", () => {
  cy.intercept("GET", "/api/products", {
    fixture: cellphonesPath,
  });
});

When("el usuario se encuentra en la página de celulares", () => {
  cy.visit(urls.bstack);
});

Then("debería ver la lista de celulares mockeada", () => {
  cy.fixture(cellphonesPath).then((data) => {
    data.products.forEach((product) => {
      cellphonesPage.cellphoneTitle(product.title).should("be.visible");
    });
  });
});
