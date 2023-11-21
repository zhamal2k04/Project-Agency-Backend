import React from 'react'
import "./CommentSection.css"
import fiveStar from "../../../../components/Images/fiveStar.png"
import { useTranslation } from 'react-i18next'

const CommentSection = () => {
    const {t} = useTranslation()
  return (
      <div className="commentSection">
            <span><h1>{t("whatPeopleSay")}</h1></span>
                <div className="sectionHandler">
                    <div className="leftSection">
                        <img src={fiveStar} alt="fiveStar" />
                        <p>{t("lorem")}</p>
                        <h1>{t('commentName')}</h1>
                        <span><p>{t("youtube")}</p></span>
                    </div>
                    <div className="rightSection">
                    <img src={fiveStar} alt="fiveStar" />
                        <p>{t("lorem")}</p>
                        <h1>{t("commentName2")}</h1>
                        <span><p>{t("twitch")}</p></span> 
                    </div>
                </div>
        </div>
  )
}

export default CommentSection