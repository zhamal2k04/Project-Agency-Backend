import React from 'react';
import "./LowerCard.css";
import rightContainerImg from "../../../../components/Images/rightContainerImg.png"
import { useTranslation } from 'react-i18next';

const LowerCard = () => {
  const {t} = useTranslation()
  return (
    <div className='lowerCard-container'>
        <div className="lowerCard_leftContainer">
            <h2>{t("feature")}</h2>
            <h1>{t("contactUs")}</h1>
            <p>{t("cardSubTitle")}</p>
            <span id='readNow'>
                <p>{t("readNow")} →</p>
            </span>
        </div>
        <div className="lowerCard_rightContainer">
            <img src={rightContainerImg} alt="CardImg" />
        </div>
    </div>
  )
}

export default LowerCard;