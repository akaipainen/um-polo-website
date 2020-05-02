import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';


function NewsBody() {

    return (


        
            <div>
        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/sam.png`}></ImageIntro>
        <YellowBanner>News</YellowBanner>

            </div>

     



    )
}


export default NewsBody