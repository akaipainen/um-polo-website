import React from 'react'
import "./Game.css";






function Game(props) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const id = props.id
    const opponent = props.opponent
    const score = props.score
    const result = props.result
    const viewingLink = props.viewingLink
    const time = new Date(props.time)
    var month = (time.getMonth() + 1).toString()
    var dayN = time.getDate().toString()
    if (dayN.length === 1) {
        dayN = "0" + dayN;
    }
    if (month.length === 1) {
        month = "0" + month;
    }

    const dayL = days[time.getDay()].substring(0, 3);

    const logo = props.logo
    var hour = time.getHours().toString()
    var min = time.getMinutes().toString()
    if (min.length === 1) {
        min = "0" + min;
    }
    if (hour.length === 1) {
        hour = "0" + hour;
    }
    const current = new Date()
    var dif = current.getTime() - time.getTime()
    dif = dif / 60000
    var playback
    if (dif > 180){
        playback = "Watch Here"
    }
    else if(dif > -30){
        playback = "Watch Live Here"

    }
    else{
        playback = ""
    }
    return (
        <div className={"gameHolder" + id % 2}>
            <img alt = "opponent" className="rivalLogo" src={`${process.env.PUBLIC_URL}/${logo}`}></img>
            <div></div>

            <div className="toTheRight">

                <div className = "internalText">{month}.{dayN}{" "}({dayL}) / {hour}:{min} ET <br></br> <b>{"vs. " + opponent.toUpperCase()}</b></div>
                <div className="goingRight" ><b>{score}</b></div>
                <img alt = "gameResultLogo"className="goingRight" src={`${process.env.PUBLIC_URL}/${result}.svg`}></img>

            </div>
            {playback === "Watch Here" && <div onClick={()=> window.open(viewingLink, "_blank")} className = "playbackRecording">{playback}<img alt = "stream" className = "youtubeStream" src = {`${process.env.PUBLIC_URL}/youtubelogo.png`}></img> </div>}
            {playback === "Watch Live Here" && <div onClick={()=> window.open(viewingLink, "_blank")} className = "playbackLive">{playback}<img alt = "stream" className = "youtubeStream" src = {`${process.env.PUBLIC_URL}/youtubelogo.png`}></img> </div>}

            <div className="breakBottom"></div>
            
        </div>

    )
}


export default Game