import React from 'react'
import Body from './FundraisingInternals/FundraisingBody'
import Footer from './RepeatingComponents/Footer'
import Header from './RepeatingComponents/Header'
import "./RepeatingComponents/phoneHeader.css";





function Fundraising() {
  return (
    
<div>
      <Header highlight = "fundraising"/>
      <div className="header">
  <div className="myBigLogo">
    <div></div>
    <img className = "informalLogo"  alt = "banner" onClick={()=> window.open(`${process.env.PUBLIC_URL}/`, "_self")} src = {`${process.env.PUBLIC_URL}/Icons/informalLogo.svg`}></img>
    <div></div>
    </div>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><a href={`${process.env.PUBLIC_URL}/news`}>News</a></li>
    <li><a href={`${process.env.PUBLIC_URL}/roster`}>Roster</a></li>
    <li><a href={`${process.env.PUBLIC_URL}/scheduleandresults`}>Schedule and Results</a></li>
    <li><a className = "selectedFont" href={`${process.env.PUBLIC_URL}/fundraising`}>Fundraising</a></li>

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

export default Fundraising
