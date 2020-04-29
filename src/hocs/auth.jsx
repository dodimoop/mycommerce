import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const email = window.localStorage.getItem('id')
  return (
    <Route
      {...rest}
      render={props =>
        email ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
}

export default PrivateRoute
