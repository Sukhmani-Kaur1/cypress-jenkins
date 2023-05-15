//here we will write our script
describe("This is first suite", () => {
  it("to test orangeHRM login logout", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // let title = cy.title();
    // console.log(title);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.contains(" Login ").click();
    cy.get(".oxd-userdropdown-tab").click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
  });
  it("this test is for automation test store", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.xpath("//input[@name='first_name']").type("Sukhmani");
    cy.xpath("//input[@id='ContactUsFrm_email']").type("abc@gmail.com");
    cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type(
      "aksdfjk a dj fksko fos ofj o"
    );
    cy.xpath("//button[@type='submit']").click();
  });
  it.only("to test orangeHRM login logout with invalid data", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // let title = cy.title();
    // console.log(title);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.contains(" Login ").click();
    cy.xpath(
      "//p[@class='oxd-text oxd-text--p oxd-alert-content-text']"
    ).should("have.text", "Invalid credentials");
  });
});
