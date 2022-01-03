/// <reference types="cypress" />

class MyAddressPage {

    UpdateAddress() {

        const updateAdrs = cy.get('[href="http://automationpractice.com/index.php?controller=address&id_address=530866"] > span')
        updateAdrs.click()
    }


    AddAddress() {

        const addAdrs = cy.get('.main-page-indent > .btn > span')
        addAdrs.click()
    }

    DeleteAddress() {

        const deleteAdrs = cy.get('#center_column > div.addresses > div > div:nth-child(2) > ul > li.address_update > a:nth-child(2)') //cy.get('a[title="Delete"]:last-child')
        deleteAdrs.click()
    }
}

export default MyAddressPage