import React, { Component } from 'react'
import request from 'superagent'
import { NavLink } from 'react-router-dom'
import Header from './Header.js'
import { editHalloweenCharacter, getCategories, deleteHalloweenCharacter, getHalloweenCharacter, getHalloweenCharacters } from './fetch-utils.js'


export default class DetailsPage extends Component {
    state ={
        character: {},   
        id: '',
        categories:[], 
        name:'', 
        movie:'',
        category_id:1,
        isLoading: false,
    }

    componentDidMount = async () =>{
        const response = await getHalloweenCharacter(this.props.match.params.id)
        console.log(response)
        this.setState({character: response})
        const categories = await getCategories()
        this.setState({ categories: categories })
    }

    handleDelete = async () => {
        await deleteHalloweenCharacter(this.props.match.params.id)
        this.props.history.push('/')
    }

    handleUpdate = async e =>{
        e.preventDefault(); 
        const newCharacter = {
            name: this.state.name,
            movie: this.state.movie, 
            category_id:this.state.category_id, 
            image: this.state.image
        }
        await editHalloweenCharacter(this.props.match.params.id, newCharacter)
        this.props.history.push('/')
    }

    // add a from with dropdown like create page form 
    render() {
        console.log(this.state)
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
              <form onSubmit={this.handleUpdate}>
                    <label>
                        Name:
                        <input onChange={(e) => this.setState({ name: e.target.value })} />
                    </label>
                    <label>
                        Image:
                        <input onChange={(e) => this.setState({ image: e.target.value })} />
                    </label>
                    <label>
                        Category:
                        <select onChange={(e) => this.setState({ category_id: e.target.value })}>
                            {this.state.categories.map(category => 
                                <option key={`${category.category_name}-${category.id}`} value={category.id}>
                                    {category.category_name}
                                </option>)}
                        </select>
                    </label>
                    <label>
                        Movie:
                        <input onChange={(e) => this.setState({ movie: e.target.value })} type="input" />
                    </label>
                    <button>
                        Update
                    </button>
                </form>
            <div>
                <p>Welcome to detail page for {this.state.character.name}</p>
                <p>Movie: {this.state.character.movie}</p>
                <img alt={this.state.character.image} src={this.state.character.image} />
            </div>
            <button onClick = {this.handleDelete}> Delete </button>
         </>
        )
    }
}