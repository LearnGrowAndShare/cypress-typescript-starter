/* global Given, When, Then */
/// <reference path="../../index.d.ts" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
  

    Given("web app loaded", () => {
        cy.visit("cypress/fixtures/index.html")
        cy.clickHtmlElement("click me", "a")
    });

    When("I enter {int} and {int}", (a: number, b: number) => {
    cy.get("form")
        .within(() => {
            cy.get('[name="first"]').type(a.toString()).get('[name="second"]').type(b.toString())
            cy.root().submit()
        })
    });

    Then("verify that the result is equal the {int}", (result: number) => {
        cy.get('#result').should("have.text", result);
      });


