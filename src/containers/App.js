import React, { Component } from 'react';
import '../App.css';
import DisplayNav from './DisplayNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Counting Cards
          </h1>
        </header>
        <DisplayNav />
      </div>
    );
  }
}

export default App;
