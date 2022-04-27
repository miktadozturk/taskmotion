import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const homepage = require('../../pages/homepage')
const search = require('../../pages/search')

Given ('A User navigate to the Instamotion home page', () => {
    cy.visit('/')
})

When ('The page has loaded, accept the cookies', () => {
    homepage.acceptAllCookies()
})

And ('A User see the home page', () => {
    homepage.validateTheHomePage()
})

And ('A User click the Marke and selected "Audi"', () => {
    search.marke()
    cy.get('li#downshift-0-item-2 > div').click()
})

Then ('A User click the Treffer button and searched all Audi Car', () => {
    search.trefferBtn()
})