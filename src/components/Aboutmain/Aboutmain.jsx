import React from "react";
import "./Aboutmain.scss";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";


const Aboutmain = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_text_parent">
            <div className="text_aqvo_end">
              <div className="aqvo_top">
                <div className="icon">
                  <NavLink to={"/"}>
                    <GoArrowLeft />
                  </NavLink>
                </div>
                <div className="aqvo_h1">
                  <h1>Aqvo - sifatli konserva mahsulotlari</h1>
                </div>
              </div>
              <div className="aqvo_end">
                <div className="end-img">
                  <img src="public/About/about1-BsQ34AeK.jpg" alt="" />
                </div>
                <div className="end_text">
                  <h1>
                    <span> AQVO Jiz Mahsulotlari </span>AQVO – O‘zbekistonda
                    birinchi bo‘lib sifat va halollikni o‘zida mujassam etgan,
                    jiz mahsulotlarini yangicha ta’m va zamonaviy dizaynda
                    taqdim etuvchi yetakchi brend.
                  </h1>

                  <p>
                    {" "}
                    AQVO O‘zbekistondagi yetakchi jiz va kanserva mahsulotlari
                    ishlab chiqaruvchi kompaniyalardan biridir. Biz
                    mijozlarimizga sifat va halollikni o‘zida mujassam etgan,
                    xalqaro talab va standartlarga javob beradigan jiz
                    mahsulotlarini taqdim etishga intilamiz. Zamonaviy uskunalar
                    va ilg‘or texnologiyalarni qo‘llagan holda, mahsulotlarimiz
                    ishlab chiqarish jarayoni qat'iy sifat nazorati ostida
                    amalga oshiriladi. Har bir AQVO jiz mahsuloti, uning
                    xavfsizligi va iste’molga yaroqliligini ta'minlash uchun bir
                    nechta sinov va tekshiruv bosqichlaridan o‘tkaziladi. AQVO –
                    bu sifat, halollik va xavfsizlikning ramzi.
                  </p>
                </div>
              </div>
              <div className="aqvo_old">
                <div className="old_text">
                  <h1>
                    <span> AQVO</span>
                    AQVO Jiz Mahsulotlari: Yangi Dizayn, Yangicha Ta’m
                  </h1>

                  <p>
                    {" "}
                    AQVO brendi jiz mahsulotlarini yangi, zamonaviy qadoq
                    dizayni va o‘ziga xos ta’mi bilan taqdim etadi. Bizning
                    mahsulotlarimiz nafaqat yuqori sifatli, balki jozibali va
                    ekologik jihatdan toza qadoqlarda taqdim etiladi. Har bir
                    paket AQVO mahsuloti o‘zining betakror ta’mi va o‘zgacha
                    dizayni bilan mijozlarga nafaqat sifatli, balki vizual zavq
                    ham taqdim etadi.
                  </p>
                </div>
                <div className="old_img">
                  <img src="public/About/about2-CmcAd6HZ.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="text_aqvo_old">
              <div className="img-full">
                <img src="public/Header/about-BdVU6kTM.jpg" alt="" />
                <p>
                  AQVO brendi, jiz mahsulotlarini yangicha ta’m va zamonaviy
                  qadoq dizayni bilan taqdim etadi. Mahsulotlarimiz yuqori
                  sifatli, halol va xavfsiz bo‘lib, har bir qadoq o‘zining
                  innovatsion dizayni bilan ajralib turadi. Bizning jiz
                  mahsulotlarimiz xalqaro sifat standartlariga javob berib,
                  zamonaviy texnologiyalar yordamida ishlab chiqariladi. Har bir
                  mahsulot bir nechta qat'iy tekshiruvlardan o‘tkazilib, ta'mi
                  va sifatiga kafolat beradi. AQVO mahsulotlari nafaqat mazali,
                  balki dizayni va ekotexnologiyasi bilan ham mijozlarimizni
                  qadrlashadi. Biz sifat va dizaynning mukammal uyg‘unligini
                  ta’minlab, har bir iste’molchiga yuqori sifatli mahsulotlarni
                  taqdim etishga intilamiz. AQVO – bu yangicha ta’m va zamonaviy
                  dizaynni
                </p>
              </div>

              <div className="countres">

                 <h1>BIZNING SERTIFIKATLARIMIZ</h1>

                <div className="boxses">
                
                  <div className="box">
                    <img src="public/About/sertifikat-BmzS-eGb.png" alt="" />
                  </div>
                  <div className="box">
                    <img src="public/About/sertifikat2-BfTQyCtw.png" alt="" />
                  </div>
                  <div className="box">
                    <img src="public/About/sertifikat4-C_micJnq.png" alt="" />
                  </div>
                  <div className="box">
                    <img src="public/About/ertifikat3-CwOaJh6o.png" alt="" />
                  </div>
                </div>
                
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmain;
