import React, { Component } from 'react';
import Word from './Word.js';
import Keyboard from './Keyboard.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Keyboard />
        <Word number={Math.floor((Math.random() * 1000))}/>
      </div>
    );
  }
}

export default App;
