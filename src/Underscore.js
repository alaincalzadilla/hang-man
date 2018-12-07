import React from 'react';
import styled from 'styled-components';

const StyledUnderscore = styled.div`
  border-bottom: 5px solid;
  width: 50px;
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
    console.log(nextProps)
    console.log(this.props)

    console.log(nextProps.show)
    if (this.props !== nextProps && nextProps.show) {
      console.log('will')

      this.props.incrementCounterOnMatch();
      this.setState({showLetter: true})
    }
  }



  render() {
    return (
      <StyledUnderscore>
        {(this.state.showLetter)?this.props.letter:''}
      </StyledUnderscore>
    );
  }
}

export default Underscore;
