class Homepage {

    acceptAllCookies(){
        cy.get('.ot-sdk-container button#onetrust-accept-btn-handler').should('be.visible').click()
    }

    validateTheHomePage(){
        cy.get('div#main_image').should('be.visible')
    }

    validateTheHomePageTitle(){
        cy.title().should('eq', "Geprüfte Gebrauchtwagen mit Garantie | instamotion")
    }

    validateTheForm(){
        cy.get('div#__next div.HeroSearchstyled__SearchSectionBlock-sc-1c6baod-0.bOzxEy').should('be.visible')
    }
}

module.exports = new Homepage()