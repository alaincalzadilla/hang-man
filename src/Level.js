import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px 1fr;
  grid-gap: 20px;
  justify-content: center;
  border: 3px solid #666;
  border-radius: 5px;
  padding: 20px;
  justify-items: center;
  align-items: center;

  p {
    grid-column: 1/-1;
    margin: 0;
  }

  button {
    border: 1px solid #000;
    border-radius: 5px;

    :hover {
      background: black;
      color: white;
    }

    [disabled] {
      background: white !important;
      color: white !important;
    }
  }
`;

class Level extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    }

    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);

  }

  decreaseQuantity() {
      this.setState(prev => (
        (prev.quantity > 0)?{quantity: prev.quantity - 1}:{quantity: prev.quantity}
      ), () => this.props.changeDifficultyLevel(this.state.quantity))
  }

  increaseQuantity() {
      this.setState(prev => (
        (prev.quantity < this.props.maxDifficulty)?{quantity: prev.quantity + 1}:{quantity: prev.quantity}
      ), () => this.props.changeDifficultyLevel(this.state.quantity))
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.quantity !== nextState.quantity)
  }

  render() {
    return (
      <StyledDiv>
        <p>Difficulty</p>
        <button onClick={this.decreaseQuantity}> - </button>
        <span>{(!this.state.quantity)?'random':this.state.quantity}</span>
        <button onClick={this.increaseQuantity}> + </button>
      </StyledDiv>
    );
  }
}

export default Level
