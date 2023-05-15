/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
/// <reference types="cypress-iframe"/>

describe("data driven testing", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });
//   beforeEach(() => {
//     cy.visit("/");
//   });
  it("orangeHRM single data", () => {
    // cy.visit("/");
    cy.get("#inputUsername").type(data.name);
    cy.get("input[name='inputPassword']").type(data.password);
    cy.contains(" Login ").click();
    cy.get(".oxd-userdropdown-tab").click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
  });
  it.only("orangeHRM multiple data", () => {
    for (let i = 0; i < data.name.length; i++) {
        cy.visit("/")+"/admin/viewSystemUsers";
        // for calling urls from env
        // cy.visit(Cypress.env("orangeHRM"));
      cy.get("input[name='username']").type(data.name[i]);
      cy.get("input[name='password']").type(data.password[i]);
      cy.contains(" Login ").click();
    }
  });
//   afterEach(() => {
//     cy.get(".oxd-userdropdown-tab").click();
//     cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
//   });
});
