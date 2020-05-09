import React from 'react'
import "./TournBanner.css";






function TournBanner(props) {
    const name = props.tournName
    const location = props.location
    const directions = props.directions
    const dates = props.dates
    const host = props.host



    return (        
      <div className = "bannerHolder">
        <div className = "tournamentName"><b>{name}</b></div>
            <div className = "bannerHolde">
                <p className = "tournamentDate">{dates}</p>
                <div className = "rightHand" onClick={()=> window.open(directions, "_blank")}><div className = "arena"><img className = "hub" alt = "map" src={`${process.env.PUBLIC_URL}/Icons/map.png`}></img>{location}</div></div>

                <div className = "tournamentPlace">@ {host}</div>


                  </div>
                  </div>
    )
}


export default TournBanner