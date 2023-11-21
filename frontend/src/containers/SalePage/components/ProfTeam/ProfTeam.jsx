import React from 'react'
import "./ProfTeam.css"
import team_1 from "../../../../components/Images/team-1.png"
import team_2 from "../../../../components/Images/team-2.png"
import { useTranslation } from 'react-i18next'


const ProfTeam = () => {
  const {t} = useTranslation();
  return (
    <div className='profTeam-container'>
        <span><h1>{t("profTeam")}</h1></span>
       <div className="SectionsHandler">
            <div className="SectionLeft">
                <img src={team_1} alt="team1Img" />
                <h1>{t("personName")}</h1>
                <p>{t("personJob")}</p>
            </div>
            <div className="SectionRight">
                <img src={team_2} alt="team2Img" />
                <h1>{t("personName2")}</h1>
                <p>{t("personJob2")}</p>
            </div>
        </div>
    </div>
  )
}

export default ProfTeam