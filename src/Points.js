import React from 'react';
import styled from 'styled-components';

const PointsDiv = styled.div`
  display: grid;
`;



export default function Points(props){

    if (props.longestStreak>localStorage.longestStreak){
      localStorage.leader = props.name;
      localStorage.longestStreak = props.longestStreak;
    }

    const initial = localStorage.leader.charAt(0);

  return(
    <PointsDiv>
      <h4>Longest Streak</h4>
      <p title={localStorage.leader}>{initial}: <span>{localStorage.longestStreak}</span></p>
    </PointsDiv>

  );
}
