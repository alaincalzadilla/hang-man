import React, { Component } from 'react';
import Word from './Word.js';
import Keyboard from './Keyboard.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyClicked: '',
      youWon: false,
      youLose: false,
      guesses: 0
    }

    this.maxAmountOfGuesses = 6;

    this.keyClicked = this.keyClicked.bind(this);
    this.youWon = this.youWon.bind(this);
    this.incrementGuesses = this.incrementGuesses.bind(this);
  }

  keyClicked(keyClicked) {
    this.setState({keyClicked})
  }

  incrementGuesses(){
    if(this.state.guesses+1 === this.maxAmountOfGuesses) {
      this.setState({youLose: true})
    } else
        this.setState(prev => ({
          guesses: ++prev.guesses
        }))
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
        incrementGuesses={this.incrementGuesses}
        />
      {(this.state.youWon) && <h1>you won</h1>}
      {(this.state.youLose) && <h1>you lose</h1>}

      </div>
    );
  }
}

export default App;
