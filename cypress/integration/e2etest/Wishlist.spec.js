/// <reference types="cypress" />

import MyAccountPage from "../PageObjects/MyAccountPage";
import MyWishlistPage from "../PageObjects/MyWishlistPage";
import HomePage from "../PageObjects/HomePage";
import SigninPage from "../PageObjects/SigninPage";

describe('Test Wishlist', function () {

    let date = new Date().getTime()

    beforeEach(() => {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTub()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
    })

    it('Add Wishlist Test', function () {

        const map = new MyAccountPage()
        const wl = new MyWishlistPage()

        map.MyWishlistBtn()
        wl.AddWishlist('Wishlist ' + date)
        wl.SaveBtn()

        cy.request('http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Add two Wishlists Test', function () {

        const map = new MyAccountPage()
        const wl = new MyWishlistPage()

        date = new Date().getTime()
        map.MyWishlistBtn()
        wl.AddWishlist('Wishlist ' + date)
        wl.SaveBtn()
        date = new Date().getTime()
        wl.AddWishlist('Wishlist ' + date)
        wl.SaveBtn()

        cy.request('http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Remove Wishlist Test', function () {

        const map = new MyAccountPage()
        const wl = new MyWishlistPage()

        map.MyWishlistBtn()
        wl.RemoveWishlist()

        cy.get('.table').should('not.exist')
    })

    after(() => {

        cy.clearCookies()

        cy.getCookies().should('be.empty')
    })
})