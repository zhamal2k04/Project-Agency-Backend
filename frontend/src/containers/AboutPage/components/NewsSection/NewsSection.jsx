import React from "react";
import "./NewsSection.css";
import newsImg from "../../../../components/Images/newsImg.png";
import newsImg2 from "../../../../components/Images/newsImg2.png";
import { useTranslation } from "react-i18next";

const NewsSection = () => {
  const {t} = useTranslation()
  return (
    <div className="newsSection">
        <span><h1>{t("pplrNews")}</h1></span>
      <div className="sectionsHandler">
        <div className="sectionLeft">
          <img src={newsImg} alt="newsImg" />
          <p>13 {t("may")}, 2023</p>
          <h1>{t("pplrNewsTitle")}</h1>
          <span>
            <p>
              {t("cardSubTitle")}<br/>{t("cardSubTitle")}
            </p>
          </span>
        </div>
        <div className="sectionRight">
          <img src={newsImg2} alt="newsImg" />
          <p>13 {t("may")}, 2023</p>
          <h1>{t("pplrNewsTitle2")}</h1>
          <span>
            <p>
             {t("cardSubTitle")}<br/>{t("cardSubTitle")}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
