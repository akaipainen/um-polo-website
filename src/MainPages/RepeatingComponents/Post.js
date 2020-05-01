import React from 'react'
import "./Post.css";

export const Post = ({
    children,
    
  }) => {
    
  

    return (
      <p className = "body_text">{children}</p>
    );
  };