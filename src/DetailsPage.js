import React, { Component } from 'react'
import request from 'superagent'
import Loader from 'react-loader-spinner';
import CharacterDetails from './CharacterDetails.js'
import { NavLink } from 'react-router-dom'


export default class DetailsPage extends Component {
    state ={
        character: {},    
        isLoading: false,
    }

    componentDidMount = async () =>{
        const response = await request.get(`https://halloweencharacters.herokuapp.com/halloween-characters/${this.props.match.params.id}`)
        this.setState({character: response.body})
    }
    render() {
        console.log(this.state.character)
        return (
            <>
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
                <p>Welcome to detail page for {this.state.character.character}</p>
                <p>Movie: {this.state.character.movie}</p>
                <p>{this.state.character.image}</p>
            </div>
             <ul>
             {
                 this.state.isLoading
                 ? <Loader type="Circles" color="##f60000" height={80} width={80}/>
                 :<CharacterDetails filteredPokes={this.state.character}/>
             }
         </ul>
         </>
        )
    }
}