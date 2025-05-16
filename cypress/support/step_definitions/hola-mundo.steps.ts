import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Dado
Given("que estoy en la página principal", () => {
  cy.log("Se ejecuta la redirecciona a la página principal");
  cy.visit("/");
});

//Cuando
When("la página carga", () => {
  // No necesitamos hacer nada específico aquí, Cypress espera a que la página cargue
  cy.log("Espera a que la página cargue");
});

//Entonces
Then("debería ver la página principal", () => {
  //Vemos el home
  cy.get("[date-test='home']").should('be.visible', {timeout: 10000})
});

//Y
Then("debería ver el título {string}", (mensaje: string) => {
  //Vemos el título
  cy.get("[date-test='title']").should("contain", mensaje);
});