/// <reference types="cypress" />

class MyWishlistPage {

    AddWishlist(value) {

        const wishlistNField = cy.get('#name')
        wishlistNField.clear()
        wishlistNField.type(value)
        return this
    }

    SaveBtn() {

        const saveBtn = cy.get('#submitWishlist > span')
        saveBtn.click()
    }

    RemoveWishlist() {

        const remove = cy.get('.wishlist_delete > .icon > .icon-remove')
        remove.click({ multiple: true })

    }
}

export default MyWishlistPage