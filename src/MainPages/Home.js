import React, { Component } from 'react'
import Body from './HomeInternals/HomeBody'
import Footer from './RepeatingComponents/Footer'
import Header from './RepeatingComponents/Header'
import "./RepeatingComponents/phoneHeader.css";
import ScrollAnimation from 'react-animate-on-scroll';






class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {          };
          
  }

  render(){
  return (
    
<div>

<Header />

<div className="header">
    <link href="http://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css" />

  

  <div className="myBigLogo">
    <div></div>
    <img className = "informalLogo" onClick={()=> window.open(`${process.env.PUBLIC_URL}/`, "_self")} src = {`${process.env.PUBLIC_URL}/Icons/informalLogo.svg`}></img>
    <div></div>
    </div>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><a href={`${process.env.PUBLIC_URL}/news`}>News</a></li>
    <li><a href={`${process.env.PUBLIC_URL}/roster`}>Roster</a></li>
    <li><a href={`${process.env.PUBLIC_URL}/scheduleandresults`}>Schedule and Results</a></li>
    <li><a href={`${process.env.PUBLIC_URL}/aboutus`}>About Us</a></li>
    <li><a href={`${process.env.PUBLIC_URL}/contactus`}>Contact Us</a></li>

  </ul>
<div className = "breakBottom"></div>

                  </div>
       <Body />
       <Footer />
    </div>
    
    
  )
  }
}

export default Home
