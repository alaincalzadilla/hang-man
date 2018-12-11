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
import WholeWord from './WholeWord.js';
import Points from './Points.js';

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 230px 1fr 200px;
  grid-template-columns: 2fr 1fr;
  grid-row-gap: 20px;
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
  grid-template-columns: 2fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  border-radius: 5px;

  h2 {
    grid-column: 1/-1;
  }

  button {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    color: #000;

    :hover:enabled {
      background: #666;
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
      name: '',
      longestStreak: 0,
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

    this.getPlayer = this.getPlayer.bind(this);
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
      this.setState({
        youLose: true,
        longestStreak: 0
      })

      this.setState(prev => ({
        guesses: prev.guesses+1,
        failList: prev.failList.concat(str),
        wholeWord:''
      }))
  }

  changeDifficultyLevel(level){
    this.setState(() => (level)?{difficulty: level}:'')
  }

  startTheGame(){
    this.setState(prev => ({
      intro: !prev.intro
    }))
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
    if (!this.state.youWon)
    this.setState(prev => ({
      youWon: true,
      longestStreak: prev.longestStreak + 1
    }))
  }

  getPlayer(name){
    this.setState({
      name,
      longestStreak: 0
    })
  }

  componentDidUpdate(){
    this.reset = false
  }

  componentDidMount(){
    if (typeof(Storage) !== "undefined"){
      (!localStorage.longestStreak) && (localStorage.longestStreak = 0)
    }
  }

  render() {
    return (
      <StyledApp className="App">
        <StyledHeader>
          <h1>hang{(this.state.youLose)&&<span>ed</span>} man</h1>
        </StyledHeader>

        {(this.state.intro)?
        <StyledIntroDiv>
          <h2>Welcome! Please enter your name and select difficulty level</h2>

          {(!this.state.name)? <WholeWord
              inputWholeWord={this.getPlayer}
              name='Enter'
              placeholder='Enter your name'
              />
            : <Button name="Not me" handleClick={() => this.setState({name:''})} />
          }

          <Level
             maxDifficulty={10}
             changeDifficultyLevel = {this.changeDifficultyLevel}
           />



         <Button disabled={(!this.state.name)?'disabled':''} name="start" handleClick={this.startTheGame} />
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
                    name='Check'
                    placeholder='I know the word!'
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
            youLost={this.state.youLose}
            />

          <Points name={this.state.name} longestStreak={this.state.longestStreak}/>



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
