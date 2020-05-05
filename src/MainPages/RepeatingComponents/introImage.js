import React from 'react'
import "./introImage.css";






function introImage(props) {
    const imagePath = props.imagePath
    console.log(imagePath)
    return (  
        <div>  
           {imagePath !== "" &&   imagePath!== "undefined"&& imagePath!== null&&  <div className = "imageContainer">

         <img className = "imageDisplay" alt = "welcomeImage"src = {imagePath}></img>

                  </div>}
                  </div>    
    )
}


export default introImage