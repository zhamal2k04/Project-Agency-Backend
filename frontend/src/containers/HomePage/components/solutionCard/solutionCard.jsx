import React from 'react'
import "./solutionCard.css"
import cardbgImg from "../../../../components/Images/bgImg.png"
import { useTranslation } from 'react-i18next'

const SolutionCard = () => {
  const { t } = useTranslation() 
  return (
    <div className='solutionCard-container'>
        <div className="left-container">
            <img src={cardbgImg} alt="cardBgimg" />
        </div>
        <div className="right-container">
            <p>{t("about")}</p>
            <h1>{t("cardTitle")}</h1>
            <p>{t("cardSubTitle")}</p>
            <span id='readNow'>
                <p>{t("readNow")} →</p>
            </span>
        </div>
    </div>
  )
}

export default SolutionCard;