import React, { Component } from 'react'
import request from 'superagent'
import { NavLink } from 'react-router-dom'
import Header from './Header.js'


export default class DetailsPage extends Component {
    state ={
        character: {},    
        isLoading: false,
    }

    componentDidMount = async () =>{
        const response = await request.get(`https://halloweencharacters.herokuapp.com/halloween-characters/${this.props.match.params.id}`)
        console.log(response)
        this.setState({character: response.body})
    }
    render() {
        console.log(this.state.character)
        return (
            <>
            <Header/>
            <header>
                <NavLink
                to="/"
                activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >
            Home
                </NavLink>
              </header>
            <div>
                <p>Welcome to detail page for {this.state.character.name}</p>
                <p>Movie: {this.state.character.movie}</p>
                <img alt={this.state.character.image} src={this.state.character.image} />
            </div>
         </>
        )
    }
}