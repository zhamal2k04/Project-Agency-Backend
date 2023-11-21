import React from 'react'
import "./LowCard.css"
import blackPlayer from "../../../../components/Images/black-player.png"
import { useTranslation } from 'react-i18next'

const LowCard = () => {
  const {t} = useTranslation();
  return (
    <div className='lowCard-container'>
        <h1>{t("player")}</h1>
        <img src={blackPlayer} alt="blackPlayer" />
    </div>
  )
}

export default LowCard