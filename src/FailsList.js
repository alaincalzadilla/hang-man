import React from 'react';
import styled from 'styled-components';

const StyledFail = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  align-content: center;
  justify-content: center;
  margin: auto;

  h2{
    text-transform: uppercase;
    grid-column: 1/-1;
  }
`;


const StyledSlot = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    font-size: 30px;
    margin: 0;
  }

`;

export default function FailsList(props) {
  const maxFails = [...Array(6)];


  return (
    <StyledFail>
      <h2> fails</h2>
      {maxFails.map((slot, idx) =>
        <StyledSlot key={idx}>
          <p>{(props.failList[idx]) && props.failList[idx]}</p>
        </StyledSlot>
      )}
    </StyledFail>
  );
}
