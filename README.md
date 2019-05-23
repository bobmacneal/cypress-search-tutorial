# cypress-search-tutorial 

This is a sample search application written in [React](https://reactjs.org/). It demonstrates the rudiments 
of _end-to-end_ functional testing using the [Cypress](https://www.cypress.io/) testing framework. 
[Material-UI](https://material-ui.com/) React components are used for design and functional simplicity.


![Search components](https://github.com/bobmacneal/cypress-search-tutorial/blob/master/src/images/SearchComponents.png)

 
### Setup

1. Clone the repository: `git clone https://github.com/bobmacneal/simple-hooks-search.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn: `yarn`

### Run

`yarn start`

### Cypress Tests

to fire up the test runner (shown below): 

`yarn cy`

![video](https://github.com/bobmacneal/cypress-search-tutorial/blob/master/src/images/searchspecjs.gif)

to run tests in a command shell:

`yarn cy:all`


### Hat Tips

- **simple-hooks-search** is based on exercises found in the Udemy course [React Hooks](https://www.udemy.com/react-hooks/) by [Reed Barger](https://www.udemy.com/react-hooks/#instructor-1) and on an informative blog post: [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by [Robin Wieruch](https://github.com/rwieruch).

- **simple-hooks-search** Cypress testing is guided by [Cypress Tutorial Videos](https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App).

- **simple-hooks-search** was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- **simple-hooks-search** queries [Hacker News search API](https://hn.algolia.com/api) for search results for a given 
search term.

- See companion [simple-hooks](https://github.com/bobmacneal/simple-hooks) for another sample application using React hooks.
