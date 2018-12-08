import React from 'react';
import styled from 'styled-components';

const StyledUnderscore = styled.div`
  border-bottom: 5px solid;
  width: 70px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-transform: uppercase;
    font-size: 40px;
  }
`;

class Underscore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLetter: false
    }
  }


// makes sure once a letter is discovered it remains uncovered
  componentWillUpdate(nextProps, nextState) {

    if (this.props.show !== nextProps.show && nextProps.show) {
      console.log('will')

      this.props.incrementCounterOnMatch();
      this.setState({showLetter: true})
    }

    if(nextProps.reset)
      this.setState({show: false})
  }



  render() {
    return (
      <StyledUnderscore>
        <span>{(this.state.showLetter)?this.props.letter:''}</span>
      </StyledUnderscore>
    );
  }
}

export default Underscore;
