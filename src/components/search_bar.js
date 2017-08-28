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

        this.printState = this.printState.bind(this);
        this.postInfo = this.postInfo.bind(this);
        this.state = {
            term: '',
            id: '',
            string: '',
            html: ''
        };
    }

    render() {

        <p>My search criteria is {this.props.search}</p>
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

    // function to grab the HTML with axios.get and pass it into the state
    // the post passes to my RESTapi in dbtest.js where I run my queries
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
        })
            .then(response => {
                console.log(response.data[0].idwebsite);
                // this.setState({ id: response.data[0].idwebsite });
                this.setState({ id: response.data[0].html });
            })
    };

    // function to correct the url from www to http://www
    // passing a https:// won't work so no need to correct URL
    correctUrl(url) {
        var prefix = 'http://';
        if (url.substr(0, prefix.length) !== prefix) {
            url = prefix + url;
            return url;
        }
        return url;
    };
}

export default SearchBar;