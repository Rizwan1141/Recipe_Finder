import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import FavoriteRecipeList from './components/FavoriteRecipeList'

const store = createStore(rootReducer)
store.subscribe(() => console.log('store', store.getState()))

//both paths start with forward slash, so App component will fetch all paths that begin with forward slash
// we can make this path exact to use only single forward slash to hit App Component, here we will specify "exact"

ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/favorites' component={FavoriteRecipeList}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)