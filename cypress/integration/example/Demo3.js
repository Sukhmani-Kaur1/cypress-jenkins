describe("Demo3 class", () => {
  it("example2", () => {
    cy.visit("https://automationteststore.com/");
    // https://demoqa.com/alerts
    cy.get(".thumbnail").as("Allproduct");
    cy.get("@Allproduct")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it("example3", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (massege) => {
      expect(massege).to.have.text("Do you confirm action?");
      return false;
    });
    cy.get("#confirmResult").should("have.text", "You selected Cancel");
  });
  it("navigation", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.contains(" Login ").click();
    cy.contains("Admin").click();
    cy.url().should("include", "admin");
    cy.go("back");
    cy.url().should("include", "dashboard");
    cy.go("forward");
    cy.url().should("include", "admin");
    cy.xpath("//input[@class='oxd-input oxd-input--focus']").type("sukhmani");
    cy.reload();
    cy.xpath("//input[@class='oxd-input oxd-input--focus']").should(
      "not.have.value",
      "sukhmani"
    );
  });
  it.only("multiple browsers", () => {
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.visit("https://automationteststore.com/");
    cy.origin("https://automationteststore.com/", () => {
      cy.visit('/');
    });
    cy.origin(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/",
      () => {
        cy.visit('/');
      }
    );
  });
});
