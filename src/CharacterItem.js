import React from 'react';
import { Link } from 'react-router-dom'

class CharacterItem extends React.Component {
    render () {
        return (
            <li>
                <Link to= {`/details/${this.props.id}`}>
                <img alt={this.props.image} src={this.props.image} />
                <h1>{this.props.name}</h1>
                <h2>{this.props.movie}</h2>
                </Link>
            </li>
        )
    }

}

export default CharacterItem;