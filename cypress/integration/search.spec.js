import {HN_SEARCH_API_URL} from '../../src/constants'

describe('Search Workflows', () => {
  const INPUT_SELECTOR = 'searchInput'
  const TYPED_INPUT = 'climate'
  const SEARCH_RESULTS_SELECTOR = 'searchResults'
  const SUBMIT_BUTTON_SELECTOR = 'searchButton'
  const CLEAR_BUTTON_SELECTOR = 'clearButton'
  const URL = `${HN_SEARCH_API_URL}?query=${TYPED_INPUT}`

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/')
  })

  describe('Search Term Input:', () => {
    it('Has focus upon loading', () => {
      // eslint-disable-next-line no-undef
      cy.focused()
        .should('have.id', INPUT_SELECTOR)
    })

    it('Accepts text input', () => {
      // eslint-disable-next-line no-undef
      cy.get(`input[id="${INPUT_SELECTOR}"]`)
        .type(TYPED_INPUT)
        .should('have.value', TYPED_INPUT)
    })
  })

  describe('Initial Results:', () => {
    it('Has no items displayed', () => {
      // eslint-disable-next-line no-undef
      cy.get(`[data-cy=${SEARCH_RESULTS_SELECTOR}]`)
        .should('have.value', '')
    })
  })

  describe('Clear X Icon:', () => {
    it('Is hidden before text is entered', () => {
      // eslint-disable-next-line no-undef
      cy.get(`[data-cy=${CLEAR_BUTTON_SELECTOR}]`)
        .should('not.be.visible')
    })

    it('Is visible after text is entered', () => {
      // eslint-disable-next-line no-undef
      cy.get(`input[id="${INPUT_SELECTOR}"]`)
        .type(TYPED_INPUT)

      // eslint-disable-next-line no-undef
      cy.get(`[data-cy=${CLEAR_BUTTON_SELECTOR}]`)
        .should('be.visible')
    })

    it('Clears entered text when clicked', () => {
      // eslint-disable-next-line no-undef
      cy.get(`input[id="${INPUT_SELECTOR}"]`)
        .type(TYPED_INPUT)

      // eslint-disable-next-line no-undef
      cy.get(`[data-cy=${CLEAR_BUTTON_SELECTOR}]`)
        .click()

      // eslint-disable-next-line no-undef
      cy.get(`input[id="${INPUT_SELECTOR}"]`)
        .should('have.value', '')
    })
  })

  describe('Form Submission:', () => {
    const searchResponse = {
      hits: [
        {
          author: 'rbanffy',
          created_at: '2017-06-01T21:56:57.000Z',
          num_comments: 385,
          objectID: '14465243',
          points: 538,
          title: 'WA, NY and CA Governors Announce Formation of United States Climate Alliance',
          url: 'http://www.governor.wa.gov/news-media/inslee-new-york-governor-cuomo-and-california-governor-brown-announce-formation-united',
        },
        {
          author: 'antouank',
          created_at: '2017-06-01T20:04:27.000Z',
          num_comments: 394,
          objectID: '14463989',
          points: 517,
          title: 'US quits Paris climate pact',
          url: 'http://www.bbc.com/news/live/world-us-canada-40123293',
        },
        {
          author: 'pirocks',
          created_at: '2017-01-26T02:55:31.000Z',
          num_comments: 162,
          objectID: '13488334',
          points: 448,
          title: 'Mirroring US climate data',
          url: 'http://www.climatemirror.org/',
        },
      ],
    }

    beforeEach(() => {
      // eslint-disable-next-line no-undef
      cy.server()
      // eslint-disable-next-line no-undef
      cy.route('GET', URL, searchResponse)
    })

    it('Displays results after search button is clicked', () => {
      // eslint-disable-next-line no-undef
      cy.get(`input[id="${INPUT_SELECTOR}"]`)
        .type(TYPED_INPUT)

      // eslint-disable-next-line no-undef
      cy.get(`[data-cy=${SUBMIT_BUTTON_SELECTOR}]`)
        .click()

      searchResponse.hits.forEach(function (hit, index) {
        const selector = `${hit.objectID}-title`
        const expectedTitle = hit.title
        // eslint-disable-next-line no-undef
        cy.get(`a[data-cy=${selector}]`)
          .should('have.text', expectedTitle)
      })
    })

    it('Displays results after {Return} key is hit', () => {
      // eslint-disable-next-line no-undef
      cy.get(`input[id="${INPUT_SELECTOR}"]`)
        .type(TYPED_INPUT)
        .type('{enter}')

      searchResponse.hits.forEach(function (hit, index) {
        const selector = `${hit.objectID}-title`
        const expectedTitle = hit.title
        // eslint-disable-next-line no-undef
        cy.get(`a[data-cy=${selector}]`)
          .should('have.text', expectedTitle)
      })
    })
  })
})
