import React, { Component } from 'react'
import halloween from './halloween.jpeg'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
            <header className = 'App-header'>
             Halloween Characters
            </header>
            <div className = "pic">
            <img src={halloween} width="100" height="100" alt ="Halloween"/>
            </div>
        
            </>  
        )
    }
}
