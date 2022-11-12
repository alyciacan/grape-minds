describe('getting started with Grape Minds', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', { fixture: 'questions' }).as('trivia-qs')
    cy.visit('http://localhost:3000/')
  });

  it('shows the logo and a cartoon grape', () => {
    cy
      .get('.logo').should('be.visible')
      .get('.mascot').should('be.visible')
  })

  it('prompts the user to select a trivia category and wine budget', () => {
    cy.get('.form').contains('What kind of trivia would you like to play today?')
    cy.get('.form').contains('And what\'s your budget for a bottle of wine?')
  })

  it('allows the user to select a category and budget', () => {
    cy.get('#trivia').select('books')
      .get('#budget').select('$50')
  })

  it('does not allow the user to submit the form without selecting both a category and budget', () => {
    cy.get('#trivia').select('books')
    cy.get('button.landing-btn').should('be.disabled')
  })

  it('does let a user submit the form once they have selected both a category and budget', () => {
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').should('be.enabled')
  })
})

describe('Getting wine recommendations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', { fixture: 'questions' }).as('trivia-qs')
    cy.visit('http://localhost:3000/')
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').click()
    cy.wait('@wine-recs')
  })

  it('generates wine recommendations based on the user\'s stated preferences on submit', () => {
    cy.get('.wine-list').children('.wine-rec').should('have.length', 2)
  })

  it('allows a user to save wines from the recommended wine list and confirms that a wine was saved', () => {
    cy.get('.heart').first().click()
    cy.get('.saved-msg').contains('Saved!')
  })

  it('does not allow a user to save the same wine twice, and shows the user a helpful message when they try', () => {
    cy.get('.heart').first().click()
    cy.get('.saved-msg').contains('Saved!')
    cy.get('.heart').first().click()
    cy.get('.saved-msg').contains('You have already saved that wine.')
  })

  it('allows user to navigate to gameplay', () => {
    cy.get('.start-btn').click()
    cy.wait('@trivia-qs')
    cy.url('/gameplay')
  })
})

describe('Playing trivia', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', { fixture: 'questions' }).as('trivia-qs')
    cy.visit('http://localhost:3000/')
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').click()
    cy.wait('@wine-recs')
    cy.get('.start-btn').click()
    cy.wait('@trivia-qs')
    cy.url('/gameplay')
  })

  it('shows the user a trivia question with four choices that are buttons', () => {
    cy.get('.question-card').within(() => {
      cy.get('h2').contains('How many kilobytes in one gigabyte (in decimal)?')
      cy.get('.choices-box').children('.choice').should('have.length', 4).should('be.enabled')
    })
  })

  it('has a submit button that is disabled until a user selects a choice', () => {
    cy.get('.submit-answer-btn').should('be.disabled')
    cy.get('.choices-box').children('.choice').eq(1).click()
    cy.get('.submit-answer-btn').should('be.enabled')
  })
  
  it('displays a new question when the user submits their answer', () => {
    cy.get('.choices-box').children('.choice').eq(1).click()
    cy.get('.submit-answer-btn').click()
    cy.get('h2').contains('What is it called when you stop an api request in a testing environment?')
  })

  it('takes user through 10 questions', () => {
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
  })
})

describe('when the game ends', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.spoonacular.com/food/wine/**', { fixture: 'wines' }).as('wine-recs')
    cy.intercept('GET', 'https://opentdb.com/**', { fixture: 'questions' }).as('trivia-qs')
    cy.visit('http://localhost:3000/')
    cy.get('#trivia').select('books')
    cy.get('#budget').select('$50')
    cy.get('button.landing-btn').click()
    cy.wait('@wine-recs')
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
  })

  it('navigates the user to the gameover page, where they can see their score as a % and a home button', () => {
    cy.get('.submit-answer-btn').click()
    cy.url('/gameover')
    cy.get('.gameover-score').should('have.text', '90%')
    cy.get('.home-btn').should('be.visible')
    })

  it('allows the user to navigate to their dashboard by clicking the home button', () => {
    cy.get('.submit-answer-btn').click()
    cy.get('.home-btn').click()
    cy.url('/dashboard')
  })
})


