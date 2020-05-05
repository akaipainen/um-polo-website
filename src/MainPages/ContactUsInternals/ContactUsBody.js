import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import "./ContactUsBody.css"
var options = ["Prospective Athlete", "Fundraising", "Potential Coach", "Alumni Visit", "Volunteering", "Sporting Event Tickets", "Tournament Hosting", "Other"];

class ContactUsBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            link: "",
            name_name: "",
            email_name: "",
            phone_name: ""

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
        var currentlySelectedOther = this.state.value !== "" && this.state.value !== "Prospective Athlete"
        var currentlySelectedAthlete = this.state.value === "Prospective Athlete"
        var goingAthlete = option.target.value === "Prospective Athlete"
        var goingOther = option.target.value !== "Prospective Athlete" && option.target.value !== ""
        var hasData = false;
if (currentlySelectedAthlete){
    hasData = document.getElementById("hometown").value !== "" || document.getElementById("gradYear").value !== "" || document.getElementById("time").value !== "" || document.getElementById("hand").value !== "" || document.getElementById("experience").value !== "" || document.getElementById("priorTeams").value !== "" || document.getElementById("optionalQuestions").value !== "" 
}
        if (currentlySelectedAthlete && goingOther && hasData) {
            var message = window.confirm("You are about to change the content of the form and all entries below this question will not be saved. Press OK to proceed or press Cancel to continue answering the athlete questionnaire.");
            if (message === false) {
                document.getElementById("mySelect").selectedIndex = "1"
                return;
            }
        }
        if (currentlySelectedOther && goingAthlete && (document.getElementById("message").value !== "" && this.state.value !== "Other") || (this.state.value === "Other" && (document.getElementById("titleText").value !== "" || document.getElementById("message").value !== ""))) {
            var message = window.confirm("You are about to change the content of the form and all entries below this question will not be saved. Press OK to proceed or press Cancel to continue writing your message.");
            if (message === false) {
                document.getElementById("mySelect").selectedIndex = options.indexOf(this.state.value) + 1
                return;
            }
        }

        this.setState({ value: option.target.value });
        if (option.target.value === "Prospective Athlete") {
            this.setState({ link: athleteLink, name_name: athlete_name_name, email_name: athlete_email_name, phone_name: athlete_phone_name });


        }
        if (option.target.value !== "Prospective Athlete") {
            this.setState({ link: otherLink, name_name: other_name_name, email_name: other_email_name, phone_name: other_phone_name });
        }

    }
    render() {

        return (
            <div className="App" >

                <ImageIntro imagePath={`${process.env.PUBLIC_URL}/banquet.png`}></ImageIntro>
                <SectionHeader title="Contact Us"></SectionHeader>


                <div className="formHolder">
                    <form className="from" action={this.state.link}>
                        <div className="lineHolder">
                            <div className="questionBlock">
                                <label className="question-title" >*Full Name:</label>
                                <input type="name" className="userName" id="name" name={this.state.name_name} autocomplete="on" placeholder="John Doe" required></input>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >*Email:</label>
                                <input type="email" className="mail" id="email" autocomplete="on" name={this.state.email_name} placeholder="john@doe.com" required></input>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >*Phone Number:</label>
                                <input type="tel" className="phone" id="phone" autocomplete="on" name={this.state.phone_name} placeholder="1234567890" pattern="[0-9]{10}" required></input>
                            </div>
                        </div>

                        <br></br>

                        <div className="dropHolder">
                            <div className="question-title">*Please elect the reason for contacting us:</div>
                            <div className="selectdiv">
                                <select required id="mySelect" className={"dropBox" + (this.state.value === "")} onChange={this.handleChange}>
                                    <option value="" selected disabled className="emptySelection">Please select a reason</option>
                                    {
                                        options.map(item => (<option className="realOptions" value={item}>{item}</option>))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="breakBottom"></div>






                        {this.state.value === "Prospective Athlete" && <div>

                        <div className="someSpace"></div>
                        <p className = "note"><mark><b>NOTE: the ability to swim 100 meters unassisted is a prerequisite skill to be able to join the team as a player</b></mark></p>
                        <div className="someSpace"></div>


                        <div className="lineHolder">
                            <div className="questionBlock">
                                <label className="question-title" >Hometown:</label>
                                <input type="address-level2" className="userName" id="hometown" autocomplete="on" placeholder="Chicago, IL" ></input>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >*Anticipated year of degree completion:</label>
                                <input type="number" className="phone" id="gradYear"  min = {((new Date).getFullYear() ).toString() } max = {((new Date).getFullYear() +10).toString() }placeholder={((new Date).getFullYear() + 4).toString() } required></input>
                            </div>
                        
                        </div>
                        <div className="someSpace"></div>
                        <div className="lineHolder">
                        <div className="questionBlock">
                                <label className="question-title" >100 Yard Freestyle Time:</label>
                                <input type="number" className="phone" id="time" placeholder="56.00" min="40" ></input>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >Dominant Hand:</label>
                                <input type="text" className="phone" id="hand"   placeholder="Right"></input>
                            </div>
                        </div>
                        <div className="someSpace"></div>

                        <div className="lineHolder">
                        <div className="questionBlock">
                                <label className="question-title" >*Years of water polo experience:</label>
                                <input type="number" className="experience" id="experience"   placeholder="0" min = "0" max = "100" required></input>
                                <div className = "smallText">NOTE: 0 years of experience is completely fine!</div>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >Any teams played for:</label>
                                <input type="text" className="priorTeams" id="priorTeams" placeholder="Enter any past teams played for" ></input>
                            </div>
                            
                        </div>
                        <div className="someSpace"></div>

                        <p className="question-title" >Optional space for any sort of questions or comments:</p>
                            <textarea type="text" className="message2" name="entry.12345" id="optionalQuestions" placeholder="Those who write us a quality story are more likely to make it through the vigerous selection process :)"></textarea>


                        </div>}
                        {this.state.value !== "Prospective Athlete" && this.state.value !== "" && <div>
                            <div className="someSpace"></div>
                            {this.state.value !== "Other" && <p className="question-title" >Title: {this.state.value}</p>}
                            {this.state.value === "Other" && <div className="questionBlock">
                                <label className="question-title" >*Title:</label>
                                <input type="text" className="phone1" id="titleText" placeholder="Enter reason for contact here" required></input>
                            </div>
                            }

                            <p className="question-title" >*Message:</p>
                            <textarea type="text" className="message" name="entry.12345" id="message" placeholder="Enter message here..." required></textarea>


                        </div>}


                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        );

    }
}

export default ContactUsBody;