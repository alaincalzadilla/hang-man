import React, { Component } from 'react';
import Word from './Word.js';
import Keyboard from './Keyboard.js';
import FailList from './FailsList.js';
import styled from 'styled-components';
import YouWon from './YouWon.js'

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 3fr 3fr;
  grid-template-columns: 3fr 1fr;
  grid-row-gap: 40px;
  max-width: 960px;
  margin: auto;
  height: 100vh;
`;

const StyledHeader = styled.header`
  margin: auto;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  h1 {
    text-transform: uppercase;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyClicked: '',
      youWon: false,
      youLose: false,
      guesses: 0,
      failList: []
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
    if(this.state.guesses+1 === this.maxAmountOfGuesses)
      this.setState({youLose: true})

      this.setState(prev => ({
        guesses: ++prev.guesses,
        failList: prev.failList.concat(this.state.keyClicked)
      }))
  }

  youWon() {
    if (!this.state.youWon) this.setState({youWon: true})
  }

  render() {
    console.log(this.state.youWon)
    return (
      <StyledApp className="App">
        <StyledHeader>
          <h1>hang man</h1>
        </StyledHeader>

        {(this.state.youWon)?
          <YouWon>
            <button onClick={this.resetState}>Replay</button>
          </YouWon>
          :
          <Keyboard keyClicked={this.keyClicked}/>}

        <Word
        keyClicked={this.state.keyClicked}
        youWon={this.youWon}
        incrementGuesses={this.incrementGuesses}
        />

        <FailList
          failList={this.state.failList}
         />

      {(this.state.youLose) && <h1>you lose</h1>}

    </StyledApp>
    );
  }
}

export default App;
