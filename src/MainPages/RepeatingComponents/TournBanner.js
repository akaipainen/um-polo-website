import React from 'react'
import "./TournBanner.css";






function TournBanner(props) {
    const name = props.tournName
    const location = props.location
    const directions = props.directions
    const dates = props.dates


    return (        
            <div className = "bannerHolde">
                <p className = "tournamentDate">{dates}</p>
                <b><p className = "tournamentName">{name}</p></b>


            <div className = "rightHand" onClick={()=> window.open(directions, "_blank")}>
                       <img className = "hub" alt = "map" src={`${process.env.PUBLIC_URL}/map.png`}></img>
        <div className = "tournArena">{location}</div>

            </div>
                  </div>

    )
}


export default TournBanner