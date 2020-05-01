import React from 'react'
import "./body.css";

export const Body = ({
    children,
    
  }) => {
    
  

    return (
      <p className = "body_text">{children}</p>
    );
  };