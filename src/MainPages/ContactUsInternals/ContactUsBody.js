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
        var athleteLink = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScO_89MKr0Exb16QoM-zSoJa28MdF5G-LZBH7NvyrCNnhK0Bg/formResponse"
        var otherLink = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSchr6uVy-1cGKMdueSmyfe7tMtd9PaPFkqIK5CSh6vdjWaphw/formResponse"
        var athlete_name_name = "entry.824923744"
        var athlete_email_name = "entry.1946615411"
        var athlete_phone_name = "entry.1048864697"
        var other_name_name = "entry.238190827"
        var other_email_name = "entry.913578307"
        var other_phone_name = "entry.1832837971"
        var currentlySelectedAll= this.state.value !== "" && this.state.value !== "Prospective Athlete"&& this.state.value !== "Other"
        var currentlySelectedOther= this.state.value === "Other"
        var currentlySelectedAthlete = this.state.value === "Prospective Athlete"
        var goingAthlete = option.target.value === "Prospective Athlete"
        var goingOther= option.target.value === "Other"
        var goingAll = option.target.value !== "Prospective Athlete" && option.target.value !== ""&& option.target.value !== "Other"
        var hasData = false;

if (currentlySelectedAthlete){
    hasData = document.getElementById("hometown").value !== "" || document.getElementById("gradYear").value !== "" || document.getElementById("time").value !== "" || document.getElementById("hand").value !== "" || document.getElementById("experience").value !== "" || document.getElementById("priorTeams").value !== "" || document.getElementById("optionalQuestions").value !== "" 
}
        if (currentlySelectedAthlete && (goingAll || goingOther) && hasData) {
            var message = window.confirm("You are about to change the content of the form and all entries below this question will not be saved. Press OK to proceed or press Cancel to continue answering the athlete questionnaire.");
            if (message === false) {
                document.getElementById("mySelect").selectedIndex = "1"
                return;
            }
        }
        if (currentlySelectedAll && goingAthlete && document.getElementById("message").value !== "") {
             message = window.confirm("You are about to change the content of the form and your message will not be saved. Press OK to proceed or press Cancel to continue writing.");
            if (message === false) {
                document.getElementById("mySelect").selectedIndex = options.indexOf(this.state.value) + 1
                return;
            }
        }

        if (currentlySelectedOther && goingAll && document.getElementById("titleText").value !== "") {
             message = window.confirm("You are about to change the content of the form and your title will not be saved. Press OK to proceed or press Cancel to continue writing.");
            if (message === false) {
                document.getElementById("mySelect").selectedIndex = options.indexOf(this.state.value) + 1
                return;
            }
        }
        if (currentlySelectedOther && goingAthlete && (document.getElementById("titleText").value !== ""|| document.getElementById("message").value !== "")) {
             message = window.confirm("You are about to change the content of the form and your title will not be saved. Press OK to proceed or press Cancel to continue writing.");
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






                        {this.state.value === "Prospective Athlete" && <div className = "appear">

                        <div className="someSpace"></div>
                        <p className = "note"><mark>NOTE: the ability to swim 100 yards unassisted is a prerequisite skill to be able to join the team as a player</mark></p>
                        <div className="someSpace"></div>


                        <div className="lineHolder">
                            <div className="questionBlock">
                                <label className="question-title" >Hometown:</label>
                                <input type="address-level2" name="entry.1429166208" className="userName" id="hometown" autocomplete="on" placeholder="Chicago, IL" ></input>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >*Anticipated year of degree completion:</label>
                                <input type="number" name="entry.68182095" className="phone" id="gradYear"  min = {((new Date()).getFullYear() ).toString() } max = {((new Date()).getFullYear() +10).toString() }placeholder={((new Date()).getFullYear() + 4).toString() } required></input>
                            </div>
                        
                        </div>
                        <div className="someSpace"></div>
                        <div className="lineHolder">
                        <div className="questionBlock">
                                <label className="question-title" >100 Yard Freestyle Time:</label>
                                <input name="entry.2035085070"type="number" className="phone" id="time" placeholder="56.00" min="40" ></input>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >Dominant Hand:</label>
                                <input type="text"name="entry.1054216554" className="phone" id="hand"   placeholder="Right"></input>
                            </div>
                        </div>
                        <div className="someSpace"></div>

                        <div className="lineHolder">
                        <div className="questionBlock">
                                <label className="question-title" >*Years of water polo experience:</label>
                                <input type="number" name="entry.74751114" className="experience" id="experience"   placeholder="0" min = "0" max = "100" required></input>
                                <div className = "smallText">NOTE: 0 years of experience is completely fine!</div>
                            </div>

                            <div className="questionBlock">
                                <label className="question-title" >Any teams played for:</label>
                                <input type="text"name="entry.1726469196" className="priorTeams" id="priorTeams" placeholder="Enter any past teams played for" ></input>
                            </div>
                            
                        </div>
                        <div className="someSpace"></div>

                        <p className="question-title" >Optional space for any sort of questions or comments:</p>
                            <textarea type="text" className="message2" name="entry.1567373700" id="optionalQuestions" placeholder="Those who write us a quality story are more likely to make it through the vigerous selection process :)"></textarea>


                        </div>}
                        {this.state.value !== "Prospective Athlete" && this.state.value !== "" && <div className = "appear">
                            {this.state.value !== "Other" &&<div> 
                                
                            <label className="question-title" >Title:</label>
                        <input type="text" name = "entry.188853843" className="userName" id = "hidden" value={this.state.value} readOnly required></input>

                            </div>}
                            {this.state.value === "Other" && <div className="questionBlock">
                            <div className="someSpace"></div>

                                <label className="question-title" >*Title:</label>
                                <input type="text" className="phone1" id="titleText" name = "entry.188853843" placeholder="Enter reason for contact here" required></input>
                            </div>
                            }

                            <p className="question-title" >*Message:</p>
                            <textarea type="text" className="message" name="entry.2055079195" id="message" placeholder="Enter message here..." required></textarea>


                        </div>}
                        <div className="someSpace"></div>

                        <label className="question-title" >*Please type "Ⓖ𝓞 Ḇ𝓛Ʊℰ" to confirm you are not a robot:</label>
                        <input type="text" className="priorTeams" autocomplete="off" placeholder="Enter the secret password here" pattern="GO BLUE" required></input>
                        <div className = "smallText"><mark>NOTE: use normal characters and all caps—<b>DO NOT</b> copy and paste!</mark></div>

                        <div className="someSpace"></div>

                        <input type="submit"  className ="done" value="Submit" />
                    </form>
                </div>
            </div>
        );

    }
}

export default ContactUsBody;