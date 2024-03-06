import { getRandomUser } from "../utils/faker"
import * as URL from "../fixtures/url.json"
import cartPage from "../pages/cartPage"
import homePage from "../pages/homePage"
import signInPage from "../pages/signInPage"
import signUpPage from "../pages/signUpPage"
import walletPage from "../pages/walletPage"

describe("Verify Walmart checkout flow", () => {

    beforeEach("Given Walmart Home Page is Loaded", () => {
        cy.visit(URL.baseUrl)
    });

    it("Then Verify walmart checkout flow", () => {
        const searchTerm = 'pens'
        const expectedCartSize = 1
        const expectedProdcutSize = 1

        homePage.typeInSearchBox(searchTerm)
        homePage.clickOnSearchIcon()
        homePage.verifyResultsContainer(searchTerm)
        homePage.addFirstItemToCart()
        homePage.verifyCartSize(expectedCartSize)
        homePage.clickOnCart()

        cy.url().should('include', URL.cartUrl)

        cartPage.verifyProductsSize(expectedProdcutSize)
        cartPage.verifySubTotalLabel(expectedCartSize)
        cartPage.clickOnCheckoutButton()

        const userData = getRandomUser();

        signInPage.enterEmail(userData.email)
        signInPage.clickOnContinue()

        cy.url().then(url => {
            if (url.includes(URL.signUpUrl)) {
                signUpPage.populateSignUpForm(userData.firstName,
                    userData.lastName,
                    userData.password)
                signUpPage.clickOnCreateAccountButton()

                cy.url().should('include', URL.reviewOrderUrl)

                cy.visit(URL.walletUrl)
                walletPage.verifyPaymentMethodsAreEmpty()
            } else {
                expect(url).to.contain(URL.signInUrl)
                signInPage.checkOtpEmailRadioButton()
                signInPage.clickOnRequestVerificationCodeButton()
                signInPage.verifyPhoneOtpForm()
            }
        })
    });
})
