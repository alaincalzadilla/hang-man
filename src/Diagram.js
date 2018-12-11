import React from 'react';
import styled from 'styled-components';


const StyledSVG = styled.svg`
  height: 300px;
  width: 200px;
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
           <React.Fragment>
             <animate
                attributeName="y2" from="220" to="180"
                dur="5s"
                fill="freeze"
              />
              <animate
                   attributeName="y1" from="190" to="150"
                   dur="5s"
                   fill="freeze"
              />
           </React.Fragment>
            }
       </line>
       <line x1="150" x2="130" y1="220" y2="250" stroke="orange" strokeWidth="5">
         {(props.guesses > 5) &&

           <React.Fragment>
             <animate
                attributeName="y2" from="250" to="210"
                dur="5s"
                fill="freeze"
              />
              <animate
                   attributeName="y1" from="220" to="180"
                   dur="5s"
                   fill="freeze"
              />
           </React.Fragment>

            }
       </line>
       <line x1="150" x2="170" y1="220" y2="250" stroke="orange" strokeWidth="5">
         {(props.guesses > 5) &&

           <React.Fragment>
             <animate
                attributeName="y2" from="250" to="210"
                dur="5s"
                fill="freeze"
              />
              <animate
                   attributeName="y1" from="220" to="180"
                   dur="5s"
                   fill="freeze"
              />
           </React.Fragment>

            }
       </line>
       <line x1="130" x2="170" y1="200" y2="200" stroke="orange" strokeWidth="5">
           {(props.guesses > 5) &&
          <React.Fragment>
            <animate
               attributeName="y2" from="200" to="160"
               dur="5s"
               fill="freeze"
             />
             <animate
                  attributeName="y1" from="200" to="160"
                  dur="5s"
                  fill="freeze"
             />
          </React.Fragment>
              }
       </line>
       <circle cx="150" cy="175" r="15" stroke="orange" fill="transparent" strokeWidth="5">
         {(props.guesses > 5) &&

           <React.Fragment>
             <animate
                attributeName="cy" from="175" to="140"
                dur="5s"
                fill="freeze"
              />
              <animate
                   attributeName="cx" from="150" to="135"
                   dur="5s"
                   fill="freeze"
              />
           </React.Fragment>

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
