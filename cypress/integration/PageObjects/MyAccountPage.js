/// <reference types="cypress" />

class MyAccountPage {

    Logout() {

        const logout = cy.get('.logout')
        logout.click()
    }

    MyAddressBtn() {

        const addressBtn = cy.get('.myaccount-link-list > :nth-child(3) > a > span')
        addressBtn.click()
    }

    MyWishlistBtn() {

        const wishlistBtn = cy.get('.lnk_wishlist > a > span')
        wishlistBtn.click()
    }

    MyPersonalBtn() {
        const personalBtn = cy.get('.myaccount-link-list > :nth-child(4) > a > span')
        personalBtn.click()
    }

    DressesBtn() {

        const dresses = cy.get('.sf-menu > :nth-child(2) > .sf-with-ul')
        dresses.click()
    }

    CartBtn() {

        const cartBtn = cy.get('[title="View my shopping cart"]')
        cartBtn.click()
    }
}

export default MyAccountPage