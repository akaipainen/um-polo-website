import React from 'react'
import { Post } from '../RepeatingComponents/Post'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader'
import ImageIntro from '../RepeatingComponents/introImage'
import Eboard from '../../Data/eboard.json'
import Player from '../RepeatingComponents/Player'
import './AboutUsBody.css';


function AboutUsBody() {

    return (

        <div>
            <ImageIntro imagePath={`${process.env.PUBLIC_URL}/banner-SlidePhotos/bigtenchamps2017.jpg`}></ImageIntro>

            <SectionHeader title="About Us" />

            <Post bigFont = "no">
                <p>{"\t"}The University of Michigan Men's Water Polo Team is a tight knit club sport... puts drew's bio here </p><br />
               <p><b>National Champions</b><br/>1996, 1998, 2003</p>
               <p><b>Big Ten Champions</b><br />1989, 1991, 1992, 1996, 1997, 1998, 2003, 2004, 2011, 2012, 2015, 2016, 2017, 2018</p>
                <p><b>Big Ten Runner-Up</b><br />2000, 2001, 2002, 2005, 2006, 2008, 2009, 2010, 2014</p>
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