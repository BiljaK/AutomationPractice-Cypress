/// <reference types="cypress" />

class DressesPage {

    DressToCart() {

        const dress = cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
        dress.click()
    }

    ContinueShoping() {

        const shoping = cy.get('.continue > span')
        shoping.click()
    }
    Checkout() {

        const checkout = cy.get('.button-container > .button-medium > span')
        checkout.click()
    }
}

export default DressesPage