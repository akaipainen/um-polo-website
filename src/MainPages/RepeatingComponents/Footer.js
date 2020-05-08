import React from 'react'
import "./Footer.css";


function Footer() {

    return (


        <footer className="footer">
            <div className = "center">
            
            <img onClick={()=> window.open("https://twitter.com/michiganmanpolo", "_blank")} src={`${process.env.PUBLIC_URL}/Icons/twitterLogo.svg`} alt = "twitter logo" className="photo"></img>
            <img onClick={()=> window.open("https://www.facebook.com/MichiganMensWaterPolo", "_blank")}src={`${process.env.PUBLIC_URL}/Icons/facebookLogo.svg`} className="photo" alt = "facebook logo"></img>
           <img onClick={()=> window.open("https://www.instagram.com/umichmenswaterpolo/", "_blank")}src={`${process.env.PUBLIC_URL}/Icons/instagramLogo.svg`} alt = "instagram logo" className="photo"></img>
            <img onClick={()=> window.open("https://www.youtube.com", "_blank")} src={`${process.env.PUBLIC_URL}/Icons/youtubeLogo.svg`} alt = "youtube logo" className="photo"></img>

       
                
            </div>
            
           <div className= "legal">
           Copyright © 2020 University of Michigan Men’s Water Polo™. All rights reserved.<br></br>
           Developed by <b>Matthew Ferrari</b>, <b>Alex Kaipainen</b>, and <b>Sid Murthy</b> in Cupertino, CA.
            </div>

        </footer>



    )
}


export default Footer
