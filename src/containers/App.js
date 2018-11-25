import React, { Component } from 'react';
import '../App.css';
import GameTable from './GameTable'
// import Instructions from '../components/Instructions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Counting Cards
          </h1>
        </header>
        {/* <Instructions />*/}
        <GameTable />
      </div>
    );
  }
}

export default App;
