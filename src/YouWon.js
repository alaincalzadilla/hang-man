import React from 'react';
import styled from 'styled-components';

const Stylediv = styled.div`
  display: grid;
`;

export default function YouWon(props) {
  return (
    <Stylediv>
      <h2>Well done!</h2>
      {props.children}
    </Stylediv>
  );
}
