import React from 'react'
import "./LowerSection.css"
import { useTranslation } from 'react-i18next';


const LowerSection = () => {
  const { t } = useTranslation();
  return (
    <div className='lowerSection-container'>
        <div className="leftedSection">
            <p>{t("lowerTitle")}</p>
            <h1>{t("lowerSubtTitle")}</h1>
        </div>
        <div className="rightedSection">
            <button>{t("btnSentence")}</button>
        </div>
    </div>
  )
}

export default LowerSection