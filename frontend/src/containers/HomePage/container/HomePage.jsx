import React from 'react'
import "./HomePage.css"
import MainCard from '../components/mainCard/mainCard'
import SocialLinks from '../components/SocialLinks/socialLinks'
import SolutionCard from '../components/solutionCard/solutionCard'
import LowerText from '../components/lowerText/LowerText'
import LowerCard from '../components/LowerCard/LowerCard'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <MainCard/>
        <SocialLinks/>
        <SolutionCard/>
        <LowerText/>
        <LowerCard/>
    </div>
  )
}

export default HomePage;