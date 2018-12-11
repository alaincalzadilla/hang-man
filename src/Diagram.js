import React from 'react';
import styled from 'styled-components';
import AnimateSVG from './AnimateSVG.js';


const StyledSVG = styled.svg`
  height: 300px;
  width: 200px;
  grid-row: -3/-1;
  grid-column: -2/-1;
`;

export default function Diagram(props) {

  return(
    <StyledSVG
       version="1.1"
       baseProfile="full"
       xmlns="http://www.w3.org/2000/svg">
       {[...Array(5)].map((slot,idx) =>
         <line key={idx} x1={40*idx} x2={40*(idx+1)} y1="250" y2="270" stroke="black" strokeWidth="5"/>
       )}
       <line x1="0" x2="200" y1="250" y2="250" stroke="black" strokeWidth="5"/>
       <line x1="150" x2="150" y1="190" y2="220" stroke="orange" strokeWidth="5">
         {(props.guesses > 5) &&

           <AnimateSVG
             attributeName1="y2"
             from1="220"
             to1="180"
             attributeName2="y1"
             from2="190"
             to2="150"
           />
  
            }
       </line>
       <line x1="150" x2="130" y1="220" y2="250" stroke="orange" strokeWidth="5">
         {(props.guesses > 5) &&

           <AnimateSVG
             attributeName1="y2"
             from1="250"
             to1="210"
             attributeName2="y1"
             from2="220"
             to2="180"
           />

            }
       </line>
       <line x1="150" x2="170" y1="220" y2="250" stroke="orange" strokeWidth="5">
         {(props.guesses > 5) &&

           <AnimateSVG
             attributeName1="y2"
             from1="250"
             to1="210"
             attributeName2="y1"
             from2="220"
             to2="180"
           />
            }
       </line>
       <line x1="130" x2="170" y1="200" y2="200" stroke="orange" strokeWidth="5">
           {(props.guesses > 5) &&

             <AnimateSVG
               attributeName1="y2"
               from1="200"
               to1="160"
               attributeName2="y1"
               from2="200"
               to2="160"
             />

              }
       </line>
       <circle cx="150" cy="175" r="15" stroke="orange" fill="transparent" strokeWidth="5">
         {(props.guesses > 5) &&

           <AnimateSVG
             attributeName1="cy"
             from1="175"
             to1="140"
             attributeName2="cx"
             from2="150"
             to2="135"
           />
            }
       </circle>

       <path className={`basePath ${(props.guesses >= 1) && "hanger"}`} d="M10 250 v-20 h80 v20" fill="transparent" stroke="black" strokeWidth="5"/>
       <line className={`hangerPath ${(props.guesses >= 2) && "hanger"}`} x1="50" x2="50" y1="230" y2="60" stroke="black" strokeWidth="5"/>
       <line className={`hangerPath ${(props.guesses >= 3) && "hanger"}`} x1="50" x2="140" y1="60" y2="60" stroke="black" strokeWidth="5"/>
       <line className={`hangerPath ${(props.guesses >= 4) && "hanger"}`} x1="140" x2="150" y1="60" y2="80" stroke="black" strokeWidth="5"/>

       <line className={`hangerPath ${(props.guesses >= 5) && "hanger"}`} x1="150" x2="150" y1="80" y2="160" stroke="black" strokeWidth="2">
           {(props.guesses > 5) && <animate
                attributeName="y2" from="160" to="150"
                dur="5s"
                fill="freeze"
                />
              }
       </line>

       {(props.guesses > 5) && <circle cx="150" cy="152" r="4" stroke="black" strokeWidth="4" fill="transparent" />}



    </StyledSVG>
  );
}
