import React from 'react'
import "./EBoard.css";

function EBoard(props) {
    const id = props.id
    const hometown = props.hometown
    const headshotFile=props.headshotFile
    const name = props.name
    const folder = props.folder

    return (
            

            
        <div className = {"class" + id % 2 }>
                  <div className = "breakBottom"></div> 

        
        

       <div className = "nameHolder">
        <div className = "name"> {name}</div>
      
        <div className = "hometown"> {hometown}</div>
        <div className = "breakBottom"></div> 


        </div>
      
        {  headshotFile !=="undefined"&& headshotFile !== null && headshotFile !== "" && <img alt = "headshot" className = "headshot" src = { `${process.env.PUBLIC_URL}/${folder}/${headshotFile}`}></img>
        }
      
      </div>

    )
}


export default EBoard
    


