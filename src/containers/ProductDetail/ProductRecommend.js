import React from "react";
import tw from "tailwind-styled-components";
import { Card, Carousel } from "@components";
import { SwiperSlide } from "swiper/react";
import {MdChevronRight} from "react-icons/md";
import styled from "styled-components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import { ExtraValues, NutritionValues, Specification } from "./widgets";

const ProductRecommend = () => {
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
          navigation={true}
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
        >
          {[...Array(12)].map((index) => {
            return (
              <SwiperSlide className="mb-1" key={index}>
                <Card
                  className="mr-[13.5px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70l"}
                  productImg={jackDaniel}
                  iconName={plusIcon}
                  deleteIcon={deleteIcon}
                />
              </SwiperSlide>
            );
          })}
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
            nextEl:".swiper-next",
            prevEl:".swiper-prev"
          }}
        >
          {[...Array(12)].map((index) => {
            return (
              <SwiperSlide className="mb-1" key={index}>
                <Card
                  className="mr-[13.5px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70l"}
                  productImg={jackDaniel}
                  iconName={plusIcon}
                  deleteIcon={deleteIcon}
                />
              </SwiperSlide>
            );
          })}
          <BtnNxt className="swiper-next">
            <MdChevronRight size={25}/>
          </BtnNxt>
          <BtnPrv className="swiper-prev">
            prev
          </BtnPrv>
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

const BtnNxt = styled.button`
  top: 40%;
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
`;

const BtnPrv = styled.button`
display : none;
`;

export default ProductRecommend;
