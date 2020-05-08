import React from 'react'
import "./subHeading.css";

export const Sub = ({
    children,
    space
    
  }) => {
    
  
    var input = space + ""
    if(input === "undefined"){
      input = ""
    }
    input = "backBanner"+input;
    console.log(input)
    return (

     <div className = {input}>
        <div className = "awardsText">{children}</div>
      </div>
    );
  };