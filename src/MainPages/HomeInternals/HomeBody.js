import React from 'react'
import Updates from '../../Data/updates.json'
import "./HomeBody.css"
import ImageIntro from '../RepeatingComponents/introImage'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';



function HomeBody() {

    return (        
            <div>



        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/mavShooting.png`}></ImageIntro>
        <a className = "streamingAlert"href = "https://youtube.com" target="_blank">Matches now streamed and archived on YouTube!</a>
            <img src = "champBanner.svg" className = "champ"></img>
         <YellowBanner>Updates</YellowBanner>
         {Updates.map(post => {

             return(
                <div>

                <p>{post.title}</p>
                <p>{post.content}</p>
                <hr></hr>
                </div>

             )
         })}
            </div>

     



    )
}


export default HomeBody