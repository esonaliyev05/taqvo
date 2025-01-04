import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const MovingTextWithSwiper = () => {
  const texts = [
    "Matn 1: Bu birinchi matn.",
    "Matn 2: Bu ikkinchi matn.",
    "Matn 3: Bu uchinchi matn.",
    "Matn 4: Bu to‘rtinchi matn."
  ];

  return (
    <div style={styles.container}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0, // To‘xtovsiz harakat
          disableOnInteraction: false,
        }}
        speed={3000} // Harakat tezligi (ms)
      >
        {texts.map((text, index) => (
          <SwiperSlide key={index}>
            <div style={styles.text}>{text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100px",
    overflow: "hidden",
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: "24px",
    color: "#fff",
    textAlign: "center",
  },
};

export default MovingTextWithSwiper;
