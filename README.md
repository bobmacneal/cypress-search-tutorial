# cypress-search-tutorial 

This is a sample search application written in [React](https://reactjs.org/). It demonstrates the rudiments 
of _end-to-end_ functional testing using the [Cypress](https://www.cypress.io/) testing framework. 
[Material-UI](https://material-ui.com/) React components are used for design and functional simplicity.

___
![Search components](https://github.com/bobmacneal/cypress-search-tutorial/blob/master/src/images/SearchComponents.png)
___
 
### Setup

1. Clone the repository 
    `$ git clone https://github.com/bobmacneal/simple-hooks-search.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn
    `$ yarn`

### Run

`$ yarn start`

### Cypress Tests

To use the Cypress test runner (animation below), issue the following: 

`$ yarn cy`

![video](https://github.com/bobmacneal/cypress-search-tutorial/blob/master/src/images/search.spec.js.gif)

Alternatively, to run all the Cypress tests from a command shell, issue the following:

`$ yarn cy:all`


### Hat Tips

**cypress-search-tutorial**:

- Uses [Hacker News search API](https://hn.algolia.com/api) to submit a search term and to 
display the resulting hits returned.

- Borrowed from general examples provided in the 
[Cypress Tutorial Videos](https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App).

- Was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

