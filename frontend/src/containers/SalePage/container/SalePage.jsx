import React from 'react'
import "./SalePage.css"
import PopCategories from '../components/PopularCategory/Categories'
import ScheduleEvents from '../components/ScheduleEvents/ScheduleEvents'
import ProfTeam from '../components/ProfTeam/ProfTeam'
import LoweredSection from '../components/LoweredSection/LoweredSection'


const SalePage = () => {
  return (
    <div className='salePage-container'>
        <PopCategories/>
        <ScheduleEvents/>
        <ProfTeam/>
        <LoweredSection/>
    </div>
  )
}

export default SalePage