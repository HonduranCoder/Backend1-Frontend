import React, { Component } from 'react'
import request from 'superagent'
import CharacterList from './CharacterList.js';

//fetches and renders unfiltered pokemon on load. Use componenetDidMount with componenests PokeList(takes in a list of Pokemon as a prop) and PokeItem(takes in a single pokemon as a prop).

//Maintain State
export default class SearchPage extends Component {
    //State is a place we can put something that needs to be shared in lots of different places in the same component. 
    state = {
        character:[],
        }
    // 1). We need to declare a componentDidMpount to happen on load of the component. 
    // 2). We must label this function as async. 
    componentDidMount = async () => {
       await this.fetchSearch();
    }

  fetchSearch = async () => {
      // 3). We declare the repsonse 
      // 4). The result of awaiting request.get with our url. 
      try{
          const response = await request.get(`https://halloweencharacters.herokuapp.com/halloween-characters`);
      // 5). if we did this right, we get API data here 
      //?
      this.setState({
          character: response.body, 
      }); 
    }catch(e){
          this.setState({ isLoading: false})
      }

    }

    render() {
        console.log(this.state.character)
        return (
            <>
           <CharacterList filteredCharacters = {this.state.character}/> 
            </>
        )
    }
}