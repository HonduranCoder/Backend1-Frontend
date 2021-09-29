import React, { Component } from 'react'
import SearchPage from './SearchPage.js'
import DetailsPage from './DetailsPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h2>Stay Out of The Forest</h2>
        <Switch>
           <Route 
            path="/" 
            exact
            render={(routerProps) => <SearchPage {...routerProps} />} 
          />   
           <Route 
            path="/details/:id" 
            exact
            render={(routerProps) => <DetailsPage {...routerProps} />} 
          />                         
        </Switch>
      </div>
    </Router>
  );
}
}

