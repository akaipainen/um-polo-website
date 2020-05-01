import React from 'react'
import "./Header.css";
import { Button } from "./Button";



function Header(props) {
    const x = props.highlight

    return (


        <div className="holder" >
          
            <div className="logoHolder">
            <img onClick = {()=> window.open( `${process.env.PUBLIC_URL}/`,"_self")} src ={ `${process.env.PUBLIC_URL}/blockM.svg`} className = "blockM"></img>
                <div className="Line" onClick = {()=> window.open( `${process.env.PUBLIC_URL}/`,"_self")}></div>
                <div className = "space" onClick = {()=> window.open( `${process.env.PUBLIC_URL}/`,"_self")}>
                <p className="titlePolo">MICHIGAN MEN'S WATER POLO</p>

                <p class="line-1 anim-typewriter">14 TIME BIG TEN CHAMPIONS</p>
                </div>
            </div>
           
            <nav className="navbar" >

                {x === "news" && <Button
                    onClick={() => {
                    }}
                    type="button"
                    hover="no"

                    buttonStyle="no--primary--solid"
                    buttonSize="no--medium"
                >
                    News
      </Button>}
                {x !== "news" && <Button
                    onClick={() => {
                        window.location.href = `${process.env.PUBLIC_URL}/news`
                    }}


                    type="button"
                    hover="yes"
                    buttonStyle="yes--primary--outline"
                    buttonSize="yes--medium"
                >
                    News
      </Button>}

                {x === "roster" && <Button
                    onClick={() => {
                    }}
                    type="button"

                    hover="no"

                    buttonStyle="no--primary--solid"
                    buttonSize="no--medium"
                >
                    Roster    </Button>}
                {x !== "roster" && <Button
                    onClick={() => {
                        window.location.href = `${process.env.PUBLIC_URL}/roster/`
                    }}
                    type="button"

                    hover="yes"
                    buttonStyle="yes--primary--outline"
                    buttonSize="yes--medium"
                >
                Roster      </Button>}


                {x === "schedule" && <Button
                    onClick={() => {
                    }}
                    type="button"

                    hover="no"

                    buttonStyle="no--primary--solid"
                    buttonSize="no--medium"
                >
                    Schedule
      </Button>}
                {x !== "schedule" && <Button
                    onClick={() => {
                        window.location.href = `${process.env.PUBLIC_URL}/schedule/`
                    }}
                    type="button"

                    hover="yes"
                    buttonStyle="yes--primary--outline"
                    buttonSize="yes--medium"
                >
                    Schedule
      </Button>}


      {x === "fundraising" && <Button
                    onClick={() => {
                    }}
                    type="button"

                    hover="no"

                    buttonStyle="no--primary--solid"
                    buttonSize="no--medium"
                >
                    Fundraising
      </Button>}
                {x !== "fundraising" && <Button
                    onClick={() => {
                        window.location.href = `${process.env.PUBLIC_URL}/fundraising/`
                    }}
                    type="button"

                    hover="yes"
                    buttonStyle="yes--primary--outline"
                    buttonSize="yes--medium"
                >
                    Fundraising
      </Button>}


      {x === "about us" && <Button
                    onClick={() => {
                    }}
                    type="button"

                    hover="no"

                    buttonStyle="no--primary--solid"
                    buttonSize="no--medium"
                >
                    About Us
      </Button>}
                {x !== "about us" && <Button
                    onClick={() => {
                        window.location.href = `${process.env.PUBLIC_URL}/aboutus/`
                    }}
                    type="button"

                    hover="yes"
                    buttonStyle="yes--primary--outline"
                    buttonSize="yes--medium"
                >
                    About Us
      </Button>}
      {x === "contact us" && <Button
                    onClick={() => {
                    }}
                    type="button"

                    hover="no"

                    buttonStyle="no--primary--solid"
                    buttonSize="no--medium"
                >
                    Contact Us
      </Button>}
                {x !== "contact us" && <Button
                    onClick={() => {
                        window.location.href = `${process.env.PUBLIC_URL}/contactus/`
                    }}
                    type="button"

                    hover="yes"
                    buttonStyle="yes--primary--outline"
                    buttonSize="yes--medium"
                >
                    Contact Us
      </Button>}
            </nav>
        </div>




    );
}
export default Header
