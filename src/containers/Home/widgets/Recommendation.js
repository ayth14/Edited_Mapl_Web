import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Card, Container, HeadingText, Carousel } from "@components";
import { SwiperSlide } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import group5 from "@assets/images/group5.png";

const Recommendation = () => {
  const [isOn, setIsOn] = useState();

  const cardClick = (e) => {
   console.log(e, 'eeev')
    setIsOn(e);
  };

  return (
    <Container className="md:flex-col xl:flex-row lg:flex-row flex-col">
      <RecommendProduct>
        <RecommendTitle>
          <HeadingText className="font-bold text-left">
            {"Our Recommendations"}
          </HeadingText>
        </RecommendTitle>
        <Carousel
          slidesPerGroup={1}
          autoplay={false}
          spaceBetween1200={14}
          slidesPerView1200={4}
          spaceBetween1024={14}
          slidesPerView1024={3}
          slidesPerView768={3}
          spaceBetween768={6}
          slidesPerView567={4}
          spaceBetween567={5}
          slidesPerView480={3}
          spaceBetween480={5}
          slidesPerView280={1}
          spaceBetween280={5}
          carouselclass={"lg:w-full sm:w-full w-6/12"}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: ".swiper-dis",
          }}
        >
          {[...Array(30)].map((slide, index) => {
            return (
              <SwiperSlide
                className="mb-1 first:ml-0.5 ml-0 last:mr-1"
                key={index}
                style={{ width: "auto" }}
              >
                <Card
                  onClick={() => cardClick(index)}
                  id={index}
                  className="4xl:w-auto 2xl:w-auto xl:w-auto w-auto"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  isId={isOn}
                  addable={true}
                  recommendtag={"RECOMMENDED"}
                />
              </SwiperSlide>
            );
          })}
          <NxtBtn className={"swiper-next"}>
            <MdChevronRight size={22} />
          </NxtBtn>
          <PrvBtn className={"swiper-prev"}>
            <MdChevronLeft size={22} />
          </PrvBtn>
        </Carousel>
      </RecommendProduct>
      <RecommendBanner>
        <BannerContainer>
          <BannerContent>
            <Img src={group5} alt="" />
            <BannerLink>
              <CustomText>{"Our gin range"}</CustomText>
              <CustomButton>{"Discover it Now"}</CustomButton>
            </BannerLink>
          </BannerContent>
        </BannerContainer>
      </RecommendBanner>
    </Container>
  );
};

const RecommendProduct = tw.div`
2xl:w-7/12
xl:w-7/12 
lg:w-6/12 
md:w-full
w-full
xl:mb-0
sm:mb-4
mr-4
mb-4
relative
flex
flex-col
items-center
`;

const RecommendBanner = tw.div`
2xl:w-5/12
xl:w-5/12 
lg:w-6/12 
md:w-full
xl:mb-1
lg:mb-5
poniter-events-none
`;

const RecommendTitle = tw.div`
py-2
text-left
w-full
`;

const BannerContainer = tw.div`
w-full 
h-full 
flex
`;

const BannerContent = tw.div`
w-full 
h-full 
relative 
`;

const Img = tw.img`
w-full 
h-full 
object-cover 
object-center
lg:static 
xl:absolute 
pointer-events-none
`;

const BannerLink = tw.div`
absolute 
w-full
flex
flex-col
text-center
top-[1pc]
`;

const CustomText = tw.span`
text-white
md:text-4xl
sm:text-2xl
font-[Montserrat] 
font-semibold 
`;

const CustomButton = tw.button`
bg-white
text-color456
mx-auto
rounded-md
mt-5
md:p-3
sm:p-2
sm:px-6
md:px-9
md:text-[15px]
sm:text-[12px]
text-bold
`;

const NxtBtn = styled("button")`
   {
    top: 45%;
    right: 0;
    margin-right: 10px;
    position: absolute;
    backdrop-filter: blur(50px);
    border-radius: 100%;
    background: rgba(211, 206, 210, 0.8);
    box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.16);

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
    top: 45%;
    left: 0px;
    margin-right: 10px;
    position: absolute;
    border-radius: 100%;
background: rgba(211,206,210,0.8);
box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.16);

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
  
`;

export default Recommendation;