import React from 'react'
import "./Post.css";

export const Post = ({
    children,
    optionalDate,
    optionalTitle,
    optionalIndex,
    bigFont
  }) => {
    
  

    return (
     <div>

     <div className = {"index" + optionalIndex % 2 }>
        

          <div> 
          {optionalTitle !== null  && optionalTitle !== ""&&
        <div className = "title"><b>{optionalTitle}</b> </div>
      }
        {optionalDate !== null &&optionalDate !== "" &&
        <div className = "date"> <b>{optionalDate}</b></div>
      }

      </div>
      <div className = "breakBottom"></div> 


{ bigFont === "yesPlease" &&  <p className = "bigbody_text">{children}</p>
}   
{ bigFont !== "yesPlease" &&  <p className = "body_text">{children}</p>
}  
   </div>
      </div>
    );
  };