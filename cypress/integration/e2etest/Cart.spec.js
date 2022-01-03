/// <reference types="cypress" />

import MyAccountPage from "../PageObjects/MyAccountPage";
import SigninPage from "../PageObjects/SigninPage";
import HomePage from "../PageObjects/HomePage";
import DressesPage from "../PageObjects/DressesPage";
import ShopingCartPage from "../PageObjects/ShopingCartPage";

describe('Test Cart', function () {

    beforeEach(() => {

        cy.viewport('iphone-xr', 'landscape')

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
    })

    it('Add Dress to Cart Test', function () {

        const map = new MyAccountPage()
        const dp = new DressesPage()

        map.DressesBtn()
        dp.DressToCart()
        dp.Checkout()

        cy.get('#summary_products_quantity').should('have.text', '1 Product')
    })

    it('Add 2 Dresses to Cart Test', function () {

        const map = new MyAccountPage()
        const dp = new DressesPage()

        map.DressesBtn()
        dp.DressToCart()
        dp.ContinueShoping()
        dp.DressToCart()
        dp.Checkout()

        cy.get('#summary_products_quantity').should('have.text', '2 Products')
    })

    it('Remove Product From Cart', function () {

        const map = new MyAccountPage()
        const scp = new ShopingCartPage()
        const dp = new DressesPage()

        map.DressesBtn()
        dp.DressToCart()
        dp.Checkout()
        scp.DeleteCart()

        cy.get('.alert').should('have.text', 'Your shopping cart is empty.')
    })

    after(() => {

        cy.clearCookies()

        cy.getCookies().should('be.empty')
    })
})