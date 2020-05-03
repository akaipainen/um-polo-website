import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';
import ContactForm from '../RepeatingComponents/ContactForm';


function ContactUsBody() {

    return (


        
            <div>
                <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/banquet.png`}></ImageIntro>
                <YellowBanner>Contact Us</YellowBanner>
                <ContactForm question_title = 'What is your name?'></ContactForm>
                <ContactForm question_title = 'What is your email?'></ContactForm>
                <ContactForm question_title = 'What is your phone number?'></ContactForm>
                <ContactForm question_title = "What is your reason for contact?" is_dropdown = "true"></ContactForm>
            </div>




    )
}


export default ContactUsBody