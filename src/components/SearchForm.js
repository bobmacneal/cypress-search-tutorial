import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  withStyles,
} from '@material-ui/core'
import React, {useRef, useState} from 'react'
import classNames from 'classnames'
import ClearIcon from '@material-ui/icons/Clear'
import {DataCySelector} from "../constants"
import propTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/SearchOutlined'

function SearchForm ({classes, onFormSubmitted}) {
  const [term, setTerm] = useState('')
  const searchTermInputReference = useRef()

  function handleSearch (event) {
    event.preventDefault()
    if (term.length > 0) {
      onFormSubmitted(term)
    }
  }

  function handleClearSearchTerm () {
    setTerm('')
    searchTermInputReference.current.focus()
    onFormSubmitted('')
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSearch} >
        <div className={classes.searchContainer}>
          <div>
            <TextField
              autoFocus
              id={DataCySelector.INPUT_SELECTOR}
              className={classNames(classes.textMargin, classes.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Clear search term"
                      data-cy={DataCySelector.CLEAR_BUTTON_SELECTOR}
                      onClick={handleClearSearchTerm}
                      style={{visibility: term.length > 0 ? 'visible' : 'hidden'}}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputRef={searchTermInputReference}
              label="search"
              onChange={event => setTerm(event.target.value)}
              value={term}
              variant="outlined"
            />
          </div>
          <div>
            <Button
              className={classes.searchButton}
              data-cy={DataCySelector.SUBMIT_BUTTON_SELECTOR}
              type="submit"
              variant="contained"
            >
              Submit
              <SearchIcon
                className={classes.searchIcon}
              />
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

SearchForm.propTypes = {
  classes: propTypes.object.isRequired,
  onFormSubmitted: propTypes.func.isRequired,
}

const styles = theme => ({
  searchButton: {
    color: 'black',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchIcon: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  textMargin: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(styles)(SearchForm)
