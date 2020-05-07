import React from 'react'
import ImageIntro from '../RepeatingComponents/introImage'
import {Post} from '../RepeatingComponents/Post'

import News from '../../Data/news.json'

import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';


function NewsBody() {

    return (


        
            <div>
        <ImageIntro imagePath = { `${process.env.PUBLIC_URL}/banner-SlidePhotos/sam.jpg`}></ImageIntro>
        <SectionHeader title="News" />

        {News.map(post => {

return(
   <div>

<Post optionalDate = {post.date} optionalTitle = {post.title} optionalIndex = {post.id}>
{post.content}
</Post>
   </div>

)
})}

            </div>

     



    )
}


export default NewsBody