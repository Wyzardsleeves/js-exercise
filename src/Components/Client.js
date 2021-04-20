import React from 'react'
import Search from './Search'
import User from './User'
import Navbar from './Navbar'
import {Switch, Route} from 'react-router-dom'

const Client = () => {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  )
}

export default Client
