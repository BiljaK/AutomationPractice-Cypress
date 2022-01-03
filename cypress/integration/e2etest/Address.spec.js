/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage";
import MyAccountPage from "../PageObjects/MyAccountPage";
import SigninPage from "../PageObjects/SigninPage";
import MyAddressPage from "../PageObjects/MyAddressPage";
import YourAddressPage from "../PageObjects/YourAddressPage";

describe('Test Address', function () {
    beforeEach(() => {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
    })

    it('Update Address Test', function () {

        const mapg = new MyAddressPage()
        const yap = new YourAddressPage()
        const map = new MyAccountPage()

        map.MyAddressBtn()
        mapg.UpdateAddress()
        yap.fillAddress('Blablabla druga ulica')
        yap.SaveBtn()

        cy.get('.page-subheading').should('have.text', 'My address 1')
    })

    it('Add New Address Test', function () {

        const mapg = new MyAddressPage()
        const yap = new YourAddressPage()
        const map = new MyAccountPage()

        map.MyAddressBtn()
        mapg.AddAddress()
        yap.fillAddress('Blabla druga ulica')
        yap.FillCity('Drugi Veliki bla')
        yap.FillState('Alabama')
        yap.FillZipCode(12345)
        yap.FillMobilePhone('23456789')
        yap.SaveBtn()

        cy.get('.last_item > :nth-child(1) > .page-subheading').should('have.text', 'My address')
    })

    it('Delete Address Test', function () {

        cy.viewport('samsung-note9')

        const mapg = new MyAddressPage()
        const map = new MyAccountPage()

        map.MyAddressBtn()
        mapg.DeleteAddress()

        cy.get('.last_item > :nth-child(1) > .page-subheading').should('have.text', 'My address 1')
    })

    after(() => {

        cy.clearCookies()

        cy.getCookies().should('be.empty')
    })
})