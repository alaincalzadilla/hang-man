import React, { Component } from 'react';
import Word from './Word.js';
import Keyboard from './Keyboard.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyClicked: '',
      youWon: false
    }

    this.keyClicked = this.keyClicked.bind(this);
    this.youWon = this.youWon.bind(this);
  }

  keyClicked(keyClicked) {
    this.setState({keyClicked})
  }

  youWon() {
    if (!this.state.youWon) this.setState({youWon: true})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Keyboard keyClicked={this.keyClicked}/>
        <Word
        keyClicked={this.state.keyClicked}
        youWon={this.youWon}
        />
      {(this.state.youWon) && <h1>you won</h1>}
      </div>
    );
  }
}

export default App;
