import React from 'react'
import Updates from '../../Data/updates.json'
import "./HomeBody.css"
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import { Post } from '../RepeatingComponents/Post';
import Slider from './show/components/Slider'



function HomeBody() {
   var arr = [
        `${process.env.PUBLIC_URL}/mavShooting.png`,
        `${process.env.PUBLIC_URL}/team.png`,
        `${process.env.PUBLIC_URL}/banquet.png`,
        `${process.env.PUBLIC_URL}/daBoys.png`
    ]
      
    return (        
            <div>



{    /*   <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/mavShooting.png`}></ImageIntro>*/}

<Slider slides={arr} autoPlay={5}/>
<a className = "streamingAlert"href = "https://youtube.com" rel="noopener noreferrer" target="_blank">Matches now streamed and archived on YouTube!</a>
            <img src = { `${process.env.PUBLIC_URL}/champBanner.svg`} alt = "champ" className = "champ"></img>
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

                  <img alt = "companies"className = "companies" src = {`${process.env.PUBLIC_URL}/alumniCompanies.png`}></img>
                <p className = "alumni">Our Alumni get placed all across the globe and strengthen the Michigan Water Polo network.</p>
            </div>

     



    )
}


export default HomeBody