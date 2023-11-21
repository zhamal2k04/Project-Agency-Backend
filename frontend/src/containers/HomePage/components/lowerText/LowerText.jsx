import React from 'react';
import "./LowerText.css";
import dot from "../../../../components/Images/dot.png"
import { useTranslation } from 'react-i18next';

const LowerText = () => {
    const { t } = useTranslation()  
  return (
    <div className='lowerText-container'>
        <div className="leftContainer">
            <h1>{t("lowerCardTitle")}</h1>
            <p>{t("lowerCardSubTitle")}</p>
            <ul>
                <li>{t("listOne")}</li>
                <li>{t("listTwo")}</li>
                <li>{t("listThree")}</li>
            </ul>
            <span id='readNow'>
                <p>{t("readNow")} →</p>
            </span>
        </div>
        <div className="rightContainer">
            <h1>{t("lowerCardTitle2")}</h1>
            <p>{t("lowerCardSubTitle")}</p>
            <ul>
                <li>{t("listOne")}</li>
                <li>{t("listTwo")}</li>
                <li>{t("listThree")}</li>
            </ul>
            <span id='readNow'>
                <p>{t("readNow")} →</p>
            </span>
        </div>
    </div>
  )
}

export default LowerText;