import React from 'react'
import "./Player.css";

function Player(props) {
    const id = props.id
    const isCaptian=props.isCaptian
    const hometown = props.hometown
    const yearAndProgram=props.yearAndProgram
    const headshotFile=props.headshotFile
    const name = props.name
    return (
            

            
        <div className = {"class" + id % 2 }>
        
        {headshotFile != "" &&  headshotFile != null && <img className = "headshot" src = { `${process.env.PUBLIC_URL}/${headshotFile}`}></img>}
           
       <div className = "nameHolder">
        <div className = "name"> {name}</div>
      
        {isCaptian && <img className = "captian" src = { `${process.env.PUBLIC_URL}/captain.svg`}></img>}
        <div className = "hometown"> {hometown}</div>
        <div className = "breakBottom"></div> 

        <div className = "major">{yearAndProgram}</div>

        </div>
      
      
      
      </div>

    )
}


export default Player
    


