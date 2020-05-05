import React from 'react'
import "./Player.css";

function Player(props) {
    const id = props.id
    const isCaptian=props.isCaptian
    const hometown = props.hometown
    const yearAndProgram=props.yearAndProgram
    const headshotFile=props.headshotFile
    const name = props.name
    console.log(headshotFile)
    return (
            

            
        <div className = {"class" + id % 2 }>
        
        {  headshotFile !=="undefined"&& headshotFile !== null && headshotFile !== "" && <img alt = "headshot" className = "headshot" src = { `${process.env.PUBLIC_URL}/${headshotFile}`}></img>
        }

       <div className = "nameHolder">
        <div className = "name"> {name}</div>
      
        {isCaptian && <img className = "captian" alt = "captian"src = { `${process.env.PUBLIC_URL}/captain.svg`}></img>}
        <div className = "hometown"> {hometown}</div>
        <div className = "breakBottom"></div> 

        <div className = "major">{yearAndProgram}</div>

        </div>
      
      
      
      </div>

    )
}


export default Player
    


