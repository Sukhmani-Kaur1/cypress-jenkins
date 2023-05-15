/// <reference types="cypress-xpath"/>
/// <reference types="Cypress"/>
describe("Make my trip test", () => {
  it("Select from pune to new delhi", () => {
    cy.visit("https://www.makemytrip.com", {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
      },
    });
    cy.xpath("//span[normalize-space()='From']").click();
    cy.get(".react-autosuggest__input").click({ force: true }).type("pune");
    cy.get("#react-autowhatever-1-section-0-item-0")
      .contains("Pune, India")
      .click({ force: true });
    cy.get(".searchToCity > label").click({ force: true });
    cy.get(".react-autosuggest__input")
      .click({ force: true })
      .type("new delhi");
    cy.xpath("//p[normalize-space()='New Delhi, India']").click({
      force: true,
    });
  });
});
