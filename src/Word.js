import React from 'react';
import styled from 'styled-components';

const Underscore = styled.div`
  border-bottom: 5px solid;
  width: 50px;
`;

const wordStyle = {
  margin: 'auto',
  justifyItems: 'center',
  display: 'grid',
  gridAutoFlow: 'column',
  gridColumnsGap: '10px'
}

class Word extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      words: '',
      letters: ['c','d', 'c']
    }
  }

  componentDidMount() {
    const endPointUrl = "http://app.linkedin-reach.io/words";
    fetch(endPointUrl, {
      method: "GET"
    })
    .then(response => response.text())
    .then(text => {
      this.setState({words: text.split('\n')})
    })
  }

  componentDidUpdate(prevProps) {
    (this.props.number !== prevProps.number) &&
    this.setState(prev => ({
      letters: prev.words[this.props.number].split('')
    }))
  }

  render() {
console.log(this.state.letters);
    return (
      <div style={wordStyle}>
        {this.state.letters.map((letter, idx) =>
            <Underscore key={idx} className='letter'>
              {letter}
            </Underscore>
        )}
      </div>
    );
  }
}

export default Word;
