import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import {Body, BodyText} from '../RepeatingComponents/body'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';

function FundraisingBody() {

    return (
        <div>
            
            <ImageIntro imagePath = {`${process.env.PUBLIC_URL}/daBoys.jpg`}></ImageIntro>

            <YellowBanner>Fundraising</YellowBanner>

            <BodyText>
                This is the body.
            </BodyText>


        </div>
    )
}


export default FundraisingBody