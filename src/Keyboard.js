import React from 'react';
import Key from './Key.js';

export default function Keyboard(props){

  const alphabet = [...Array(26)].map((e,idx) => String.fromCharCode(idx+97));

  return(
    <div>
      {alphabet.map(letter => <Key
                              key={letter}
                              letter={letter}
                              keyClicked={props.keyClicked}
                              >
                                {letter}
                              </Key>)}
    </div>
  );
}
