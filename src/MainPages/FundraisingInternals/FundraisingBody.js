import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import {Body} from '../RepeatingComponents/body'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';

function FundraisingBody() {

    return (
        <div>
            
            <ImageIntro imagePath = {`${process.env.PUBLIC_URL}/daBoys.jpg`}></ImageIntro>

            <YellowBanner>Fundraising</YellowBanner>

            <Body>
                This is the body.
            </Body>


        </div>
    )
}


export default FundraisingBody