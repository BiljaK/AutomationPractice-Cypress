/// <reference types="cypress" />

class YourAddressPage {

    fillAddress(value) {
        const fieldAddress = cy.get('#address1')
        fieldAddress.clear()
        fieldAddress.type(value)
        return this
    }

    SaveBtn() {
        const saveBtn = cy.get('#submitAddress > span')
        saveBtn.click()
    }

    FillCity(value) {
        const fieldCity = cy.get('#city')
        fieldCity.clear()
        fieldCity.type(value)
        return this
    }

    FillState(value) {
        const fieldState = cy.get('#id_state').select('Alabama')
    }

    FillZipCode(value) {
        const fieldZCode = cy.get('#postcode')
        fieldZCode.clear()
        fieldZCode.type(value)
        return this
    }

    FillMobilePhone(value) {
        const fieldMobileP = cy.get('#phone_mobile')
        fieldMobileP.type(value)
        return this
    }
}

export default YourAddressPage