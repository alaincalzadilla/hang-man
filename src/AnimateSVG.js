import React from 'react';

export default function AnimateSVG(props){
  return (
    <React.Fragment>
      <animate
         attributeName={props.attributeName1} from={props.from1} to={props.to1}
         dur="5s"
         fill="freeze"
       />
       <animate
            attributeName={props.attributeName2} from={props.from2} to={props.to2}
            dur="5s"
            fill="freeze"
       />
    </React.Fragment>
  )
}
