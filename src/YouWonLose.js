import React from 'react';
import styled from 'styled-components';

const Stylediv = styled.div`
  display: grid;
  grid-row: 3/4;
  grid-column: 1/-1;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: auto;
  justify-items: center;

  button {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    color: #000;

    :hover:enabled {
      background: #666;
      color: white;
    }

  }

  h2 {
    grid-column: 1/-1;
  }
`;

export default function YouWonLose(props) {
  return (
    <Stylediv>
      <h2>{props.text}</h2>
      {props.children}
    </Stylediv>
  );
}
