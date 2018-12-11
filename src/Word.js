import React from 'react';
import styled from 'styled-components';
import Underscore from './Underscore.js';

const StyledWordDiv = styled.div`
  margin: auto;
  grid-column: 1/-1;
  grid-row: 2/3;
  justify-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
`;

class Word extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      words: [],
      selectedWord: '',
      counterOfMatches: 0
    }

    this.defaultState = {
      selectedWord: '',
      counterOfMatches: 0
    }

    this.fetchWordFromDictionaryAPI = this.fetchWordFromDictionaryAPI.bind(this);
    this.IsTheLetterHere = this.IsTheLetterHere.bind(this);
    this.SelectWord = this.SelectWord.bind(this);
    this.incrementCounterOnMatch = this.incrementCounterOnMatch.bind(this);
  }
// this function is called everytime we need to generate a new word
  SelectWord() {
    this.props.wordLoaded(true);
    //generates a random index to pull a word from the words array
    const randomNumber = Math.floor(Math.random() * (this.state.words.length + 1));
    this.setState(prev => ({
      selectedWord: prev.words[randomNumber],
    }))
  }


//returns an array of indexes where the character is found
  IsTheLetterHere(letter, word) {
    let indices = [];
    let idx = word.indexOf(letter);

    while (idx !== -1){
      indices.push(idx);
      idx = word.indexOf(letter, idx + 1);
    }

    return indices
  }

  incrementCounterOnMatch() {
    this.setState(prev => ({
        counterOfMatches: ++prev.counterOfMatches
      })
    )
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.reset && nextProps !== this.props)
      this.setState(this.defaultState, this.SelectWord);
    else {
      if(nextState.counterOfMatches === this.state.selectedWord.length && this.state.selectedWord.length) {
        this.props.youWon();
      }
    }
  }

  fetchWordFromDictionaryAPI(){
    const URL = "http://app.linkedin-reach.io/words";
    const endPointUrl = (this.props.difficulty)?URL.concat(`?difficulty=${this.props.difficulty}`):URL;

    fetch(endPointUrl, {
      method: "GET"
    })
    .then(response => response.text())
    .then(text => {
      this.setState({words: text.split('\n')}, this.SelectWord)
    })
  }

  componentDidUpdate(prevProps){
    (this.props.difficulty !== prevProps.difficulty) &&
    this.fetchWordFromDictionaryAPI()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.keyClicked !== nextProps.keyClicked
      && nextProps.keyClicked
      && !this.IsTheLetterHere(nextProps.keyClicked, nextState.selectedWord).length
    ) {
        this.props.incrementGuesses()
        return false;
      }

      console.log('fail')
      console.log(this.props.wholeWord);
      console.log( this.state.selectedWord);

    if (nextProps.wholeWord
        && nextProps.wholeWord !== this.state.selectedWord){
          this.props.incrementGuesses('FW')
          return false;
        }
    return true;
  }

  componentDidMount() {
    this.fetchWordFromDictionaryAPI()
  }

  render() {
    console.log(this.state)
    const keyClicked = this.props.keyClicked;
    const ocurrence=this.IsTheLetterHere((keyClicked?keyClicked:' '), this.state.selectedWord);
console.log(this.state.selectedWord)
    return (this.state.selectedWord)?
      (
        <StyledWordDiv>
          {this.state.selectedWord.split('').map((letter, idx) => {
              return <Underscore
                        key={idx}
                        letter={letter}
                        show={~ocurrence.indexOf(idx) || this.props.wholeWord === this.state.selectedWord}
                        showOnLoosing={this.props.youLost}
                        incrementCounterOnMatch={this.incrementCounterOnMatch}
                        reset={this.props.reset}
                     />
            }
          )}
        </StyledWordDiv>
    ):
    (<StyledWordDiv>
      <h3>Searching the Dictionary...</h3>
    </StyledWordDiv>
  );
  }
}

export default Word;
