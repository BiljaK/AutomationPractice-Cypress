/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage";
import MyAccountPage from "../PageObjects/MyAccountPage";
import SigninPage from "../PageObjects/SigninPage";

describe('Test Login', function () {

    it('Valid credentials Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()

        cy.get('.account > span').should('have.text', 'Bla Blabla')
    })

    it('Invalid Email Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('kkk.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()

        cy.get('ol > li').should('have.text', 'Authentication failed.')
    })

    it('Invalid Password Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('B1234')
        sp.SignIn()

        cy.get('ol > li').should('have.text', 'Authentication failed.')
    })

    it('Without Credetials Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('0')
        sp.fillPassword('0')
        sp.SignIn()

        cy.get('ol > li').should('have.text', 'An email address required.')
    })

    it('Log Out Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()
        const map = new MyAccountPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
        map.Logout()

        cy.request('http://automationpractice.com/index.php?controller=authentication&back=my-account')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    })

    after(() => {

        cy.clearCookies()

        cy.getCookies().should('be.empty')
    })
})