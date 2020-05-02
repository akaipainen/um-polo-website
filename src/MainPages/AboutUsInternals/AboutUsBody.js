import React from 'react'
import { Post } from '../RepeatingComponents/Post'
import { YellowBanner } from '../RepeatingComponents/YellowBanner'
import ImageIntro from '../RepeatingComponents/introImage'


function AboutUsBody() {

    return (
     
        <div>
            <ImageIntro imagePath = {`${process.env.PUBLIC_URL}/bigtenchamps2017.png`}></ImageIntro>

            <YellowBanner>
                About Us
            </YellowBanner>

            <Post>
                <font size="+2"><p><b>National Champions</b><br />1996, 1998, 2003</p></font>
                <font size="+2"><p><b>Big Ten Champions</b><br />1989, 1991, 1992, 1996, 1997, 1998, 2003, 2004, 2011, 2012, 2015, 2016, 2017, 2018</p></font>
                <font size="+2"><p><b>Big Ten Runner-Up</b><br />2000, 2001, 2002, 2005, 2006, 2008, 2009, 2010, 2014</p></font>
            </Post>

            <YellowBanner>2020 Executive Board</YellowBanner>

        </div>


    )
}


export default AboutUsBody