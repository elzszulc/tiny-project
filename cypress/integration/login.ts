import { urls } from "../support/urls"
import { login } from "../support/commands"
import { LoginCredentials } from "../support/fixtures"

describe('Login', () => {

    context('when user write valid email address but not exists in database', () => {
        it('should display error message', () => {
            login(LoginCredentials())
            cy.url().should("eq", urls.loginUrl)
            cy.contains("No account found")
        })
    })

    context('when user write invalid email address to login', () => {
        it('should display error message', () => {
            login(LoginCredentials({ email: "invalidadress.com" }))
            cy.contains("No account found")
        })
    })
})
