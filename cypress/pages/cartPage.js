class cartPage {
    elements = {
        productTileContainers : () => cy.get('[data-testid=product-tile-container]'),
        subTotalLabel : () => cy.get('[data-testid=subtotal-label-pos]'),
        checkoutButton: () => cy.get('[data-automation-id=checkout]')
    }

    verifyProductsSize(expectedProductSize) {
        this.elements.productTileContainers()
            .should('have.length', expectedProductSize)
    }

    verifySubTotalLabel(expectedCartSize) {
        this.elements.subTotalLabel()
            .should('be.visible')
            .should('include.text', `${expectedCartSize} item`)
    }

    clickOnCheckoutButton() {
        this.elements.checkoutButton()
            .should('be.visible')
            .click()
    }
}

module.exports = new cartPage();
