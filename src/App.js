import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar';


class App extends Component {
  constructor(props) {
    super(props);
    
    // whenever you use state, create a new objecta and assigning it to this.state
    this.state = { term: ''};
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test App</h2>
        </div>
        <div>
          <SearchBar />
        </div>
        
      </div>
    );
  }
}

export default App;
