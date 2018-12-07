import React from 'react';
import styled from 'styled-components';
import Underscore from './Underscore.js';

const StyledWordDiv = styled.div`
  margin: auto;
  justify-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-columns-gap: 10px;
`;

class Word extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      words: [],
      selectedWord: ''
    }

    this.IsTheLetterHere = this.IsTheLetterHere.bind(this);
    this.SelectWord = this.SelectWord.bind(this);
  }
// this function is called everytime we need to generate a new word
  SelectWord() {
    //generates a random index to pull a word from the words array
    const randomNumber = Math.floor(Math.random() * (this.state.words.length + 1));
    this.setState(prev => ({
      selectedWord: prev.words[randomNumber]
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

// closure to increment counter at every match, when counter reach
// length of selected word means the word has been uncovered
  incrementCounterOnMatch = (() => {
    let counter = 0;
    return () => {
      if (counter + 1 < this.state.selectedWord.length){
        console.log('counter  ' + counter)
        counter++;
      } else this.props.youWon()
    }})()

  componentDidMount() {
    const endPointUrl = "http://app.linkedin-reach.io/words?difficulty=1";
    fetch(endPointUrl, {
      method: "GET"
    })
    .then(response => response.text())
    .then(text => {
      this.setState({words: text.split('\n')}, this.SelectWord)
    })
  }

  render() {
    const keyClicked = this.props.keyClicked;
    const ocurrence=this.IsTheLetterHere((keyClicked?keyClicked:' '), this.state.selectedWord);
console.log(this.state.selectedWord)
    return (
        <StyledWordDiv>
          {this.state.selectedWord.split('').map((letter, idx) => {
              return <Underscore
                        key={idx}
                        letter={letter}
                        show={~ocurrence.indexOf(idx)}
                        incrementCounterOnMatch={this.incrementCounterOnMatch}
                     />
            }
          )}
        </StyledWordDiv>
    );
  }
}

export default Word;
