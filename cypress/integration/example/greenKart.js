/// <reference types="cypress-xpath"/>
/// <reference types="Cypress"/>

describe('Assignment', () => {
    it('Greenkart testing cart', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.xpath("//input[@class='search-keyword']").type("ca");
        cy.xpath("//div[@class='product']").should("have.length",4);
        // for(let i=0;i<4;i++){
        //     if(i===2){
        //     cy.xpath("//div[@class='product']").eq(i).find("button").click();
        //     }

        // }
        cy.get(".products").find(".product").each(($el,index,$list)=>{
          const productname =  $el.text();
          if(productname.includes("Cashew")){
            cy.wrap($el.find("button")).click();
          }
        })
        cy.get('.brand').should("have.text","GREENKART")
        cy.xpath("//img[@alt='Cart']").click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.xpath("//button[normalize-space()='Place Order']").click();
        cy.get('select').select("India");
        cy.get(".chkAgree").check().should("be.checked");
        cy.get('button').click();

        
    });
    it.only("Assignment orangeHRM",()=>{
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
              cy.get('.oxd-autocomplete-text-input > input').type("L");
              cy.wait(1000);
              cy.get("div[role='listbox']").find("span").each(($el,index,$list)=>{
                 const names = $el.text();
                 cy.log("element index: "+index+" element name: "+$el.text());
                 if(names.includes("Lisa  Andrews")){
                   cy.wrap($el).click();
                 }
              })
              cy.get('.oxd-autocomplete-text-input > input').should("have.value","Lisa  Andrews");

    });
    it("",()=>{
      cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.xpath("//input[@name='first_name']");
    })
});