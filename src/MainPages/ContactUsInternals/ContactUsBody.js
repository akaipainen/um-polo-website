import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';


function ContactUsBody() {

    return (


        
            <div>
        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/banquet.png`}></ImageIntro>
        <SectionHeader title="Contact Us" />

            </div>


     



    )
}


export default ContactUsBody