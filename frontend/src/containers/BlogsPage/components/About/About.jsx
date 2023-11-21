import React from 'react'
import "./About.css"
import { useTranslation } from 'react-i18next'

const AboutSection = () => {

    const {t} = useTranslation();
  return (
    <div className='about-container'>
        <div className="aboutLeft-container">

        </div>
        <div className="aboutRight-container">
            <div className="MainText">
                <h2>{t("about")}</h2>
                <h1>{t("blogsTitle")}</h1>
                <p>{t("cardSubTitle")}{t("cardSubTitle")}</p>
            </div>
            <div className="LowerText">
                <div className="NumsHolder">
                    <div className="projecstNum">
                        <h1>82</h1>
                        <p>{t("projects")}</p>
                    </div>
                    <div className="clientsNum">
                        <h1>36</h1>
                        <p>{t("clients")}</p>
                    </div>
                </div>
                <span>
                    <p>{t("readNow")} →</p>
                </span>
            </div>
            
        </div>
    </div>
  )
}

export default AboutSection;