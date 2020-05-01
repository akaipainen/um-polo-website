import React from 'react'
import Body from './NewsInternals/NewsBody'
import Footer from './RepeatingComponents/Footer'
import Header from './RepeatingComponents/Header'





function News() {
  return (
    
<div>
      <Header highlight = "news"/>
       <Body />
       <Footer />
    </div>
    
  )
}

export default News
