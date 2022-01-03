/// <reference types="cypress" />

class HomePage {

    visit() {
        cy.visit("http://automationpractice.com/index.php")
    }

    signinTub() {
        const signinTub = cy.get('.login')
        signinTub.click();
    }
}

export default HomePage