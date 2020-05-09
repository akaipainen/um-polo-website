import React from 'react'
import "./phoneHeader.css";






function phoneHeader() {




    return (        
        <header class="header">
                    <link href="http://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css" />

          <a href="/" class="logo">BOYSSSSS</a>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className = "breakBottom"></div>

        </header>



    )
}


export default phoneHeader