import React from 'react'
import { Post } from '../RepeatingComponents/Post'
import { YellowBanner } from '../RepeatingComponents/YellowBanner'
import ImageIntro from '../RepeatingComponents/introImage'
import Eboard from '../../Data/eboard.json'
import Player from '../RepeatingComponents/Player'
import './AboutUsBody.css';


function AboutUsBody() {

    return (

        <div>
            <ImageIntro imagePath={`${process.env.PUBLIC_URL}/bigtenchamps2017.png`}></ImageIntro>

            <YellowBanner>
                About Us
            </YellowBanner>

            <Post>
                <font size="+2.5"><p><b>National Champions</b><br />1996, 1998, 2003</p></font>
                <font size="+2.5"><p><b>Big Ten Champions</b><br />1989, 1991, 1992, 1996, 1997, 1998, 2003, 2004, 2011, 2012, 2015, 2016, 2017, 2018</p></font>
                <font size="+2"><p><b>Big Ten Runner-Up</b><br />2000, 2001, 2002, 2005, 2006, 2008, 2009, 2010, 2014</p></font>
            </Post>

            <YellowBanner>2020 Executive Board</YellowBanner>

            {Eboard.map(post => {

                return (
                    <div>

                        <Player
                            id={post.id}
                            isCaptian={post.isCaptian}
                            hometown={post.role}
                            headshotFile = {post.headshotFile}
                            name={post.name}>
                        </Player>

                    </div>


                )
            })}



            <YellowBanner>More Information</YellowBanner>
            <font size="+2">
                <p onClick={()=> window.open("https://collegiatewaterpolo.org/", "_blank")}>CWPA Website </p>
                <p onClick={()=> window.open("https://maizepages.umich.edu/organization/menswaterpolo", "_blank")}>Maizepages</p>
                <p onClick={()=> window.open("https://drive.google.com/drive/folders/1RXVpM5bYb-d1fWcLQ8jChyP8_1pCVFTi", "_blank")}>Photo Gallery</p>
                <p onClick={()=> window.open("https://recsports.umich.edu/clubs/", "_blank")}>Club Sports Website</p>

                <p>During the regular season we practice from 9-11 PM Monday-Thursday at Canham Natatorium. Contact us if you are interested in joining the team!</p>
            </font>

            <img className="alt-photo" src={`${process.env.PUBLIC_URL}/${"recsports.png"}`}></img>
        </div>


    )
}


export default AboutUsBody