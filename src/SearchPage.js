import React, { Component } from 'react'
//import { EntryOptionPlugin } from 'webpack';
//import request from 'superagent'
import CharacterItem from './CharacterItem'
import { getHalloweenCharacters } from './fetch-utils.js';

//fetches and renders unfiltered pokemon on load. Use componenetDidMount with componenests PokeList(takes in a list of Pokemon as a prop) and PokeItem(takes in a single pokemon as a prop).

//Maintain State
export default class SearchPage extends Component {
    //State is a place we can put something that needs to be shared in lots of different places in the same component. 
    state = {
        halloweenData:[],
        }
    // 1). We need to declare a componentDidMpount to happen on load of the component. 
    // 2). We must label this function as async. 
    componentDidMount = async () => {
     const halloweenData =  await getHalloweenCharacters();
     this.setState({halloweenData})
    }

  //fetchSearch = async () => {
      // 3). We declare the repsonse 
      // 4). The result of awaiting request.get with our url. 
    //  try{
      //    const response = await request.get(`https://sql1-app.herokuapp.com/halloween-characters`);
      // 5). if we did this right, we get API data here 
      //?
      //this.setState({
        //  character: response.body, 
      //}); 
    //}catch(e){
      //    this.setState({ isLoading: false})
      //}

    //}

    render() {
        const arr = this.state.halloweenData;
        console.log(this.state.halloweenData)
        //console.log(this.state.character)
        return (
            <div>
            {
            arr.map(entry => {
                        return <CharacterItem key={entry.id} {...entry}/>
                    })
                }
            </div>
        )
    }
}