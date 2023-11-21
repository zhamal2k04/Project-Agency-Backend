import React from "react";
import "./MainCard.css";
import { useTranslation } from "react-i18next";

const MainCard = () => {
  const {t} = useTranslation()
  return (
    <div className="MainCard-container">
      <div className="maincardLeft-container">
        <div className="lowerContent-text">
          <h1>{t("blogTitle")}</h1>
          <p>
            {t("blogText")}
          </p>
          <span>{t("blogText2")}</span>
        </div>
      </div>
      <div className="maincardRight-container"></div>
    </div>
  );
};

export default MainCard;
