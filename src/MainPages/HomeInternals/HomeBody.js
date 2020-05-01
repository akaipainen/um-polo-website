import React from 'react'
import Updates from '../../Data/updates.json'
import ImageIntro from '../RepeatingComponents/introImage'


function HomeBody() {

    return (        
            <div>



        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/mavShooting.png`}></ImageIntro>
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