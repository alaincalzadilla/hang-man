import React from 'react';
import styled from 'styled-components';

const StyledUnderscore = styled.div`
  border-bottom: 5px solid;
  width: 50px;
`;

const WordComponent = styled.div`
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
      words: []
    }

    this.IsTheLetterHere = this.IsTheLetterHere.bind(this);
  }

  IsTheLetterHere(letter, word) {
    let indices = [];
    let idx = word.indexOf(letter);

    while (idx !== -1){
      indices.push(idx);
      idx = word.indexOf(letter, idx + 1);
    }

    return indices
  }

  componentDidMount() {
    console.log('mounted')
    const endPointUrl = "http://app.linkedin-reach.io/words";
    fetch(endPointUrl, {
      method: "GET"
    })
    .then(response => response.text())
    .then(text => {
      this.setState({words: text.split('\n')})
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should')
  //    if (this.state !== nextState) return true;
  //
  //   return this.IsTheLetterHere('b', this.state.words[this.props.number]).length
  // }


  render() {
    const letters = (this.state.words.length)?this.state.words[this.props.number]:'';
    console.log(this.props.keyClicked + '  ' + letters)
    const ocurrence=this.IsTheLetterHere(this.props.keyClicked, letters);
    let renderedLetter;
    return (
      <WordComponent>
        {letters.split('').map((letter, idx) => {
           renderedLetter = (~ocurrence.indexOf(idx))?letter:'';
           console.log(letter)
           console.log(renderedLetter)
           console.log(ocurrence)


            return <StyledUnderscore key={idx}>
                      {renderedLetter}
                  </StyledUnderscore>
          }
        )}
      </WordComponent>
    );
  }
}

export default Word;
