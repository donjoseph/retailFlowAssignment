class homePage{
    elements = {
        searchBox : () => cy.get('[aria-label=\'Search\']'),
        searchIcon : () => cy.get('[data-automation-id=search-icon]'),
        resultsContainer : () => cy.get('#results-container'),
        addToCartButtons : () => cy.get('[data-testid=item-stack] [data-automation-id=\'add-to-cart\']'),
        cartBadge : () => cy.get('#cart-badge')
    }

    typeInSearchBox(searchTerm) {
        this.elements.searchBox().type(searchTerm)
    }

    clickOnSearchIcon() {
        this.elements.searchIcon().click()
    }

    verifyResultsContainer(searchTerm) {
        this.elements.resultsContainer()
            .should('be.visible')
            .should('include.text', `Results for "${searchTerm}"`)
    }

    addFirstItemToCart() {
        this.elements.addToCartButtons()
            .should('have.length.at.least', 1)
            .first()
            .click()
    }

    verifyCartSize(expectedCartSize) {
        this.elements.cartBadge()
            .should('be.visible')
            .should('have.text', expectedCartSize)
    }

    clickOnCart() {
        this.elements.cartBadge().click()
    }
}

module.exports = new homePage();
