import React from 'react';
import styled from 'styled-components';

const StyledUnderscore = styled.div`
  border-bottom: 5px solid;
  width: 70px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  color: ${props => props.show ? 'black' : ((props.showLetterOnLoosing) && 'rgba(228, 16, 16, 0.47)')};
`;


class Underscore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLetter: false,
      showLetterOnLoosing: false
    }
  }

// makes sure once a letter is discovered it remains uncovered
  componentWillUpdate(nextProps, nextState) {

    if (this.props.show !== nextProps.show && nextProps.show) {
      this.props.incrementCounterOnMatch();
      this.setState({showLetter: true})
    }

    if(nextProps.reset)
      this.setState({show: false})
// this is to showing the remaining letters when the
// player loses the game
    if(this.props.showOnLoosing !== nextProps.showOnLoosing && nextProps.showOnLoosing){
      this.setState({showLetterOnLoosing:true})
    }
  }

  render() {
    return (
      <StyledUnderscore>
        <StyledSpan show={this.state.showLetter} showLetterOnLoosing={this.state.showLetterOnLoosing}>{(this.state.showLetter || this.state.showLetterOnLoosing)?this.props.letter:''}</StyledSpan>
      </StyledUnderscore>
    );
  }
}

export default Underscore;
