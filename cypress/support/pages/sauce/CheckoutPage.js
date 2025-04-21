export const checkoutPage = {
  firstNameInput: () => cy.getByDataTest("firstName"),
  lastNameInput: () => cy.getByDataTest("lastName"),
  postalCodeInput: () => cy.getByDataTest("postalCode"),
  continueButton: () => cy.get("[name='continue']"),
};
