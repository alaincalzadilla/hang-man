import React from 'react';
import Key from './Key.js';
import styled from 'styled-components';

const StyledKeyboard = styled.div`
  grid-row: 3/4;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  grid-column: 1/-1;
  justify-content: center;
  align-self: center;
  grid-gap: 10px;
  `;

export default function Keyboard(props){

  const alphabet = [...Array(26)].map((e,idx) => String.fromCharCode(idx+97));

  return(
    <StyledKeyboard>
      {alphabet.map(letter => <Key
                              key={letter}
                              letter={letter}
                              keyClicked={props.keyClicked}
                              wordLoaded={props.wordLoaded}
                              >
                                {letter}
                              </Key>)}
    </StyledKeyboard>
  );
}
