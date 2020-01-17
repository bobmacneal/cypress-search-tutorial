import {DataCySelector} from '../../src/constants'
const searchResponse = require('../fixtures/searchResponse')

describe('Search', () => {
  const TYPED_SEARCH_INPUT = 'climate'

  beforeEach(() => {
    cy.visit('/')
    cy.mockSockJsRequest()
  })

  describe('Search Term Input:', () => {
    it('Has focus upon loading', () => {
      cy.focused()
        .should('have.id', DataCySelector.INPUT_SELECTOR)
    })

    it('Accepts text input', () => {
      cy.get(`input[id="${DataCySelector.INPUT_SELECTOR}"]`)
        .type(TYPED_SEARCH_INPUT)
        .should('have.value', TYPED_SEARCH_INPUT)
    })
  })

  describe('Initial Results:', () => {
    it('Has no items displayed', () => {
      cy.get(`[data-cy=${DataCySelector.SEARCH_RESULTS_SELECTOR}]`)
        .should('have.value', '')
    })
  })

  describe('Clear X Icon:', () => {
    it('Is hidden before text is entered', () => {
      cy.get(`[data-cy=${DataCySelector.CLEAR_BUTTON_SELECTOR}]`)
        .should('not.be.visible')
    })

    it('Is visible after text is entered', () => {
      cy.get(`input[id="${DataCySelector.INPUT_SELECTOR}"]`)
        .type(TYPED_SEARCH_INPUT)

      cy.get(`[data-cy=${DataCySelector.CLEAR_BUTTON_SELECTOR}]`)
        .should('be.visible')
    })

    it('Clears entered text when clicked', () => {
      cy.get(`input[id="${DataCySelector.INPUT_SELECTOR}"]`)
        .type(TYPED_SEARCH_INPUT)

      cy.get(`[data-cy=${DataCySelector.CLEAR_BUTTON_SELECTOR}]`)
        .click()

      cy.get(`input[id="${DataCySelector.INPUT_SELECTOR}"]`)
        .should('have.value', '')
    })
  })

  describe('Form Submission:', () => {
    beforeEach(() => {
      cy.server()
      cy.mockSockJsRequest()
      cy.mockSearchRequest(TYPED_SEARCH_INPUT)
    })

    it('Displays results after search button is clicked', () => {
      cy.get(`input[id="${DataCySelector.INPUT_SELECTOR}"]`)
        .type(TYPED_SEARCH_INPUT)

      cy.get(`[data-cy=${DataCySelector.SUBMIT_BUTTON_SELECTOR}]`)
        .click()

      searchResponse.hits.forEach(function (hit, index) {
        const selector = `${hit.objectID}-title`
        const expectedTitle = hit.title
        cy.get(`a[data-cy=${selector}]`)
          .should('have.text', expectedTitle)
      })
    })

    it('Displays results after {Return} key is hit', () => {
      cy.get(`input[id="${DataCySelector.INPUT_SELECTOR}"]`)
        .type(TYPED_SEARCH_INPUT)
        .type('{enter}')

      searchResponse.hits.forEach(function (hit, index) {
        const selector = `${hit.objectID}-title`
        const expectedTitle = hit.title
        cy.get(`a[data-cy=${selector}]`)
          .should('have.text', expectedTitle)
      })
    })
  })
})
