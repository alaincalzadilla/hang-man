import React from 'react';

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
      ), this.props.changeDifficultyLevel(this.state.quantity))
  }

  increaseQuantity() {
      this.setState(prev => (
        (prev.quantity < this.props.maxDifficulty)?{quantity: prev.quantity + 1}:{quantity: prev.quantity}
      ), this.props.changeDifficultyLevel(this.state.quantity))
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.quantity !== nextState.quantity)
  }

  render() {
    return (
      <div>
        <p>Difficulty</p>
        <button onClick={this.decreaseQuantity}> - </button>
        <span>{(!this.state.quantity)?'random':this.state.quantity}</span>
        <button onClick={this.increaseQuantity}> + </button>
      </div>
    );
  }
}

export default Level
