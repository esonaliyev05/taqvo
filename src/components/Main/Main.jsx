import React from "react";
import "./Main.scss";
import Swiper from "../SwiperMain/Swiper";
import Marquee from "react-fast-marquee";

const Main = () => {
  return (
    <>
      <main>
        <Swiper />

        <div className="main-section">
          <div className="section-text">
            <h1>
              SIZNING AQVO BILAN <br /> LAHZALARINGIZ
            </h1>

            <img src="/Nav-logo/a7a74a802a650e351373ebac10d99ef7.png" alt="" />

            <div className="btn">
              <button>Bizning Instagram</button>
              <button>Bizning Telegram</button>
            </div>
          </div>

          <div className="marque-left">
            <Marquee speed={50} direction="left" gradient={false}>
              <div className="marquee">
                <img src="public/maque-left/1-DPymZrpy.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/2-BrW5ldnW.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/3-CC1Fv5Ko.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/4-B1ud6FZe.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/5-DgqT6XoF.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/6-Cc5vAtLH.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/7-Dg9MnOAk.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/8-1IjexHLz.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/9-VXZ4ZmsG.jpg" alt="" />
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
                <img src="public/maque-left/1-DPymZrpy.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/2-BrW5ldnW.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/3-CC1Fv5Ko.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/4-B1ud6FZe.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/5-DgqT6XoF.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/6-Cc5vAtLH.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/7-Dg9MnOAk.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/8-1IjexHLz.jpg" alt="" />
              </div>
              <div className="marquee">
                <img src="public/maque-left/9-VXZ4ZmsG.jpg" alt="" />
              </div>
            </Marquee>
          </div>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="main-text">
              <h1>"AQVO" bilan yangicha ta’mni his eting.</h1>

              <p>
                Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi.
                Bizning mahsulotlarimiz har bir iste’molchiga sifatli va
                innovatsion yondashuv orqali yangi, o‘ziga xos ta’mni taqdim
                etadi. Aqvo – bu nafaqat ta’m, balki sog‘lom va halol
                mahsulotlar bilan yangi tajribani his qilish imkoniyati. Yangi
                ta’mni biz bilan birga kashf eting va haqiqiy sifatni his eting!
              </p>

              <ul>
                <p>Bog‘lanish uchun telefon raqamlarimiz:</p>

                <a href="">Tel: +998957724444</a>
                <a href="">Tel: +998996440101</a>
              </ul>
            </div>

            <div className="form">
              <form>
                <input type="text" placeholder="Ismingiz" />
                <input type="text" placeholder="Familyangiz" />
                <input type="text" placeholder="Telefon Raqamingiz" />
                <input type="text" placeholder="Telegram username" />
                <input type="text" placeholder="Hudud" />
                <select name="service">
                  <option value="" disabled>
                    Xizmat turini tanlang
                  </option>
                  <option value="Продукт">Продукт</option>
                  <option value="Франшиза">Франшиза</option>
                </select>

                <textarea placeholder="Xabar"></textarea>

                <button type="submit">Yuborish</button>
              </form>
            </div>
          </div>
        </div>

        <div className="main-countres">
          <div className="container">
            <h1>BIZNING SERTIFIKATLARIMIZ</h1>

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
