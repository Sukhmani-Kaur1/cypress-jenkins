import "cypress-iframe";
/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
/// <reference types="cypress-iframe"/>

describe("iframe", () => {
  it("example 1", () => {
    // calling cammand from cammand.js
    // cy.nameofcommand("pass value")
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href='consulting']").first().click();
  });
});
