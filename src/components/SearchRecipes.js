import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button, FormLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRecipes } from '../actions/'

class SearchRecipes extends Component {
    constructor(){
        super()

        this.state = {
            Ingredients: '',
            dish: ''
        }
    }
    search(){
        console.log('state', this.state)
        //const url = 'http://www.recipepuppy.com/api/?i=garlic,chicken&q=adobo'
        //when we want to append variables to string we use back tricks instead  of single quotes
        //const url = `http://www.recipepuppy.com/api/?i=${this.state.Ingredients}&q=${this.state.dish}`
        let { Ingredients, dish } = this.state
        const url = `http://www.recipepuppy.com/api/?i=${Ingredients}&q=${dish}`
        //console.log('url',url)
        fetch(url, {
            method: 'GET'
        })
        .then(Response => Response.json())
        .then(json => {
            console.log('recipes', json);
            this.props.setRecipes(json.results)
        })
    }
    render(){
        return(
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {' '}
                    <FormControl 
                        type="text" 
                        placeholder="garlic, chicken" 
                        onChange={event => this.setState({ Ingredients: event.target.value })}/>
                </FormGroup>
                { ' ' }
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    { ' ' }
                    <FormControl 
                        type="text" 
                        placeholder="adobo"
                        onChange={event => this.setState({ dish: event.target.value })}/>
                </FormGroup>
                { ' ' }
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        )
    }
}


export default connect(null, { setRecipes }) (SearchRecipes)