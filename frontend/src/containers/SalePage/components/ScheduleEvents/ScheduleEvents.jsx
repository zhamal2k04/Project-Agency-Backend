import React from 'react'
import "./ScheduleEvents.css"
import iconNext from "../../../../components/Images/iconNext.png"
import { useTranslation } from 'react-i18next'

const ScheduleEvents = () => {
    const {t} = useTranslation();
  return (
    <div className='scheduleEvents-container'>
        <span><h1>{t("calendarTitle")}</h1></span>
        <div className="scheduleHandler">
                <div className="Card">
                    <div className="date">
                        <h1>24</h1>
                        <p>{t("may")}, 2023</p>
                    </div>
                    <div className="category">
                        <h1>{t("calendarSubTitle")}</h1>
                        <p>{t("lowerCardSubtitle")}{t("lowerCardSubtitle")}</p>
                    </div>
                    <div className="icon">
                        <img src={iconNext} alt="iconNext" />
                    </div>
                </div>
                <div className="Card">
                    <div className="date">
                        <h1>28</h1>
                        <p>{t("may")}, 2023</p>
                    </div>
                    <div className="category">
                        <h1>{t("calendarSubTitle")}</h1>
                        <p>{t("lowerCardSubtitle")}{t("lowerCardSubtitle")}</p>
                    </div>
                    <div className="icon">
                        <img src={iconNext} alt="iconNext" />
                    </div>
                </div>
                <div className="Card">
                    <div className="date">
                        <h1>02</h1>
                        <p>{t("may")}, 2023</p>
                    </div>
                    <div className="category">
                        <h1>{t("calendarSubTitle")}</h1>
                        <p>{t("lowerCardSubtitle")}{t("lowerCardSubtitle")}</p>
                    </div>
                    <div className="icon">
                        <img src={iconNext} alt="iconNext" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ScheduleEvents