import React, { Component } from 'react'
import SearchPage from './SearchPage.js'
import DetailsPage from './DetailsPage'
import CreatePage from './CreatePage.js'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <header>
          <h2>Stay out of the Forest</h2>
              <nav>
                 <NavLink exact activeClassName='active-nav' to='/'>Home</NavLink>
                  <NavLink exact activeClassName='active-nav' to='/create'>CreatePage</NavLink>
               </nav>
      </header>
        <Switch>
           <Route 
            path="/" 
            exact
            render={(routerProps) => <SearchPage {...routerProps} />} 
          />   
           <Route 
            path="/create" 
            exact
            render={(routerProps) => <CreatePage {...routerProps} />} 
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

