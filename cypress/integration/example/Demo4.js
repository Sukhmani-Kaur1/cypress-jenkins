/// <reference types="cypress-xpath"/>
/// <reference types="Cypress"/>

describe("Tutorials demo", () => {
  it.skip("Drag and Drop", () => {
    cy.visit("https://jqueryui.com/droppable/");
    cy.get("#draggable").trigger("mousedown",{which: 1});
    cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force: true});
    cy.get("#droppable").should("have.text","Dropped!");
  });
  it("scrolling",()=>{
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("Masai{enter}");
    // cy.scrollTo();
    cy.wait(11000)
    cy.contains("Maasai people").scrollIntoView().click();
  })
});
