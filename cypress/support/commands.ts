import { urls } from "../support/urls"
import { loginPage, mainPage } from "../support/directories"

export function login(p: LoginCredentials) {
    return cy
        .visit(urls.loginUrl)
        .contains("Egnyte QA Recruitment")
        .click()
        .get(loginPage.email)
        .type(p.email)
        .get(loginPage.loginButton)
        .click()
        .wait(500)
}

export function loginMyPage(p: LoginCredentials) {
    return cy
        .visit(urls.myAccountLoginPage)
        .wait(500)
        .contains("This folder is protected")
        .click()
        .get(loginPage.password)
        .type(p.password)
        .get(loginPage.loginButtonMyPage)
        .click()
        .wait(500)
}

export function dowloadFolder(p: LoginCredentials) {
    return cy
        .visit(urls.myAccountLoginPage)
        .contains("This folder is protected")
        .click()
        .get(loginPage.password)
        .type(p.password)
        .get(loginPage.loginButtonMyPage)
        .click()
        .wait(500)
        .get(mainPage.downloadFolder)
        .contains("Download Folder")
}

export function clickOnLoginNavigation(p: LoginCredentials) {
    return cy
        .visit(urls.myAccountLoginPage)
        .contains("This folder is protected")
        .click()
        .get(loginPage.password)
        .type(p.password)
        .get(loginPage.loginButtonMyPage)
        .click()
        .wait(500)
        .get(mainPage.loginNavigation)
        .click()
        .wait(500)
}