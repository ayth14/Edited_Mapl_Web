import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Card, HeadingText, Container, Carousel } from "@components";
import { SwiperSlide } from "swiper/react";
import product from "@assets/images/product6.png";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";

const NewRelease = () => {
  const [isOn, setIsOn] = useState();
  
  const cardClick = (e) => {
    setIsOn(e);
  };
  return (
    <Container className="md:flex-col xl:flex-row lg:flex-row flex-col">
      <NewReleaseBanner>
        <BannerContainer>
          <BannerContent>
            <Img src={product} alt="" />
          </BannerContent>
        </BannerContainer>
      </NewReleaseBanner>
      <NewReleaseProduct>
        <NewReleaseTitle>
          <HeadingText className="font-bold pl-0 lg:pl-3">New Release</HeadingText>
        </NewReleaseTitle>
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
              <SwiperSlide className="mb-1 first:ml-0.5 ml-0 last:mr-1" key={index} style={{width : "auto"}}>
                <Card
                  onClick={() => cardClick(index)}
                  id={index}
                  className="4xl:w-auto 2xl:w-auto xl:w-auto w-auto sm:first:left-0 lg:first:left-3"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  isId={isOn}
                  addable={true}
                  newtag={"New"}
                />
              </SwiperSlide>
            );
          })}
          <NxtBtn className={'swiper-next'}>
            <MdChevronRight size={22}/>
          </NxtBtn>
          <PrvBtn className={'swiper-prev'}>
            <MdChevronLeft size={22}/>
          </PrvBtn>
        </Carousel>
      </NewReleaseProduct>
    </Container>
  );
};

const NewReleaseProduct = tw.div`
2xl:w-7/12
xl:w-7/12 
lg:w-7/12  
md:w-full
relative
flex
flex-col
items-center
`;

const NewReleaseBanner = tw.div`
2xl:w-5/12
xl:w-5/12 
lg:w-5/12 
md:w-full
pb-1
`;

const NewReleaseTitle = tw.div`
pb-2
w-full
`;

const BannerContainer = tw.div`
w-full 
h-full 
flex
`;


const Slide = tw.div`
mx-2
inline-block
my-1
first:ml-1 
ml-0 
last:mr-1
`;

const BannerContent = tw.div`
w-full 
h-full 
flex
relative 
z-0
bg-green-400
`;

const Img = tw.img`
w-full 
h-full 
object-cover 
object-center
lg:static 
xl:absolute 
`;

const NxtBtn = styled("button")`
   {
    top: 45%;
    right: 0;
    margin-right: 10px;
    position: absolute;
    background: rgba(211, 206, 210, 0.8);
    backdrop-filter: blur(50px);
    border-radius: 100%;
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
    left: 0;
    margin-right: 10px;
    position: absolute;
    background: rgba(211, 206, 210, 0.8);
    backdrop-filter: blur(50px);
    border-radius: 100%;
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

export default NewRelease;
