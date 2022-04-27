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

And ('A User validate the Instamotion title {string}', (homepageTitle) => {
    homepage.validateTheHomePageTitle(homepageTitle)
})

Then ('A User validate the form', () => {
    homepage.validateTheForm()
})