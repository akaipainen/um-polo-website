import React from 'react'
import "./Footer.css";


function Footer() {

    return (


        <footer className="footer">
            <div className = "center">
            
            <td onClick={()=> window.open("https://twitter.com/michiganmanpolo", "_blank")}><img src={`${process.env.PUBLIC_URL}/twitterLogo.png`} alt = "twitter logo" className="photo"></img></td>
            <td onClick={()=> window.open("https://www.facebook.com/MichiganMensWaterPolo", "_blank")}><img src={`${process.env.PUBLIC_URL}/facebookLogo.png`} className="photo" alt = "facebook logo"></img></td>
            <td onClick={()=> window.open("https://www.instagram.com/umichmenswaterpolo/", "_blank")}><img src={`${process.env.PUBLIC_URL}/instaLogo.png`} alt = "instagram logo" className="photo"></img></td>
            <td onClick={()=> window.open("https://www.youtube.com", "_blank")}><img src={`${process.env.PUBLIC_URL}/youtubeLogo.png`} alt = "youtube logo" className="photo"></img></td>

       
                
            </div>
            
           <p className= "legal">
           Copyright © 2020 University of Michigan Men’s Water Polo™. All rights reserved.<br></br>
           Developed by Matthew Ferrari, Alex Kaipainen, and Sid Murthy in Cupertino, CA.
            </p>

        </footer>



    )
}


export default Footer
