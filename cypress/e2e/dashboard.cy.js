describe('user dashboard with no games played', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', { fixture: 'questions' }).as('trivia-qs')
    cy.visit('http://localhost:3000/dashboard')
  })

  it('shows the user a catchy description of the app', () => {
    cy.get('.about-text').should('have.text', 'Grape Minds is the premier trivia game for adventurous oenophiles!')
  })

  it('shows the user an area with trivia stats and another with user-saved wines', () => {
    cy.get('.trivia-stats').should('be.visible')
    cy.get('.saved-wines').should('be.visible')
  })

  it('shows the user a helpful message if they haven\'t saved any wines', () => {
    cy.get('li').should('have.text', 'It looks like you haven\'t saved any wines yet!')
  })

  it('shows the user helpful messages if they haven\'t played any games yet instead of just 0 in the stats area', () => {
    cy.contains('No games played!').should('be.visible')
  })

  it('shows the user a helpful message if they haven\'t saved any wines', () => {
    cy.contains('No wines saved!').should('be.visible')
  })

})

describe('user dashboard with games played', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', { fixture: 'questions' }).as('trivia-qs')
    cy.visit('http://localhost:3000/')
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').click()
    cy.wait('@wine-recs')
    cy.get('.heart').first().click()
    cy.get('.start-btn').click()
    cy.wait('@trivia-qs')
    cy.url('/gameplay')
    cy.get('.choices-box').children('.choice').eq(1).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(2).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(3).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(3).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(2).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(3).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(0).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(2).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(1).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.choices-box').children('.choice').eq(3).click()
    cy.get('.submit-answer-btn').click()
    cy.get('.home-btn').click()
  })

  it('shows the user how many games they have played, their average score, and their most-played trivia category', () => {
    cy.get(':nth-child(1) > .stat').should('have.text', '1')
    cy.get(':nth-child(2) > .stat').should('have.text', '90%')
    cy.get(':nth-child(3) > .stat').should('have.text', 'books')
  })

  it('shows the user their most-saved wine varietal', () => {
    cy.get(':nth-child(4) > .stat').should('have.text', 'port')
  })

  it('allows user to clear their previous scores, they have to confirm that\'s what they want, and then the stats display will reflect the cleared data', () => {
    cy.window().then((win) =>
      cy.stub(win, 'confirm').as('confirm').returns(true),
    )
    cy.get('.clear-data-btn').click()
    
    cy.get(':nth-child(1) > .stat').should('have.text', 'No games played!')
    cy.get(':nth-child(2) > .stat').should('have.text', 'No games played!')
    cy.get(':nth-child(3) > .stat').should('have.text', 'No games played!')
  })

  it('allows user to delete saved wines from their saved wines area', () => {
    cy.contains('🗑️').click()
    cy.contains('No wines saved!').should('be.visible')
  })

})