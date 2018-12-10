import React from 'react';
import styled from 'styled-components';

const InputDiv = styled.div`

`;

class WholeWord extends React.Component{
  constructor (props){
    super(props);

    this.state = {
      query: ''
    }

    this.inputWholeWord = this.inputWholeWord.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(query){
    this.setState({query})
  }

  inputWholeWord(){
    this.props.inputWholeWord(this.state.query)
    this.setState({query:''});
  }

  render(){
    return (
      <InputDiv>
        <input
         placeholder="I know the word"
         value={this.state.query}
         onChange={e => this.handleInput(e.target.value)}
         />

         <button onClick={this.inputWholeWord}>
          Check
        </button>
      </InputDiv>
    );
  }
}

export default WholeWord;