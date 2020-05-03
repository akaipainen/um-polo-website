import React from 'react'
import './Question.css'
import Question from './Question'

/*function DropdownQuestion ({question_title}){
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
}*/

class DropdownQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: "",
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(option) {
        this.setState({value: option.target.value});
        if (this.state.value == "Potential Athlete"){
            return(
                <Question question_title = "New Question"></Question>
            )
        }
    }

    render(){
        const {options} = this.props;
        return(
            <div className = "form_format">
                <div className = "question-title">{this.props.question_title}</div>
                <select className = "dropdown_format" onChange = {this.handleChange}>
                {
                    options.map(item => (<option>{item}</option>))
                }
            </select>
            </div>
        )
    }
}

export default DropdownQuestion