import React, { Component } from 'react'
import SearchRecipe from './SearchRecipes'
import '../styles/index.css'
import RecipeList from './RecipeList'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipe />
                <RecipeList />
            </div>
        )
    }
}

export default App;