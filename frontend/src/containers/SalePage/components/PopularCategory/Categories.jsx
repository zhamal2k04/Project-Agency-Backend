import React from 'react'
import "./Categories.css"
import { useTranslation } from 'react-i18next'

const PopCategories = () => {
  const { t } = useTranslation();
  return (
    <div className='categories-container'>
          <span><h1>{t("pplrCategories")}</h1></span>
          <div className="categoriesHandler">
              <div className="categoriesLeft-section">
                  <section></section>
                  <section></section>
              </div>
              <div className="categoriesRight-section">
                  <section></section>
                  <section></section>
              </div>
          </div>
    </div>
  )
}

export default PopCategories;