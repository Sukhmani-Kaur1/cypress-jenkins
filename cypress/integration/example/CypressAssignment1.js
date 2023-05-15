/// <reference types="cypress-xpath"/>
/// <reference types="Cypress"/>
describe("Checking Login and Logout of Amazon, Flipkart and Good", () => {
  it("Checking Login and Logout of Amazon", () => {
    cy.visit(
      "https://www.amazon.in/?ie=UTF8&tag=googinabkvernac-21&ascsubtag=_k_Cj0KCQjwgLLoBRDyARIsACRAZe6F5XZFPAyRhK8yWx0mt-18lOSJcGxAs1izTrCzzULG2Pjwx2Q3sJYaAnEsEALw_wcB_k_&ext_vrnc=hi&gclid=Cj0KCQjwgLLoBRDyARIsACRAZe6F5XZFPAyRhK8yWx0mt-18lOSJcGxAs1izTrCzzULG2Pjwx2Q3sJYaAnEsEALw_wcB&ref_=nav_ya_signin"
    );
    cy.xpath(
      "(//a[@class='nav-a nav-a-2   nav-progressive-attribute'])[1]"
    ).click();
    cy.xpath("//input[@type='email'and @id='ap_email']").type(
      "sukhmani.dev006@gmail.com"
    );
    cy.xpath("(//input[@id='continue'])[1]").click();
    cy.xpath("(//input[@id='ap_password'])[1]").type("#Sukh78SK");
    cy.get("input[type='checkbox']").check().should("be.checked");
    cy.xpath("//input[@id='signInSubmit']").click();
    cy.get("#twotabsearchtextbox")
      .type("books")
      .should("have.value", "books")
      .type("{enter}");
    cy.xpath(
      "(//a[@class='nav-a nav-a-2   nav-progressive-attribute'])[1]"
    ).trigger("mouseover");
    cy.wait(2000);
    cy.xpath("//span[normalize-space()='Sign Out']").click();
  });
  it.only("Checking Login and Logout of Good Reads", () => {
    // *********************************for login
    cy.visit("https://www.goodreads.com/");
    cy.xpath("(//a[@class='gr-hyperlink'])[3]").click();
    cy.xpath(
      "//button[@class='gr-button gr-button--dark gr-button--auth authPortalConnectButton authPortalSignInButton']"
    ).click();
    cy.get("#ap_email").type("ksukhmani202@gmail.com");
    cy.get("#ap_password").type("hello551#");
    cy.get("#signInSubmit").click();
    // cy.get("form > .gr-button").click();
    // ********************************for adding to cart
    cy.get(
      ".siteHeader__contents > .searchBox > .searchBox__form > .searchBox__input"
    )
      .type("novels")
      .should("have.value", "novels")
      .type("{enter}");
    for (let i = 1; i < 3; i++) {
      cy.xpath(`(//div[@class='wtrUp wtrLeft'])[${i}]`).click();
    }
    cy.xpath(
      "//nav[@class='siteHeader__primaryNavInline']//a[@class='siteHeader__topLevelLink'][normalize-space()='My Books']"
    ).click();

    // *********************************For logout
    cy.get(
      ".dropdown__trigger > .headerPersonalNav__icon > .circularIcon"
    ).click();
    cy.get(
      '.siteHeader__subNav > ul > [role="menuitem Sign out"] > .siteHeader__subNavLink'
    ).click();
  });
});
