import React, { useTransition } from 'react'
import "./MyNavbar.css"
import bgImg from "../Images/logo.png";
import { Link } from 'react-router-dom';
import {FaUserAlt} from "react-icons/fa";
import LanguageSelector from "../../UI/LanguageSelector/LangSelector";
import { useTranslation } from 'react-i18next';
const MyNavbar = () => {
  const {t} = useTranslation()
  return (
    <div className='navbar-container'>
       <Link to={"/home"}>
            <img src={bgImg} alt="bgImg" />
       </Link>
        <ul style={{fontFamily: "Public Sans, sans-serif" }}>
            <Link to={"/home"}>{t('home')}</Link>
            <Link to={"/about"}>{t('about')}</Link>
            <Link to={"/blog"}>{t('blog')}</Link>
            <Link to={"/sale"}>{t('sale')}</Link>
            <Link to={"/contact-us"}>{t('contact')}</Link>
            <Link to={"/login"}><FaUserAlt className='relative items-center justify-center'/></Link>
            <LanguageSelector/>
        </ul>
    </div>
  )
}

export default MyNavbar;