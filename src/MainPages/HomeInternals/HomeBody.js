import React from 'react'
import Updates from '../../Data/updates.json'
import "./HomeBody.css"
import ImageIntro from '../RepeatingComponents/introImage'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import { Post } from '../RepeatingComponents/Post';




function HomeBody() {

    return (        
            <div>



        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/mavShooting.png`}></ImageIntro>
        <a className = "streamingAlert"href = "https://youtube.com" target="_blank">Matches now streamed and archived on YouTube!</a>
            <img src = { `${process.env.PUBLIC_URL}/champBanner.svg`} className = "champ"></img>
         <SectionHeader title="Updates" />
                  
         {Updates.map(post => {

             return(
                <div>

            <Post optionalDate = {post.date} optionalTitle = {post.title} optionalIndex = {post.id}>
             {post.content}
         </Post>
                </div>

             )
         })}
                  <SectionHeader title="Alumni Network" />

                  <img className = "companies" src = {`${process.env.PUBLIC_URL}/alumniCompanies.png`}></img>
                <p className = "alumni">Our Alumni get placed all across the globe and strengthen the Michigan Water Polo network.</p>
            </div>

     



    )
}


export default HomeBody