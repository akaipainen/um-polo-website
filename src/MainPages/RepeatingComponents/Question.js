import React from 'react'
import'./Question.css'

function Question ({question_title}){
    return(
        <div className = "form_format">
            <div className = "question-title">{question_title}</div>
            <input type = "text" className = "input"></input>
        </div>
    )    
}

export default Question