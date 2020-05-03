import React from 'react'
import'./Question.css'
import { withGoogleSheets } from 'react-db-google-sheets';

function Question ({question_title}){
    return(
        <form className = "form_format">
            <div className = "question-title">{question_title}</div>
            <input type = "text" className = "input"></input>
        </form>
    )    
}

export default Question