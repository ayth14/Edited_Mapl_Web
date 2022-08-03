import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Card, Carousel } from "@components";
import { SwiperSlide } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import { ExtraValues, NutritionValues, Specification } from "./widgets";

const ProductRecommend = () => {
  const [isOn, setIsOn] = useState();
  
  const cardClick = (e) => {
    setIsOn(e);
  };
  
  const productInfo = [
    { element: <Specification /> },
    { element: <NutritionValues /> },
    { element: <ExtraValues /> },
  ];

  return (
    <Container>
      <ProductContent>
        <ProductTitle>
          <span className="text-2xl font-bold font-raleway">
            {"More From This Brand"}
          </span>
        </ProductTitle>
        <Carousel
          autoplay={false}
          slidesPerGroup={6}
          slidesPerView={6}
          slidesPerView1200={6}
          spaceBetween1200={6}
          slidesPerView1024={6}
          spaceBetween1024={6}
          slidesPerView768={4}
          spaceBetween768={5}
          slidesPerView567={2}
          spaceBetween567={5}
          slidesPerView480={2}
          spaceBetween480={5}
          slidesPerView280={2}
          spaceBetween280={5}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: ".swiper-dis",
          }}
        >
          {[...Array(12)].map((card, idx) => {
            return (
              <SwiperSlide
                className="mb-1 first:ml-1 ml-0 last:mr-1"
                key={idx}
              >
                <Card
                  onClick={() => cardClick(idx)}
                  id={idx}
                  className="4xl:w-[170px] 2xl:w-[155px] xl:w-[130px] w-[135px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  isOn={isOn}
                  addable={true}
                />
              </SwiperSlide>
            );
          })}
          <NxtBtn className={"swiper-next"}>
            <MdChevronRight size={22}/>
          </NxtBtn>
          <PrvBtn className={"swiper-prev"}>
            <MdChevronLeft size={22}/>
          </PrvBtn>
        </Carousel>
      </ProductContent>
      <ProductContent>
        <Carousel
          autoplay={false}
          slidesPerGroup={2}
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
          navigation={{
            nextEl: ".info-next",
            prevEl: ".info-prev",
            disabledClass: ".swiper-dis",
          }}
        >
          {productInfo.map((info, index) => {
            return (
              <SwiperSlide style={{ width: "100% !important" }} key={index}>
                {info.element}
              </SwiperSlide>
            );
          })}
          <Btn className="info-next swiper-dis">
            <MdChevronRight size={48} />
          </Btn>
          <Btn className="info-prev swiper-dis">
            <MdChevronLeft size={48} />
          </Btn>
        </Carousel>
      </ProductContent>

      <OtherProduct>
        <ProductTitle>
          <span className="text-2xl font-bold font-raleway">
            {"Other Recommendations"}
          </span>
        </ProductTitle>
        <Carousel
          autoplay={false}
          slidesPerGroup={6}
          slidesPerView={6}
          slidesPerView1200={6}
          spaceBetween1200={6}
          slidesPerView1024={6}
          spaceBetween1024={6}
          slidesPerView768={4}
          spaceBetween768={5}
          slidesPerView567={2}
          spaceBetween567={5}
          slidesPerView480={2}
          spaceBetween480={5}
          slidesPerView280={2}
          spaceBetween280={5}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: ".swiper-dis",
          }}
        >
          {[...Array(12)].map((card, idx) => {
            return (
              <SwiperSlide className="mb-1" key={idx}>
                <Card
                  onClick={() => cardClick(idx)}
                  id={idx}
                  className="4xl:w-[170px] 2xl:w-[155px] xl:w-[130px] w-[135px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  isId={isOn}
                  addable={true}
                />
              </SwiperSlide>
            );
          })}
          <Btn className="swiper-next">
            <MdChevronRight size={25} />
          </Btn>
          <Btn className="swiper-prev">
            <MdChevronLeft size={25} />
          </Btn>
        </Carousel>
      </OtherProduct>
    </Container>
  );
};

const Container = tw.div`
py-6
`;

const ProductContent = tw.div`
px-4
py-10
border-y
border-color235
`;

const ProductTitle = tw.div`
pb-6
text-color456
text-center
`;

const OtherProduct = tw.div`
px-4
py-10
`;

const Icon = tw.img`
w-auto
h-[14px]
`;

const Btn = styled("button")`
   {
    top: 40%;
    right: 0;
    margin-right: 10px;
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    border-radius: 100%;
    box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.16);
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
    &:disabled {
      display: none;
    }
  }
`;

const NxtBtn = styled("button")`
   {
    top: 50%;
    right: 0;
    margin-right: 10px;
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    border-radius: 100%;
    box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.16);
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    z-index: 2;
    outline: none;
    border: none;
    &:disabled {
      display: none;
    }
  }
`;

const PrvBtn = styled("button")`
   {
    top: 50%;
    left: 0;
    margin-right: 10px;
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(50px);
    border-radius: 100%;
    box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.16);
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    z-index: 2;
    outline: none;
    border: none;
    &:disabled {
      display: none;
    }
  }
`;

export default ProductRecommend;
