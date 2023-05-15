/// <reference types="cypress-xpath"/>
/// <reference types="Cypress"/>

describe("Automating Automation Test Store", () => {
  it.only("Test case-001", () => {
    cy.visit("https://automationteststore.com/");
    cy.xpath("//div[@class='col-md-3 col-sm-6 col-xs-12']")
      .find(".thumbnail")
      .should("have.length", 16)
      .as("productItem");
    // var newprice=0;
    // var sumnew =0;
    cy.get("@productItem")
      .find(".price")
      .then((price) => {
        var sum = 0;
        var sumnew = 0;
        cy.wrap(price).find(".oneprice").each(($el, index, $list) => {
          sum += +$el.text().replace(/[^\d\w\.]/gm, "");
          if (index === $list.length - 1) {
            // cy.wait(3000);
            cy.log("Total one Price cost "+sum);
          }
        });
        cy.wrap(price).find(".pricenew").each(($el, index, $list) => {
          sumnew += +$el.text().replace(/[^\d\w\.]/gm, "");
          if (index === $list.length - 1) {
            // cy.wait(3000);
            cy.log("Total new Price cost "+sumnew);
          }
        });
      });
  });
  
});
