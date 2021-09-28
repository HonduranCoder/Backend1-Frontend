import React, { Component } from 'react'
import pic from './halloween.jpeg'
import { NavLink } from 'react-router-dom'
import './App.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className ="header">
                This is Halloween
                <div className="pic">
                <img src={pic} width="300" height="400" alt ="Characters"/>
                </div>
                <NavLink
                to="./search"
                activeStyle={{
                fontWeight: "bold",
                color: "turquoise", 
            }}
            >
            Go to Search Page
                </NavLink>
            </div>
        )
    }
}
