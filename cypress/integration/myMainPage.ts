import { urls } from "../support/urls"
import { dowloadFolder, clickOnLoginNavigation} from "../support/commands"
import { LoginCredentials } from "../support/fixtures"

describe('Navigate in main page', () => {

    context('when are succesfully logged in', () => {
        it('should be able to download folder', () => {
            dowloadFolder(LoginCredentials())
            cy.url().should("eq", urls.myAccountPage)
            
        })
    })

    context('when are succesfully logged in', () => {
        it('should be able to click on log in button and be redirected correctly', () => {
            clickOnLoginNavigation(LoginCredentials())
            cy.url().should("eq", urls.connectLink)
        })
    })
})