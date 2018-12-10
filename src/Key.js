import React from 'react';
import styled from 'styled-components';

const Keybutton = styled.button`
  width: 60px;
  height: 60px;
  border: 3px solid #000;
  border-radius: 8px;
  box-shadow: 0 6px #666;
  font-size: 20px;
  font-weight: bold;

  :hover {
    background-color: #fff;
  }

  :active {
	  box-shadow: 0 5px #666;
	  transform: translateY(4px);
	}
`;

class Key extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      used: false
    }
  }

  handleKey(keyPressed) {
    this.setState({used: true});
    this.props.keyClicked(keyPressed);
  }

  render() {
    return (
      <Keybutton disabled={this.state.used || !this.props.wordLoaded} onClick={() => {this.handleKey(this.props.letter)}}>
        {this.props.letter}
      </Keybutton>
    );
  }
}

export default Key;
