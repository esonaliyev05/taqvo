import React, { useState } from "react";
import "./Main.scss";
import Swiper from "../SwiperMain/Swiper";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
const Main = () => {

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

  const [isSubmitting, setIsSubmitting] = useState(false);
   
  const { t, i18n } = useTranslation();

  const HandelChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  }


  const handler = () => {
    e.target.preventDefault();
    setIsSubmitting(true);
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
      setIsSubmitting(false);
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
    } finally{
      setIsSubmitting(false);
    }
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };


  return (
    <>
      <main>
        <Swiper />

        <div className="main-section">
          <div className="section-text">
            <h1>
             {t("SIZNING AQVO BILAN LAHZALARINGIZ")}
            </h1>

            <img src="/Nav-logo/a7a74a802a650e351373ebac10d99ef7.png" alt="" />

            <div className="btn">
              <button onClick={() => handleRedirect("https://www.instagram.com/aqvo_jiz/")}>{t("Bizning Instagram")}</button>
              <button onClick={() => handleRedirect("https://t.me/Alyorbek_Blog")} >{t("Bizning Telegram")}</button>
            </div>
          </div>

          <div className="marque-left">
            <Marquee speed={50} direction="left" gradient={false}>
              <div className="marquee">
                <img src="maque-left/1-DPymZrpy.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/2-BrW5ldnW.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/3-CC1Fv5Ko.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/4-B1ud6FZe.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/5-DgqT6XoF.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/6-Cc5vAtLH.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/7-Dg9MnOAk.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/8-1IjexHLz.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/9-VXZ4ZmsG.jpg" alt="" />
              </div>
            </Marquee>
          </div>
          <div className="marque-right">
            <Marquee
              speed={50}
              direction="right"
              gradient={false}
              // pauseOnHover={true}
              // play={play}
            >
              <div className="marquee">
                <img src="maque-left/1-DPymZrpy.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/2-BrW5ldnW.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/3-CC1Fv5Ko.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/4-B1ud6FZe.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/5-DgqT6XoF.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/6-Cc5vAtLH.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/7-Dg9MnOAk.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/8-1IjexHLz.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="maque-left/9-VXZ4ZmsG.jpg" alt="" />
              </div>
            </Marquee>
          </div>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="main-text">
              <h1>{t("AQVO bilan yangicha ta’mni his eting.")}</h1>

              <p>
               {t("Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi. Bizning mahsulotlarimiz har bir iste’molchiga sifatli va innovatsion yondashuv orqali yangi, o‘ziga xos ta’mni taqdim etadi. Aqvo – bu nafaqat ta’m, balki sog‘lom va halol mahsulotlar bilan yangi tajribani his qilish imkoniyati. Yangi ta’mni biz bilan birga kashf eting va haqiqiy sifatni his eting!")}
              </p>

              <ul>
                <p>{t("Bog‘lanish uchun telefon raqamlarimiz:")}</p>

                <a href="">Tel: +998957724444</a>
                <a href="">Tel: +998996440101</a>
              </ul>
            </div>

            <div className="form">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={t("Ismingiz")} value={formData.name}  onChange={handleInputChange}/>
                <input type="text" name="surname" placeholder={t("Familyangiz")} value={formData.surname} onChange={handleInputChange} />
                <input type="text" name="phone" placeholder={t("Telefon raqamingiz")} value={formData.phone}   onChange={handleInputChange}/>
                <input type="text" name="username" placeholder={t("Telegram username")} value={formData.username}   onChange={handleInputChange}/>
                <input type="text" name="region" placeholder={t("Hudud")} value={formData.region}   onChange={handleInputChange}/>
                <select name={t("service")} value={formData.service} onChange={handleInputChange}  >
                  <option value="" disabled>
                   {t("Xizmat turini tanlang")}
                  </option>
                  <option value="Продукт">{t("Mahsulot")}</option>
                  <option value="Франшиза">{t("Franshiza")}</option>
                </select>

                <textarea placeholder={t("Xabar")} name="message" value={formData.message} onChange={handleInputChange}  ></textarea>

                <button type="submit" onClick={handler} disabled={isSubmitting}>
                {isSubmitting ? "Yuborilmoqda..." : t("Yuborish")}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="main-countres">
          <div className="container">
            <h1>{t("BIZNING SERTIFIKATLARIMIZ")}</h1>

            <div className="boxses">
              <div className="box">
                <img src="/About/sertifikat-BmzS-eGb.png" alt="" />
              </div>
              <div className="box">
                <img src="/About/sertifikat2-BfTQyCtw.png" alt="" />
              </div>
              <div className="box">
                <img src="/About/sertifikat4-C_micJnq.png" alt="" />
              </div>
              <div className="box">
                <img src="/About/ertifikat3-CwOaJh6o.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
