import React from 'react'
import "./Post.css";

export const Post = ({
    children,
    optionalDate,
    optionalTitle,
    optionalIndex
    
  }) => {
    
  

    return (
     <div>

     <div className = {"index" + optionalIndex % 2 }>
        

          <div> 
          {optionalTitle != null > 0 &&
        <div className = "title"> {optionalTitle}</div>
      }
        {optionalDate != null &&
        <div className = "date"> {optionalDate}</div>
      }

      </div>
      <div className = "breakBottom"></div> 


      <p className = "body_text">{children}</p>
      </div>
      </div>
    );
  };