import React, { Component } from 'react'
import { createHalloweenCharacters, getCategories } from './fetch-utils.js'

export default class CreatePage extends Component {
    state ={
        id: '',
        categories:[], 
        name:'', 
        movie:'',
        category_id:1,  

    }

    componentDidMount = async () => {
        const categories = await getCategories()
        this.setState({ categories: categories })
    }

    handleSubmit = async e =>{
        e.preventDefault(); 
        const newCharacter = {
            name: this.state.name,
            movie: this.state.movie, 
            category_id:this.state.category_id, 
            image: this.state.image
        }
        await createHalloweenCharacters(newCharacter)
        //console.log(newCharacter)
        //this.props.history.push('/')
    }

    render() {
        return (
            <div>
                  <form onSubmit={this.handleSubmit}>
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
                        Create
                    </button>
                </form>
            </div>
        )
    }
}
