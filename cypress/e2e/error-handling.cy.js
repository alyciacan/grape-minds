describe('error handling for wine api failures', () => {
  it('shows an error message when the api request to get wines fails', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', {statusCode: 400}).as('failed-wine-request')
    cy.visit('http://localhost:3000/')
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').click()
    cy.wait('@failed-wine-request')
    cy.get('.err-msg').should('be.visible')
  })
})

describe('error handling for trivia api failures', () => {
  it('shows an error message when the api request to get wines fails', () => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', {statusCode: 400}).as('failed-trivia-request')
    cy.visit('http://localhost:3000/')
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').click()
    cy.wait('@wine-recs')
    cy.get('.start-btn').click()
    cy.contains('Unable to retrieve questions. Please try again later.')
  })
})

describe('error handling for bad URLs', () => {
  it('navigates to an error page with helpful messaging and a link to the dashboard if the user types in a bad URL', () => {
    cy.visit('http://localhost:3000/dachboard')
    cy.contains('The page you are looking for does not exist.')
    cy.get('.dashboard-btn').click()
    cy.url('/dashboard')
  })
})