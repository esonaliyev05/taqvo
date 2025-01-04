import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="swiper">
          <div className="swiper-parent">
            <img src="Swiper/Background.png" alt="" />
            <div className="text">
              <h1>Aqvo brendi haqida</h1>
              <p>
                Aqvo – sifat va halollikni o‘zida mujassam etgan, innovatsion
                yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy
                dizaynda taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jiz
                mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan
                holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar
                ishonchini qozonib kelmoqda.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="swiper-parent">
            <img src="Swiper/Background.png" alt="" />
            <div className="text">
              <h1>Mahsulot turlari</h1>
              <p>
                Aqvo brendi hozirda mol go‘shtli, tovuq go‘shtli va qo‘y
                go‘shtli mahsulotlar bilan iste’molchilarga xizmat ko‘rsatmoqda.
                Har bir mahsulotimiz o‘ziga xos yuqori sifat, yangicha ta’m va
                halollik tamoyillariga asoslangan holda ishlab chiqariladi. Aqvo
                – bu mazali va ishonchli mahsulotlarning yorqin timsoli.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="swiper-parent">
            <img src="Swiper/Background.png" alt="" />
            <div className="text">
              <h1>Yetkazib berish ko‘lami</h1>
              <p>Aqvo brendi o‘z mahsulotlarini keng hududlarga yetkazib berishni tashkil etib, sifat va tezkorlikni birinchi o‘ringa qo‘yadi. Bizning yetkazib berish tarmog‘imiz orqali mahsulotlar O‘zbekistonning barcha hududlariga o‘z vaqtida yetib boradi. Aqvo – har doim sizga yaqin, har doim ishonchli.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
