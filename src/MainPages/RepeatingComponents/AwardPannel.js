import React from 'react'
import "./AwardPannel.css";

export const AwardPannel = ({
    children,
    title,
    index
    
  }) => {
    
  

    return (

     <div className = {"backgroundA"+ index %2 }>
        <div className = "awardTitle">{title}</div>
        <div className = "peopleHolder">
          <div className = "awardPeople">{children}</div>
          </div>
      </div>
    );
  };