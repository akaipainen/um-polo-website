import React from 'react'
import "./TournBanner.css";






function TournBanner(props) {
    const name = props.tournName
    const location = props.location
    const directions = props.directions

    return (        
            <div className = "bannerHolde">
                <p className = "tournamentName">{name}</p>

            <div className = "rightHand" onClick={()=> window.open(directions, "_blank")}>
                       <img className = "hub"  src={`${process.env.PUBLIC_URL}/map.png`}></img>
        <div className = "tournArena">{location}</div>

            </div>
            <div className = "breakBottom"></div> 

                  </div>

    )
}


export default TournBanner