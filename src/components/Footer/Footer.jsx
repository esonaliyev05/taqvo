import React from 'react';
import "./Footer.scss"
import { BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <>
     <footer>
      <div className="container">
      <div className="countres-end">
                         
                         <p>Siz izlagan ta'm, sifat, poklik va o‘zgachalik... Barchasi bir nuqtada jamlanib, “Aqvo”'ga aylanadi!</p>

                         <div className="icon">
                            <a href=""><BsInstagram/></a>
                            <a href=""><TbBrandTelegram/></a>
                         </div>
                         
                         <p>© Barcha huquqlar himoyalangan</p>

                 </div>
      </div>
     </footer>
    </>
  )
}

export default Footer