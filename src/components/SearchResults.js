import {CircularProgress, Typography, withStyles} from '@material-ui/core'
import {FRIENDLY_DATE_PATTERN, HN_SEARCH_API_URL, HN_SEARCH_RESULTS_LIST_NAME} from '../constants'
import React, {useEffect, useState} from 'react'
import axios from "axios"
import {DataCySelector} from "../constants"
import moment from 'moment'
import propTypes from 'prop-types'

function SearchResults ({classes, searchTerm}) {
  const [listItems, setListItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (searchTerm.trim().length === 0) {
      setListItems([])
    } else {
      const requestData = async () => {
        setError(false)
        setLoading(true)
        try {
          const response = await axios.get(`${HN_SEARCH_API_URL}?query=${searchTerm}`)
          setListItems(response.data[HN_SEARCH_RESULTS_LIST_NAME])
        } catch (error) {
          setError(true)
        }
        setLoading(false)
      }
      requestData()
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <div className={classes.progressContainer}>
        <CircularProgress />
      </div>
    )
  } else if (error) {
    return (
      <div className={classes.errorContainer}>
        <Typography color="error">{error}</Typography>
      </div>
    )
  } else {
    return (
      <div
        className={classes.listContainer}
        data-cy={DataCySelector.SEARCH_RESULTS_SELECTOR}
      >
        {listItems.map(
          (item) => {
            const {author, created_at, num_comments, objectID, points, title, url} = item
            const timestamp = moment(new Date(created_at)).format(FRIENDLY_DATE_PATTERN)
            return (
              <div
                className={classes.list}
                key={objectID}
              >
                <div
                  className={classes.title}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cy={`${objectID}-title`}
                  >
                    {title}
                  </a>
                </div>
                <div
                  className={classes.details}
                >
                  {`${points} points | ${author} | ${num_comments} comments | ${timestamp}`}
                </div>
              </div>
            )
          }
        )}
      </div>
    )
  }
}

SearchResults.propTypes = {
  classes: propTypes.object.isRequired,
  searchTerm: propTypes.string.isRequired,
}

const styles = theme => ({
  details: {
    color: theme.palette.grey[600],
    fontSize: '12px',
    paddingBottom: theme.spacing.unit * 2,
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: theme.spacing.unit * 5,
  },
  list: {
    borderBottom: `solid 1px ${theme.palette.grey[600]}`,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing.unit * 1.5,
    width: '100%',
  },
  listContainer: {
    marginTop: theme.spacing.unit * 4,
  },
  progressContainer: {
    display: 'flex',
    height: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit,
  },
  title: {
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(SearchResults)
