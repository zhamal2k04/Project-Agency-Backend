import React from "react";
import "./MainTitle.css"
import { useTranslation } from "react-i18next";

const MainTitle = () => {
  const {t} = useTranslation()
  return (
    <div className="MainTitle">
      <div className="aboutPage-leftContainer">
        <h1>{t('aboutUsTitle')}</h1>
        <p>
         {t("aboutUsText")}
        </p>
      </div>
      <div className="aboutPage-rightContainer"></div>
    </div>
  );
};

export default MainTitle;
