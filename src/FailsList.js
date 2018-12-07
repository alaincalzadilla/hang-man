import React from 'react';
import styled from 'styled-components';

const StyledFail = styled.div`

`;

export default function FailsList(props) {
  return (
    <StyledFail>
      {props.failList.map((letter, idx) =>
        <li key={idx}>{letter}</li>
      )}
    </StyledFail>
  );
}
