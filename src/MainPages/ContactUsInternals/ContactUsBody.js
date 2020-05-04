import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import "./ContactUsBody.css"

class ContactUsBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key: "",
            value: "",
            link:"",
            name_name:"",
            email_name:"",
            phone_name:""

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(option) {
        var athleteLink = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfdFFYEJJd2zCpB-XtSTUFmhuZcFqgnWV97xaGhbxyBCfB8TA/formResponse"
        var otherLink = "https://docs.google.com/forms/u/0/d/e/1FAB-XtSTUFmhuZcFqgnWV97xaGhbxyBCfB8TA/formResponse"
        var athlete_name_name = "entry.12345"
        var athlete_email_name = "entry.12345"
        var athlete_phone_name = "entry.12345"
        var other_name_name = "entry.12345"
        var other_email_name = "entry.12345"
        var other_phone_name = "entry.12345"

        this.setState({value: option.target.value});
        if (option.target.value === "Prospective Athlete"){
            this.setState({link: athleteLink,name_name : athlete_name_name,email_name : athlete_email_name,phone_name : athlete_phone_name});


        }
        if (option.target.value !== "Prospective Athlete"){
            this.setState({link: otherLink,name_name : other_name_name,email_name : other_email_name,phone_name : other_phone_name});
        }
    }
    render() {
        var options = ["Prospective Athlete", "Fundraising"];
        
        return (
            <div className="App" >
                
                    <ImageIntro imagePath={`${process.env.PUBLIC_URL}/banquet.png`}></ImageIntro>
                    <SectionHeader title="Contact Us"></SectionHeader>
                   
                   
                   <div className = "formHolder"> 
                    <form className="from" action={this.state.link}>
                    <div className = "lineHolder">
                    <div className = "questionBlock">
                    <label className = "question-title" >*Full Name:</label>
                    <input type="name"className = "userName" id="name" name = {this.state.name_name} autocomplete="on" placeholder = "John Doe" required></input>
                    </div>

                    <div className = "questionBlock">
                    <label className = "question-title" >*Email:</label>
                    <input type="email"className = "mail" id="email" autocomplete="on" name = {this.state.email_name} placeholder = "john@doe.com" required></input>
                    </div>

                    <div className = "questionBlock">
                    <label className = "question-title" >*Phone Number:</label>
                    <input type="tel"className = "phone" id="phone" autocomplete="on" name = {this.state.phone_name} placeholder = "1234567890" pattern="[0-9]{10}" required></input>
                    </div>
                    </div>

      <br></br>



                <div className = "dropHolder">
                <div className = "question-title">Please select the reason for contacting us:</div>
                <div className = "selectdiv">
                <select required className = {"dropBox" + (this.state.value === "")} onChange = {this.handleChange}>
                <option value="" selected className = "emptySelection">Please select a reason</option>
                {
                    options.map(item => (<option className = "realOptions" value = {item}>{item}</option>))
                }
            </select>
            </div>
            </div>
            <div className = "breakBottom"></div>






            {this.state.value === "Prospective Athlete" && <div> 
                
                    <div className = "questionBlock">
                    <label className = "question-title" >Body Count</label>
                    <input type="number" name = "entry.12345" id="quantity"className = "phone" placeholder = "1000" required></input>
                    </div>
                
                







                </div>}
            {this.state.value !== "Prospective Athlete" && this.state.value !== "" &&<div> 
                               
                
            <p className = "question-title" >*Message:</p>
                    <textarea type="text"className = "message" name = "entry.12345" placeholder = "Enter message here..."required></textarea>
                
                
                </div>}

                     <input type="submit" value="Send" />
                </form>

                </div>
            </div>
        );

    }
}

export default ContactUsBody;