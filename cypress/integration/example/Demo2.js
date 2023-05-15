/// <reference types="cypress-xpath"/>
/// <reference types="Cypress"/>
describe("this is test suit", () => {
  it("test store product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .first()
      .then((item) => {
        cy.log(item.text());
      });
  });
  it("this test is for automation test store", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a")
      .click()
      .then((linkText) => {
        cy.log(linkText.text());
      });
  });
  it.only("to test orangeHRM login logout with invalid data", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.contains(" Login ").click();
        cy.contains("Admin").click();
        cy.url().should("include","admin");
    cy.get(".oxd-userdropdown-tab").click();
    cy.get(".oxd-dropdown-menu")
      .find(".oxd-userdropdown-link")
      .then((elem) => {
        cy.wrap(elem).click();
      });
  });
});
