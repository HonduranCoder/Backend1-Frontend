import React, { Component } from 'react'
import SearchPage from './SearchPage.js'
import DetailsPage from './DetailsPage'
import HomePage from './HomePage.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h2>Pokedex</h2>
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <HomePage {...routerProps} />} 
          />  
           <Route 
            path="/search" 
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

