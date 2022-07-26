import React from "react";
import tw from "tailwind-styled-components";
import { Carousel } from "@components";
import { SwiperSlide } from "swiper/react";
import {MdChevronRight} from "react-icons/md";
import styled from "styled-components";
import { ExtraInformation, NutritionValue, Description } from "./widgets";

const ProductRecommend = () => {
  const productInfo = [
    { element: <Description /> },
    { element: <NutritionValue /> },
    { element: <ExtraInformation /> },
  ];
  return (
    <Container>
      <OtherProduct>
        <Carousel
          autoplay={false}
          slidesPerGroup={1}
          slidesPerView={2.55}
          slidesPerView1200={2.45}
          spaceBetween1200={100}
          slidesPerView1024={2.45}
          spaceBetween1024={100}
          slidesPerView768={2}
          spaceBetween768={50}
          slidesPerView567={1}
          spaceBetween567={50}
          slidesPerView480={1.5}
          spaceBetween480={30}
          slidesPerView280={2}
          spaceBetween280={5}
          carouselclass={"w-full h-full"}
          navigation = {
            {
              nextEl : ".info-next",
              prevEl : ".info-prev",
            }
          }
        >
          {productInfo.map((info, index) => {
            return <SwiperSlide style={{width : "100% !important",}} key={index}>{info.element}</SwiperSlide>;
          })}
          <BtnNxt className="info-next">
            <MdChevronRight size={48}/>
          </BtnNxt>
        </Carousel>
      </OtherProduct>
    </Container>
  );
};
const Container = tw.div`
py-6
`;

const OtherProduct = tw.div`
px-4
py-10
`;

const BtnNxt = styled.button`
{  top: 40%;
  right: 0;
  margin-right: 10px;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(50px);
  border-radius: 100%;
  box-shadow : 0 3px 6px 0 rgb(0,0,0, 0.16);
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  z-index: 2;
  outline: none;
  border: none;
}&:disabled {
  display : none; 
}
  
`;

export default ProductRecommend;
