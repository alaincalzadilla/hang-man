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
import WholeWord from './WholeWord.js'

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 3fr 1fr 300px;
  grid-template-columns: 2fr 1fr;
  grid-row-gap: 10px;
  max-width: 960px;
  margin: auto;
  height: 100vh;
  justify-content: center;
  margin: auto;
`;

const StyledIntroDiv = styled.div`
  grid-row: 2/4;
  grid-column: 1/-1;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  align-items: center;
  border: 3px solid #000;
  border-radius: 5px;

  button {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;

    :hover {
      background: black;
      color: white;
    }
  }

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
      wholeWord: '',
      youWon: false,
      youLose: false,
      guesses: 0,
      failList: [],
      difficulty: '',
      wordLoaded: false,
      intro: true
    }

    this.defaultState = {
      keyClicked: '',
      wholeWord: '',
      youWon: false,
      youLose: false,
      guesses: 0,
      failList: [],
      wordLoaded: false
    };
    this.reset = false;

    this.maxAmountOfGuesses = 6;

    this.inputWholeWord = this.inputWholeWord.bind(this);
    this.wordLoaded = this.wordLoaded.bind(this);
    this.startTheGame = this.startTheGame.bind(this);
    this.changeDifficultyLevel = this.changeDifficultyLevel.bind(this);
    this.resetState = this.resetState.bind(this);
    this.keyClicked = this.keyClicked.bind(this);
    this.youWon = this.youWon.bind(this);
    this.incrementGuesses = this.incrementGuesses.bind(this);
  }

  keyClicked(keyClicked) {
    this.setState({keyClicked})
  }

  incrementGuesses(str=this.state.keyClicked){
    if(this.state.guesses+1 === this.maxAmountOfGuesses)
      this.setState({youLose: true})

      this.setState(prev => ({
        guesses: ++prev.guesses,
        failList: prev.failList.concat(str)
      }))
  }

  changeDifficultyLevel(level){
    this.setState(() => (level)?{difficulty: level}:'')
  }

  startTheGame(){
    this.setState(prev => ({intro: !prev.intro}))
    this.resetState();
  }

  wordLoaded(boolean){
    this.setState({wordLoaded: boolean})
  }

  resetState(){
    this.reset = true;
    this.setState(this.defaultState);
  }

  inputWholeWord(query){
    this.setState({wholeWord: query})
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

        {(this.state.intro)?
        <StyledIntroDiv>
          <Level
             maxDifficulty={10}
             changeDifficultyLevel = {this.changeDifficultyLevel}
           />

         <Button name="start" handleClick={this.startTheGame} />
         </StyledIntroDiv>
        :(
          <React.Fragment>
            {(this.state.youWon)?
              <YouWonLose text='Well done!'>
                <Button name='replay' handleClick={this.resetState} />

                <Button name="settings" handleClick={this.startTheGame} />

              </YouWonLose>
              :(this.state.youLose)?
              <YouWonLose text='You Lost!'>
                <Button name='replay' handleClick={this.resetState} />

                <Button name="settings" handleClick={this.startTheGame} />

            </YouWonLose>
              :(
                <React.Fragment>
                  <Keyboard keyClicked={this.keyClicked} wordLoaded={this.state.wordLoaded}/>

                  <WholeWord
                    inputWholeWord={this.inputWholeWord}
                    />
                </React.Fragment>
              )}

            <Word
            keyClicked={this.state.keyClicked}
            wholeWord={this.state.wholeWord}
            youWon={this.youWon}
            incrementGuesses={this.incrementGuesses}
            reset = {this.reset}
            difficulty = {this.state.difficulty}
            wordLoaded = {this.wordLoaded}
            />



            <FailList
              failList={this.state.failList}
              reset = {this.reset}
             />


           <Diagram guesses={this.state.guesses} />
          </React.Fragment>

        )
      }


    </StyledApp>
    );
  }
}

export default App;
