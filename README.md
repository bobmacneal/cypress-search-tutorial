# cypress-search-tutorial 

This is a sample search application using [React](https://reactjs.org/) intended to demonstrates some of the basics of 
_end-to-end_ functional testing using the [Cypress.io](https://www.cypress.io/) framework. 
[Material-UI](https://material-ui.com/) components are used for design and functional simplicity.

___
![Search components](https://github.com/bobmacneal/cypress-search-tutorial/blob/master/src/images/SearchComponents.png)
___
 
### Setup

1. Clone the repository 
    `$ git clone https://github.com/bobmacneal/cypress-search-tutorial.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn
    `$ yarn`

### Run

`$ yarn start`

### Cypress Tests

To use the Cypress test runner (animation below), issue the following: 

`$ yarn cy`

![video](https://github.com/bobmacneal/cypress-search-tutorial/blob/master/src/images/searchspecjs.gif)

Alternatively, to run all the Cypress tests from a command shell, issue the following:

`$ yarn cy:all`


### Hat Tips

**cypress-search-tutorial**:

- uses [Hacker News search API](https://hn.algolia.com/api) to submit a search term and to 
display the resulting hits returned

- borrows from the general examples in the 
[cypress tutorial videos](https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App)

- was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

