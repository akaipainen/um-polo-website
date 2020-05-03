import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import { Post } from '../RepeatingComponents/Post'
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader'
import './FundraisingBody.css';
import Fundraising from '../../Data/fundraising.json'


function FundraisingBody() {

    return (
        <div>

            <ImageIntro imagePath={`${process.env.PUBLIC_URL}/daBoys.png`}></ImageIntro>

            <SectionHeader title="Fundraising" />

            {Fundraising.map(post => {

                return (
                    <div>

                        <Post>
                        <p>The Men’s Club Water Polo team provides student athletes a tight-knit community in which they are able to continue playing a sport they love while also growing as individuals and a team. Our organization provides opportunities for members to develop skills such as communication, leadership, and teamwork as the group competes for Big Ten and national championships. Men’s Club Water Polo is also committed to establishing community involvement with local high schools and giving back through volunteering. To accomplish our team goals players practice four nights a week, compete in tournaments, and volunteer with local charities and work with local high school teams. Our organization works to organize and host invitational and Big Ten Conference water polo tournaments bringing in teams from around the country to compete.</p>
                <br></br><p>In order to make our largely student funded organization possible, the Men’s Club Water Polo team relies greatly on the generosity of donors. Donations of money, food, equipment, and transportation make travel and lodging at tournaments possible and allow the team to compete in Big Ten and CWPA play. Monetary and non-monetary contributions are tax-deductible and are greatly appreciated.</p>
                <br></br><p>If you would like to make a monetary donation contributions can be made through the Men’s Club Water Polo online giving page <a href="https://leadersandbest.umich.edu/find/#!/give/basket/fund/311008" target="_blank">here</a>.</p>
                <br></br> <p>If you would like to make a non-monetary donation please <a href={`${process.env.PUBLIC_URL}/contactus/`} target="_blank">contact us</a>.</p>
                <br></br><p>Thank you for your generous support!{"\n"}</p>
                            <img className="alt-headshot" src={`${process.env.PUBLIC_URL}/${post.img}`}></img>
                            {post.signature}

                        </Post>

                    </div>


                )
            })}


        </div>
    )
}


export default FundraisingBody