class Search {

    marke(){
        cy.get('[data-testid=landing-make-selector]').should('be.visible').click()
        return this;
    }

    trefferBtn(){
        cy.get('[data-testid=landing-search-button]').should('be.visible').click()
    }
}

module.exports = new Search()