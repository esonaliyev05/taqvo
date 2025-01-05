import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const Navbar = ({ handleOpen }) => {
  const [bars, setBars] = useState(false);
  const language = localStorage.getItem('i18nextLng') || "uz";
  const { t, i18n } = useTranslation();

  const HandelChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  }

  return (
    <div className='nav'>
      <div className="container">

        <ul>
          <li><NavLink to={"/"}>{t("Bosh sahifa")}</NavLink></li>
          <li><NavLink to={"about"}>{t("Biz haqimizda")}</NavLink></li>
        </ul>

        <div className="logo">
          <img src="/Nav-logo/a7a74a802a650e351373ebac10d99ef7.png" alt="" />
        </div>

        <div className="concat">
          <select name='Lng' id='lng' onChange={(e) => HandelChange(e.target.value)} value={language}>
            <option value="uz">UZB</option>
            <option value="ru">RU</option>
            <option value="en">ENG</option>
          </select>
          <button onClick={handleOpen}>{t("Bog'lanish")}</button>
          <FaBars className='bars' onClick={() => setBars(true)} />
        </div>

      </div>

      <div className={bars ? "bars-open activ" : "bars-open"}>
        <div className="edit" onClick={() => setBars(false)}><AiOutlineCloseCircle />
        </div>

        <div className="bars-parent">
          <div className="logo">
            <img src="/Nav-logo/a7a74a802a650e351373ebac10d99ef7.png" alt="" />
          </div>

          <ul>
            <li><NavLink to={"/"}>{t("Bosh sahifa")}</NavLink></li>
            <li><NavLink to={"about"}>{t("Biz haqimizda")}</NavLink></li>
          </ul>

          <div className="traslation">
            <div className={`laguech ${language === 'uz' ? 'active' : ''}`} onClick={() => HandelChange('uz')}>UZ</div>
            <div className={`laguech ${language === 'ru' ? 'active' : ''}`} onClick={() => HandelChange('ru')}>RU</div>
            <div className={`laguech ${language === 'en' ? 'active' : ''}`} onClick={() => HandelChange('en')}>EN</div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar;
