/* global window */
/// <reference path="../index.d.ts" />

describe("tests", () => {
  it("test custom command", () => {
    cy.visit("cypress/fixtures/index.html")
    cy.clickHtmlElement("click me", "a")
  })

  it("test sum", () => {
    cy.get("form")
      .within(() => {
        cy.get('[name="first"]').type("2").get('[name="second"]').type("5")
        cy.root().submit()
      })
      .get("#result")
      .should("have.text", "7")
    //   .get('#result').then(x => {
    //        expect(x.text()).equals('7');
    //   })
  })
})
