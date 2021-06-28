import { urls } from "../support/urls"
import { loginMyPage } from "../support/commands"
import { LoginCredentials } from "../support/fixtures"

describe('Login to my page', () => {

    context('when user write invlid password', () => {
        it('should display error message', () => {
            loginMyPage(LoginCredentials({ password: "test" }))
            cy.url().should("eq", urls.myAccountLoginPage)
            cy.contains("Incorrect password. Try again.")
        })
    })

    context('when user write valid password', () => {
        it('should display error message', () => {
            loginMyPage(LoginCredentials())
            cy.url().should("eq", urls.myAccountPage)
        })
    })
})
