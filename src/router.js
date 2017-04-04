import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './components/Home'
import Main from './components/Main'
import SearchPage from './components/Search/SearchPage'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Home}>
        <IndexRoute component={Main} />
        <Route path='search' component={SearchPage} />
      </Route>
    </Router>
  )
}

export default Routes
