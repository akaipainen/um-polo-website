import React from 'react'
import './Question.css'

function DropdownQuestion ({question_title}){
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

export default DropdownQuestion