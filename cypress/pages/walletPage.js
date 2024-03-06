class walletPage {
    elements = {
        paymentCardsCarousal : () => cy.get('[data-testid=horizontal-scroller-ccCardCarousel]')
    }

    verifyPaymentMethodsAreEmpty() {
        this.elements.paymentCardsCarousal
            .should('not.exist')
    }
}

module.exports = new walletPage();
