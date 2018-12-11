import React from 'react';
import styled from 'styled-components';

const PointsDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  right: 20px;
  text-transform: capitalize;
  margin-left: auto;
`;



export default function Points(props){

    if (props.longestStreak>localStorage.longestStreak){
      localStorage.leader = props.name;
      localStorage.longestStreak = props.longestStreak;
    }


  return(
    <PointsDiv>
      <p>{`Leader:  ${localStorage.leader}`}</p>
      <p>{`Longest Streak:  ${localStorage.longestStreak}`}</p>
    </PointsDiv>

  );
}
