import React from 'react'
import "./BlogsPage.css"
import MainCard from '../components/MainCard/MainCard'
import CenterCard from '../components/CenterCard/CenterCard'
import AboutSection from '../components/About/About'
import LowCard from '../components/LowCard/LowCard'


const BlogsPage = () => {
  return (
    <div className='blogsPage-container'>
        <MainCard/>
        <CenterCard/>
        <AboutSection/>
        <LowCard/>
    </div>
  )
}

export default BlogsPage