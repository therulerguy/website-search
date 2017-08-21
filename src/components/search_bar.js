// anything that has JSX needs to import react
// the component curly braces means pull the item component off react
import React, { Component } from 'react';
const axios = require('axios');


class SearchBar extends Component {
    // functional components do not have states, only class based components
    // the constructor is the first and only function called automatically 
    constructor(props) {
        super(props);

        // the function is known to be bound to the searchbar components
        // if you're using a function within jsx, always bind
        this.printState = this.printState.bind(this);
        this.getInfo = this.getInfo.bind(this);

        // whenever you use state, create a new objecta and assigning it to this.state
        this.state = { term: '',
                       id: '' };
    }
    // when you define a class component you MUST
    // have a render method and return some JSX
    render() {

        <p>My search criteria is {this.props.search}</p>
        // use curly braces if you're using JS inside JSX
        // onChange is a native function to React
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: {this.state.term}
                <p>THIS IS RESPONDED DATA ID: {this.props.id}</p>
                <button onClick={this.getInfo}>PRINT</button>
            </div>

        );
    }
    // inside react component you don't need function
    printState() {
        console.log(this.state.term)
    };

    getInfo() {
        axios.get('http://localhost:1337', {
            params: {
                query: this.state.term
            }
        })
            .then(function (response) {
                this.setState({ id: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


}

export default SearchBar;