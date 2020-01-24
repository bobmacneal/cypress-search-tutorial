import 'typeface-roboto'
import {AppBar, Typography, withStyles} from '@material-ui/core'
import React, {useState} from 'react'
import Logo from './images/logo.png'
import {MuiThemeProvider} from '@material-ui/core/styles'
import propTypes from 'prop-types'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import simpleTheme from './simpleTheme'

function App ({classes}) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleFormSubmitted (term) {
    setSearchTerm(term)
  }

  return (
    <MuiThemeProvider theme={simpleTheme}>
      <AppBar color="primary" elevation={1} position="fixed" className={classes.appBar}>
        <>
          <div className={classes.logo}>
            <img src={Logo} height="40" alt="cypress-search-tutorial" />
          </div>
          <div className={classes.title}>
            <Typography
              align="right"
              variant="subtitle2"
              color="textSecondary"
            >
              {`cypress-search-tutorial v-${process.env.REACT_APP_VERSION}`}
            </Typography>
          </div>
        </>
      </AppBar>
      <div style={{margin: '80px 15px 15px 15px'}}>
        <SearchForm onFormSubmitted={handleFormSubmitted} />
        <SearchResults searchTerm={searchTerm} />
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  classes: propTypes.object.isRequired,
}

const globalStyles = {
  appBar: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '15px',
    paddingRight: '20px',
    height: '60px',
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  '@global': {
    'html': {
      backgroundColor: '#fff',
      fontFamily: '"Roboto", sans-serif',
    },
    'body': {
      backgroundColor: '#fff',
    },
  },
}

export default withStyles(globalStyles)(App)
