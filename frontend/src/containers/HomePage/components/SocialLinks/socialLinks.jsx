import React from 'react'
import "./socialLinks.css"
import webflow from "../../../../components/Images/webflow.png"
import facebook from "../../../../components/Images/fbook.png"
import youtube from "../../../../components/Images/youtube.png"

const SocialLinks = () => {
  return (
    <div className='socialLinks-container'>
        <img src={webflow} alt="webflowImg" />
        <img src={facebook} alt="facebookImg" />
        <img src={youtube} alt="youtubeImg" />
    </div>
  )
}

export default SocialLinks;