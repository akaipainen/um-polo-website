import React from 'react'
import'./ContactForm.css'



function ContactForm({question_title, is_dropdown}){
    //First ask for question and then for if its a dropdown
    
    
    {/*const dropdown_options = [
        {key: "info", item: "Event Info"},
        {key: "athlete", item: "Prospective Athlete"},
        {key: "fundraising", item: "Fundraising"},
        {key: "volunteering", item: "Volunteering"},
        {key: "tourney", item: "Tournament Hosting"},
        {key: "other", item: "Other"},
    ]
        handleChange => event => {
            this.setState({value: event.target.value});
        }
    */}

    if(is_dropdown){
        return(
            <form className = "form_format">
                <div className = "question-title">{question_title}</div>
                <select id = "dropdown" className = "dropdown_format">
                    <option value = "info">Event Info</option>
                    <option value = "athlete">Prospective Athlete</option>
                    <option value = "fundraising">Fundraising</option>
                    <option value = "volunteering">Volunteering</option>
                    <option value = "tourney">Tournament Hosting</option>
                    <option value = "other">Other</option>
                </select>
            </form>
        )
    }
    else{
        return(
            <form className = "form_format">
                <div className = "question-title">{question_title}</div>
                <input type = "text" className = "input"></input>
            </form>
        ) 
    }
}

export default ContactForm