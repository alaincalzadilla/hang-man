import React from 'react';
import styled from 'styled-components';

const Keybutton = styled.button`
  width: 30px;
  height: 30px;
  border: 3px solid;
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
      <Keybutton disabled={this.state.used} onClick={() => {this.handleKey(this.props.letter)}}>
        {this.props.letter}
      </Keybutton>
    );
  }
}

export default Key;
