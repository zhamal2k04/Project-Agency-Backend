import React from 'react'
import "./LoweredSection.css"
import { useTranslation } from 'react-i18next'


const LoweredSection = () => {
  const {t} = useTranslation();
  return (
    <div className='loweredSection-container'>
            <p>{t("ContactUs")}</p>
            <h1>{t("contactUs")}</h1>
            <span><p>{t("readNow")} →</p></span>
    </div>
  )
}

export default LoweredSection