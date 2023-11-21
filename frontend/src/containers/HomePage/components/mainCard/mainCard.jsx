import React from 'react'
import "../mainCard/mainCard.css"
import playerImg from "../../../../components/Images/player.png"
import { useTranslation } from 'react-i18next'


const MainCard = () => {
  const {t} = useTranslation()

  return (
    <div className='mainCard-container'>
        <div className="mainTitle">
            <div className="topText">
                <p>{t("homeTitle")}</p>  
                <h1>{t("homesubtitle")}<br />{t("homesubtitle2")}</h1>
            </div>
            <div className="bottomText">
                <button>{t("btnSentence")}</button>
                <img src={playerImg} alt="playerImg" />
                <h1>{t("player")}</h1>
            </div>  
        </div>
    </div>
  )
}

export default MainCard;