import React from 'react'
import "./yellowBanner.css";




export const YellowBanner = ({
    children,
    
  }) => {
    
  

    return (
      <div className = "yellowBar"  >
        <p className = "internalText">{children}</p>
      </div>
    );
  };
  



