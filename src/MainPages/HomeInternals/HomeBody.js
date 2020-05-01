import React from 'react'
import Updates from '../../Data/updates.json'

function HomeBody() {

    return (


        
            <div>
         {Updates.map(post => {

             return(
                <div>

                <p>{post.title}</p>
                <p>{post.content}</p>
                <hr></hr>
                </div>

             )
         })}
            </div>

     



    )
}


export default HomeBody