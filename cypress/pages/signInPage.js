class signInPage {
    elements = {
        email : () => cy.get('[name=\'Email Address\']'),
        continueButton : () => cy.get('#login-continue-button'),
        otpEmailRadioButton : () => cy.get('otpEmail'),
        phoneOtpForm : () => cy.get('#verify-phone-otp-form')
    }

    clickOnContinue() {
        this.elements.continueButton()
            .should('be.visible')
            .click()
    }

    enterEmail(email) {
        this.elements.email()
            .should('be.visible')
            .type(email)
    }

    checkOtpEmailRadioButton() {
        this.elements.otpEmailRadioButton()
            .check()
            .should('be.checked')
    }

    clickOnRequestVerificationCodeButton() {
        cy.get('button').contains('Request verification code').click()
    }

    verifyPhoneOtpForm() {
        this.elements.phoneOtpForm()
            .should('be.visible')
    }
}

module.exports = new signInPage();
