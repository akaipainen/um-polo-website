import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import { Post} from '../RepeatingComponents/Post'
import { YellowBanner } from '../RepeatingComponents/YellowBanner';

function FundraisingBody() {

    return (
        <div>
            
            <ImageIntro imagePath = {`${process.env.PUBLIC_URL}/daBoys.png`}></ImageIntro>

            <YellowBanner>Fundraising</YellowBanner>

            <Post>
                This is the body.
            </Post>


        </div>
    )
}


export default FundraisingBody