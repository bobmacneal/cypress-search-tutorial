// *********************************************** //
// ***** Response mocks for network requests ***** //
// *********************************************** //

import {HN_SEARCH_API_URL} from "../../src/constants"

Cypress.Commands.add('mockSearchRequest', (input) => {
  const URL = `${HN_SEARCH_API_URL}?query=${input}`
  cy.server()
  cy.route({
    method: 'GET',
    url: URL,
    response: 'fixture:searchResponse.json',
  })
})

Cypress.Commands.add('mockSockJsRequest', () => {
  const URL = '/sockjs-node/info?t=*'
  cy.server()
  cy.route({
    method: 'GET',
    url: URL,
    response: 'fixture:sockJs.json',
  })
})



