/// <reference types="cypress" />

class ShopingCartPage {

    DeleteCart() {

        const deleteCart = cy.get('.cart_delete > div')
        deleteCart.click()
    }
}
export default ShopingCartPage