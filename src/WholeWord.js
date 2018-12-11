import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';

const InputDiv = styled.div`
 display: grid;
 grid-template-columns: 3fr 1fr;
 padding: 20px;
 border: 3px solid #666;
 border-radius: 5px;
 grid-gap: 10px;
 align-self: center;
 justify-self: center;


 input {
   border: 0;
 }
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
         placeholder={this.props.placeholder}
         value={this.state.query}
         onChange={e => this.handleInput(e.target.value)}
         />

         <Button disabled={!this.state.query} name={this.props.name} handleClick={this.inputWholeWord} />

      </InputDiv>
    );
  }
}

export default WholeWord;
