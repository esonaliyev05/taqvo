import React, { useState } from "react";
import "./Header.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    username: "",
    region: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handler = () => {
    e.target.preventDefault();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, service } = formData;

    if (!name || !phone || !service) {
      alert("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
      // setStatus();
      return;
    }

    const botToken = "7503841323:AAE2gFD76hfKiFh6KTEpqu4lL69HAWejKEE";
    const chatId = "6992354984"; // Chat ID ni kiritishni unutmang
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `
      📝 Yangi buyurtma:
      🔹 Ism: ${formData.name}
      🔹 Familiya: ${formData.surname}
      🔹 Telefon: ${formData.phone}
      🔹 Telegram: ${formData.username}
      🔹 Hudud: ${formData.region}
      🔹 Xizmat turi: ${formData.service}
      🔹 Xabar: ${formData.message}
    `;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (response.ok) {
        alert("Xabar muvaffaqiyatli yuborildi!");
        setStatus("Xabar muvaffaqiyatli yuborildi!");
        setFormData({
          name: "",
          surname: "",
          phone: "",
          username: "",
          region: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("Xatolik yuz berdi, qayta urinib ko‘ring.");
        alert("Xatolik yuz berdi, qayta urinib ko‘ring.");
      }
    } catch (error) {
      setStatus(`Server xatosi: ${error.message}`);
    }
  };

  return (
    <div className="header">


      <div className="container">

      <Marquee className="Marque">
         <h1>Tabiiy mahsulotlar! Sifat va ishonch! Tabiiy mahsulotlar! Sifat va ishonch!</h1>
        </Marquee>


        <div className="header-parent">
          <div className="text">
            <p>
              AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida
              mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy
              dizaynda taqdim etuvchi yetakchi brend.
            </p>
          </div>
          <div className="concat" onClick={handleOpen}>
            <div className="concat-parent">
              <div className="concat-img">
                <img src="/Header/logo-BftKQ4bE.png" alt="Logo" />
              </div>
              <div className="concat-text">
                <h2>Buyurtma</h2>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div className="Open activ" onClick={handleClose}>
            <div className="open-chiled" onClick={(e) => e.stopPropagation()}>
              <div className="edit" onClick={handleClose}>
                <AiOutlineCloseCircle />
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ismingiz"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Familyangiz"
                  value={formData.surname}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Telefon raqamingiz"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Telegram username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="region"
                  placeholder="Hudud"
                  value={formData.region}
                  onChange={handleInputChange}
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Xizmat turini tanlang
                  </option>
                  <option value="Продукт">Продукт</option>
                  <option value="Франшиза">Франшиза</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Xabar"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <button type="submit" onClick={handler}>
                  Yuborish
                </button>
              </form>
              {status && <p style={{ color: "red" }}>{status}</p>}
            </div>
          </div>
        )}
      </div>

      <div className="header-full">
        <img src="/Header/about-BdVU6kTM.jpg" alt="About" />
      </div>
    </div>
  );
};

export default Header;
