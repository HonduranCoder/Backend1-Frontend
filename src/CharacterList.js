import React from 'react'
import CharacterItem from "./CharacterItem.js"

class CharacterList extends React.Component {
    
    render() {
        return ( 
            <ul>
                 {
                this.props.filteredCharacters.map(character => 
                (<CharacterItem 
                key = {character.id}
                id= {character.id}
                image = {character.image}
                movie = {character.movie}/>
                ))} 
            </ul>
            );
    }
}

export default CharacterList;