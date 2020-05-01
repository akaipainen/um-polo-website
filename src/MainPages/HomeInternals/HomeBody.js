import React from 'react'
import Updates from '../../Data/updates.json'
import "./HomeBody.css"
import ImageIntro from '../RepeatingComponents/introImage'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';
import { Post } from '../RepeatingComponents/Post';




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

            <Post optionalDate = {post.date} optionalTitle = {post.title} optionalIndex = {post.id}>
             {post.content}
         </Post>
                </div>

             )
         })}
            </div>

     



    )
}


export default HomeBody