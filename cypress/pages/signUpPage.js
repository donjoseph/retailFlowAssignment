class signUpPage {
    elements = {
        firstName : () => cy.get('[name=\'firstName\']'),
        lastName : () => cy.get('[name=\'lastName\']'),
        password : () => cy.get('[name=\'newPassword\']'),
        createAccountButton : () => cy.get('[name=\'Create Account\']')
    }

    populateSignUpForm(firstName, lastName, password) {
        this.elements.firstName()
            .should('be.visible')
            .type(firstName)
        this.elements.lastName()
            .should('be.visible')
            .type(lastName)
        this.elements.password()
            .should('be.visible')
            .type(password)
    }

    clickOnCreateAccountButton() {
        this.elements.createAccountButton()
            .should('be.visible')
            .click()
    }
}

module.exports = new signUpPage();
