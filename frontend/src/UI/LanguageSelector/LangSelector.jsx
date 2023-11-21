import React from 'react';
import { useTranslation } from 'react-i18next';
import "./LangSelector.css"
import i18n from '../../i18n';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
