import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import Question from '../RepeatingComponents/Question';
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import DropdownQuestion from '../RepeatingComponents/DropdownQuestion';


function ContactUsBody() {

    return (


        
            <div>
                <form className = "form_format">
                    <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/banquet.png`}></ImageIntro>
                    <SectionHeader title = "Contact Us"></SectionHeader>
                    <Question question_title = 'What is your name?'></Question>
                    <Question question_title = 'What is your email?'></Question>
                    <Question question_title = 'What is your phone number?'></Question>
                    <DropdownQuestion question_title = 'What is your reason for contact?'
                        options = {["Potential Athlete", "other"]}>
                    </DropdownQuestion>
                </form>
            </div>


    )
}

export default ContactUsBody