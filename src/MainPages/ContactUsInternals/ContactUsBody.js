import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';


function ContactUsBody() {

    return (


        
            <div>
        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/banquet.png`}></ImageIntro>
        <YellowBanner>Contact Us</YellowBanner>

            </div>


     



    )
}


export default ContactUsBody