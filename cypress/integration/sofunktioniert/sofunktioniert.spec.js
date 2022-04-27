import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const homepage = require('../../pages/homepage')
const search = require('../../pages/search')
const sofunktioniert = require('../../pages/sofunktioniert')

Given ('A User navigate to the Instamotion homepage', () => {
    cy.visit('/')
})

When ('The page has loaded, accept the cookies', () => {
    homepage.acceptAllCookies()
})

And ('A User see the home page', () => {
    homepage.validateTheHomePage()
})

And ('A User click the "So funktionierts" button', () => {
    cy.visit('so-funktionierts')
})

And ('A User validate the title {string}', (sofunktioniertTitle) => {
    sofunktioniert.validateTheHomePageTitle(sofunktioniertTitle)
})

Then ('A User see the all details then end of the page', () => {
    sofunktioniert.allInDetails()
    cy.scrollTo('bottom')
    sofunktioniert.bottomInfo()
})