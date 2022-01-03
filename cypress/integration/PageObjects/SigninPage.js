/// <reference types="cypress" />

class SigninPage {

    fillEmail(value) {
        const field = cy.get('[id=email]')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value) {
        const field = cy.get('[id=passwd]')
        field.clear()
        field.type(value)
        return this
    }

    SignIn() {
        const button = cy.get('[id=SubmitLogin]')
        button.click()
    }
}

export default SigninPage