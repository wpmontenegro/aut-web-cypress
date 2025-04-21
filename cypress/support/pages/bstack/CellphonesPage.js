class CellphonesPage {
  getCellphoneTitle(title) {
    return cy.get(".shelf-item__title").contains(title);
  }
}

export const cellphonesPage = new CellphonesPage();
