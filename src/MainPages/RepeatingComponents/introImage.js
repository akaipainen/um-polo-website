import React from 'react'
import "./introImage.css";






function introImage(props) {
    const imagePath = props.imagePath

    return (        
            <div className = "imageContainer">

            <img className = "imageDisplay" src = {imagePath}></img>

                  </div>

    )
}


export default introImage