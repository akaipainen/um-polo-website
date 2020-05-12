import React from 'react'
import { Post } from '../RepeatingComponents/Post'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader'
import ImageIntro from '../RepeatingComponents/introImage'
import Eboard from '../../Data/eboard.json'
import Player from '../RepeatingComponents/EBoard'
import './AboutUsBody.css';


function AboutUsBody() {

    return (

        <div>
            <ImageIntro imagePath={`${process.env.PUBLIC_URL}/banner-SlidePhotos/bigtenchamps2017.jpg`}></ImageIntro>

            <SectionHeader title="About Us" />

            <Post bigFont = "yesPlease">
                <p>{"\t"}The University of Michigan Men's Club Water Polo Team is a tight knit community of students. We are a member of the College Water Polo Association (CWPA) that includes both varsity and club teams. We play as part of the Big Ten Division (club only) in season, while in the off season we can play any team in the country in any division.  Our season typically runs from September to mid-November. Our team is run by the players and we perform various duties such as budgeting, scheduling, recruiting, fundraising, and organizing transportation/hotels for road trips. Each year, we elect officers to carry out these various tasks. Our mission is to provide the opportunity for interested individuals of all skill levels to participate in the sport of water polo on the collegiate club level. 
 If you are interested in learning more about the team and/or potentially joining, please contact us using the form on the contact us page! </p><br />
               <p><b>National Champions</b><br/>2003, 1998, 1996</p>
               <p><b>Big Ten Champions</b><br />2018, 2017, 2016, 2015, 2012, 2011, 2004, 2003, 1998, 1997, 1996, 1992, 1991, 1989</p>
                <p><b>Big Ten Runner-Up</b><br />2014, 2010, 2009, 2008, 2006, 2005, 2002, 2001, 2000</p>
            </Post>

            <SectionHeader title="2020 Executive Board" />

            {Eboard.map(post => {
                return (
                    <div>

                        <Player
                            id={post.id}
                            isCaptian={false}
                            hometown={post.role}
                            headshotFile = {""+post.headshotFile}
                            folder = "EBoardHeadshots"
                            name={post.name}>
                        </Player>

                    </div>


                )
            })}



            <SectionHeader title="More Information" />
            <div className = "bannerTextInfo">During the regular season we practice from 9-11 PM Monday-Thursday at Canham Natatorium. <br></br>Contact us if you are interested in joining the team!</div>

               <div className = "banners">
                    <div className = "bannerContainer" >
                    <img className="bannerPhoto" src={`${process.env.PUBLIC_URL}/Icons/${"recSports.svg"}`} onClick={()=> window.open("https://recsports.umich.edu/clubs/", "_blank")} alt = "banner" ></img>
                    <p className = "bannerText" onClick={()=> window.open("https://recsports.umich.edu/clubs/", "_blank")}>Club Sports Website</p>
                    </div>

                    <div className = "bannerContainer" >
                    <img className="bannerPhoto" src={`${process.env.PUBLIC_URL}/Icons/${"cwpa.png"}`} onClick={()=> window.open("https://collegiatewaterpolo.org/", "_blank")}alt = "pic" ></img>
                    <p className = "bannerText" onClick={()=> window.open("https://collegiatewaterpolo.org/", "_blank")}>CWPA Page</p>
                    </div>

                    <div className = "bannerContainer" >
                    <img  className="bannerPhoto" src={`${process.env.PUBLIC_URL}/Icons/${"studentLife.svg"}`} onClick={()=> window.open("https://maizepages.umich.edu/organization/menswaterpolo", "_blank")}alt = "banner"></img>
                    <p className = "bannerText" onClick={()=> window.open("https://maizepages.umich.edu/organization/menswaterpolo", "_blank")} >Maizepages</p>
                    </div>

                    <div className = "bannerContainer" >
                    <img  onClick={()=> window.open("https://drive.google.com/drive/u/1/folders/0ByBWCpbn60RoUUFtRW1JemQyNlE", "_blank")} className="bannerPhoto" src={`${process.env.PUBLIC_URL}/Icons/${"gallery.png"}`} alt = "bhoto"></img>
                    <p onClick={()=> window.open("https://drive.google.com/drive/u/1/folders/0ByBWCpbn60RoUUFtRW1JemQyNlE", "_blank")} className = "bannerText" >Photo Gallery</p>
                    </div>
               </div>
               

        </div>


    )
}


export default AboutUsBody