import React from 'react'
import "./AboutPage.css"


import MainTitle from '../components/MainTitle/MainTitle'
import CommentSection from '../components/CommentSection/CommentSection'
import NewsSection from '../components/NewsSection/NewsSection'
import LowerSection from '../components/LowerSection/LowerSection'


const AboutPage = () => {
  return (
    <div className='aboutPage-container'>
            <MainTitle/>
            <CommentSection/>
            <NewsSection/>      
            <LowerSection/> 
    </div>
  )
}

export default AboutPage