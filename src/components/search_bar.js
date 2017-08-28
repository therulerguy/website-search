// anything that has JSX needs to import react
// the component curly braces means pull the item component off react
import React, { Component } from 'react';

const axios = require('axios');

var instance = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 1000,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // if you're using a function within jsx, always bind
        this.printState = this.printState.bind(this);
        this.postInfo = this.postInfo.bind(this);

        // enable the getInfo
        //this.getInfo = this.getInfo.bind(this);

        // whenever you use state, create a new objecta and assigning it to this.state
        this.state = {
            term: '',
            id: '',
            string: '',
            html: ''
        };
    }

    // when you define a class component you MUST
    // have a render method and return some JSX
    render() {

        <p>My search criteria is {this.props.search}</p>
        // onChange is a native function to React
        return (
            <div>
                <p></p>
                <input
                    onChange={event => this.setState({ term: event.target.value })} />
                <p></p>
                <button onClick={this.postInfo}>PRINT</button>
                <p></p>
                <div className="html-box">
                    {(this.state.id)}
                </div>
            </div>

        );
    }
    // inside react component you don't need function
    printState() {
        console.log(this.state.term)
    };

    // getInfo() {
    //     let html;
    //     console.log(this.state.term);
    //     axios.get(this.correctUrl(this.state.term))
    //         .then(data => {
    //             console.log(data);
    //             html = data.data;
    //             // html = this.correctUrl('html');
    //             // gets the HTML of the website and returns it
    //             this.setState({ string: html });
    //             console.log(html);
    //         });
    // };

    postInfo() {
        axios.get(this.correctUrl(this.state.term))
            .then(response => {
                this.setState({ html: response })
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.post('http://localhost:1337/test', {
            // passing your url to your express server
            url: this.correctUrl(this.state.term),
            html: this.state.html
            // test data 
            // url: 'http://www.test.com'
        })
            .then(response => {
                console.log(response.data[0].idwebsite);
                // this.setState({ id: response.data[0].idwebsite });
                this.setState({ id: response.data[0].html });
            })
    };

    postUrl() {
        axios.get('')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // this one works
    // passing a https:// wpn't work so no need to correct URL
    correctUrl(url) {
        var prefix = 'http://';
        if (url.substr(0, prefix.length) !== prefix) {
            url = prefix + url;
            return url;
        }
        return url;
    };

    // correctUrl(url) {
    //     var prefix = 'http://';
    //     var prefix2 = 'https://';
    //     if (url.substr(0, prefix2.length) !== prefix2) {
    //         return url;
    //     } else if (url.substr(0, prefix.length) !== prefix ) {
    //         return url;
    //     } else {
    //     return url;
    //     }
    // };

}

export default SearchBar;