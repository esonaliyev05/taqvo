import React from 'react';
import "./Footer.scss"
import { BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const HandelChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  }
  return (
    <>
     <footer>
      <div className="container">
      <div className="countres-end">
                         
                         <p>{t("Siz izlagan ta’m, sifat, poklik va o‘zgachalik... Barchasi bir nuqtada jamlanib, “Aqvo”'ga aylanadi!")}</p>

                         <div className="icon">
                            <a href=""><BsInstagram/></a>
                            <a href=""><TbBrandTelegram/></a>
                         </div>
                         
                         <p>© {t("Barcha huquqlar himoyalangan")}</p>

                 </div>
      </div>
     </footer>
    </>
  )
}

export default Footer