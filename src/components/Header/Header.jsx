import React, { useState } from "react";
import "./Header.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Header = () => {
  const [open, setOpen] = useState(false); // Ochiq/yopiq holatni boshqarish

  const handleClose = () => {
    setOpen(false); // Modalni yopish uchun holatni yangilaydi
  };

  const handleOpen = () => {
    setOpen(true); // Modalni ochish uchun holatni yangilaydi
  };
  return (
    <div className="header">
      <div className="marquee-wrapper">
        <div className="rfm-marquee-container">
          <div className="rfm-marquee">
            <div className="rfm-child">
              <div className="oswald">
                Tabiiy mahsulotlar! Sifat va ishonch!
              </div>
            </div>
          </div>
          <div className="rfm-marquee">
            <div className="rfm-child">
              <div className="oswald">
                Tabiiy mahsulotlar! Sifat va ishonch!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-parent">
          <div className="text">
            <p>
              AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida
              mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy
              dizaynda taqdim etuvchi yetakchi brend.
            </p>
          </div>
          <div className="concat" onClick={() => setOpen(true)}>
            <div className="concat-parent">
              <div className="concat-img">
                <img src="/Header/logo-BftKQ4bE.png" alt="" />
              </div>

              <div className="concat-text">
                <h2>Buyurtma</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={open ? "Open activ" : "Open"} onClick={handleClose}>
          <div className="open-chiled" onClick={(e) => e.stopPropagation()}>
            <div className="edit" onClick={handleClose} ><AiOutlineCloseCircle/></div>
            <form>
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="Familyangiz" />
              <input type="number" placeholder="Telefon raqamingiz" />
              <input type="text" placeholder="Telegram username" />
              <input type="text" placeholder="Hudud" />
              <select defaultValue={""}>
              <option value="" disabled selected>Xizmat turini tanlang</option>
                <option value="">Продукт</option>
                <option value="">Франшиза</option>
              </select>

                <textarea placeholder="Xabar"></textarea>

               <button type="submit">Yuborish</button>
              
            </form>
          </div>
        </div>
      </div>
      <div className="header-full">
        <img src="/Header/about-BdVU6kTM.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
