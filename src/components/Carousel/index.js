import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper";

const Carousel = (props) => {
  const {
    children,
    slidesPerGroup,
    slidesPerView,
    autoplay,
    navigation,
    spaceBetween1200,
    slidesPerView1200,
    spaceBetween1024,
    slidesPerView1024,
    slidesPerView768,
    spaceBetween768,
    slidesPerView567,
    spaceBetween567,
    slidesPerView480,
    spaceBetween480,
    slidesPerView280,
    spaceBetween280,
    carouselclass,
  } = props;

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={5}
      slidesPerGroup={slidesPerGroup}
      loop={false}
      freeMode={true}
      pagination={false}
      navigation={navigation}
      autoplay={autoplay}
      modules={[Pagination, Navigation, Autoplay]}
      className={` max-h-fit ${carouselclass}`}
      breakpoints={{
        280: {
          slidesPerView: slidesPerView280,
          spaceBetween: spaceBetween280,
        },
        480: {
          slidesPerView: slidesPerView480,
          spaceBetween: spaceBetween480,
        },
        567: {
          slidesPerView: slidesPerView567,
          spaceBetween: spaceBetween567,
        },
        768: {
          slidesPerView: slidesPerView768,
          spaceBetween: spaceBetween768,
        },
        1024: {
          slidesPerView: slidesPerView1024,
          spaceBetween: spaceBetween1024,
        },
        1200: {
          slidesPerView: slidesPerView1200,
          spaceBetween: spaceBetween1200,
        },
      }}
    >
      {children}
    </Swiper>
  );
}

export default Carousel;
