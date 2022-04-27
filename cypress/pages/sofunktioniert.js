class Sofunktioniert {

    validateTheHomePageTitle(){
        cy.title().should('eq', "So funktioniert der Autokauf bei instamotion")
    }

    allInDetails(){
        cy.get('div#Alles_im_Detail > h2').should('be.visible')
    }

    bottomInfo(){
        cy.get('div#__next div.sc-VigVT.AEXGX > div').should('be.visible')
    }
}

module.exports = new Sofunktioniert()