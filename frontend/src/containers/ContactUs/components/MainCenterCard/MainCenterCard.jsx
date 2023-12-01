import React, { useState } from 'react'
import "./MainCenterCard.css"
import amanda from "../../../../components/Images/amanda.jpg"
import LeafLet from '../LocationCard/LocationCard'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const MainCenterCard = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
      
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const { name, email, comment } = formData;
            const response = await axios.post("http://localhost:5500/api/submitForm", {
                name,
                email,
                comment,
            });
    
            if (response.status === 200) {
                console.log("Form data sent successfully");
                window.location.replace("http://localhost:3000/home");
            }
        } catch (err) {
            console.log("Error occurred while sending form data:", err);
        }
    };
    
    

  return (
    <div className='mainCenterCard-container'>
        <h1>{t('ContactUs')}</h1>
        <div className="componentsHandler">
            <div className="leftComponent">
                <h1>{t("btnSentence")}</h1>
                <div className="text-help">
                    <img src={amanda} alt="/photo" />
                    <span>
                        <p>{t("helperText")} hello@california-golfclub.org.</p>
                    </span>
                </div>
                <form onSubmit={handleClick}>
                    <label>Name</label>
                    <input type="text" value={formData.name} onChange={handleChange} name='name' id='name' placeholder='Rachel Joe'/>
                    <label>Email</label>
                    <input type="email" value={formData.email} onChange={handleChange} name='email' id='email' placeholder='Rachel@domain.com'/>
                    <label>Message</label>
                     <textarea name="comment" value={formData.comment} onChange={handleChange} id="comment" placeholder='Type your query here'></textarea>
                    <input type="submit" value={t("btnText")} id='submit'/>
                </form>
            </div>
            <div className="rightComponent">
                <LeafLet/>
            </div>
        </div>
    </div>
  )
}

export default MainCenterCard