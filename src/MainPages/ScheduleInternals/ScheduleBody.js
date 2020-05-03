import React from 'react'
import TournBanner from '../RepeatingComponents/TournBanner'
import Game from '../RepeatingComponents/Game'
import Schedule from '../../Data/schedule.json'
import { Post } from '../RepeatingComponents/Post';
import Updates from '../../Data/updates.json'


function ScheduleBody() {

    return (



        <div>
            <TournBanner
                tournName="Ohio State Invitational"
                location="McCorkle Aquatic Pavilion"
                directions="https://www.google.com/maps/dir//Donald+B.+Canham+Natatorium,+500+E+Hoover+Ave,+Ann+Arbor,+MI+48104/@42.2693064,-83.7460302,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883cae36eff83e1f:0xc63b105740253336!2m2!1d-83.7438415!2d42.2693025!3e0"
            ></TournBanner>
            <Game
                id={1}
                opponent="Mighigan State"
                score="10-5"
                result="win"
                viewingLink="https://www.youtube.com"
                time="2020-04-20 15:00"
                logo="msu.png"
            ></Game>
            <Game
                id={2}
                opponent="Ohio State"
                score="5-5"
                result="tie"
                viewingLink="https://www.youtube.com"
                time="2021-04-20 15:00"
                logo="msu.png"
            ></Game>
            <Game
                id={3}
                opponent="Utah State"
                score="0-5"
                result="loss"
                viewingLink="https://www.youtube.com"
                time="2020-05-03 1:50"
                logo="msu.png"
            ></Game>
        </div >

    )
}


export default ScheduleBody