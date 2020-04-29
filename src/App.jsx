import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './hocs/auth'

import Login from './Pages/Login'
import Homepage from './Pages/Home'
import ProductDetail from './Pages/Details'
import PurchasedHistory from './Pages/Purchased'

export default () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Homepage} />
        <PrivateRoute path="/detail/:id" exact component={ProductDetail} />
        <PrivateRoute path="/purchased" exact component={PurchasedHistory} />

        <Redirect to="/" />
      </Switch>
    </>
  )
}
