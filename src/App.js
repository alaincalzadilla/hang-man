import React, { Component } from 'react';
import Word from './Word.js';
import Keyboard from './Keyboard.js';
import FailList from './FailsList.js';
import styled from 'styled-components';
import YouWonLose from './YouWonLose.js';
import Button from './Button.js';
import Diagram from './Diagram.js';
import './App.css';
import Level from './Level.js';

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 3fr 300px;
  grid-template-columns: 2fr 1fr;
  grid-row-gap: 10px;
  max-width: 960px;
  margin: auto;
  height: 100vh;
  justify-content: center;
  margin: auto;
`;

const StyledHeader = styled.header`
  margin: auto;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  h1 {
    text-transform: uppercase;

    span {
      color: red;
    }
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
      failList: [],
      difficulty: ''
    }

    this.defaultState = this.state;
    this.reset = false;

    this.maxAmountOfGuesses = 6;

    this.changeDifficultyLevel = this.changeDifficultyLevel.bind(this);
    this.resetState = this.resetState.bind(this);
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

  changeDifficultyLevel(level){
    this.setState(() => (level)?{difficulty: level}:'')
  }

  resetState(){
    this.reset = true;
    this.setState(this.defaultState);
  }

  youWon() {
    if (!this.state.youWon) this.setState({youWon: true})
  }

  componentDidUpdate(){
    this.reset = false
  }

  render() {
    console.log(this.state.youWon)
    return (
      <StyledApp className="App">
        <StyledHeader>
          <h1>hang{(this.state.youLose)&&<span>ed</span>} man</h1>
        </StyledHeader>

        {(this.state.youWon)?
          <YouWonLose text='Well done!'>
            <Button name='replay' handleClick={this.resetState} />
          </YouWonLose>
          :(this.state.youLose)?
          <YouWonLose text='You Lost!'>
            <Button name='replay' handleClick={this.resetState} />
          </YouWonLose>
          :
          <Keyboard keyClicked={this.keyClicked}/>}

        <Word
        keyClicked={this.state.keyClicked}
        youWon={this.youWon}
        incrementGuesses={this.incrementGuesses}
        reset = {this.reset}
        difficulty = {this.state.difficulty}
        />

        <FailList
          failList={this.state.failList}
          reset = {this.reset}
         />

       <Level
          maxDifficulty={10}
          changeDifficultyLevel = {this.changeDifficultyLevel} />

       <Diagram guesses={this.state.guesses} />
    </StyledApp>
    );
  }
}

export default App;
