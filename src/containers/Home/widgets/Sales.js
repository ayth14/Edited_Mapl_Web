import React, {useState} from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { SwiperSlide } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Card, Container, HeadingText, Carousel } from "@components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import trendingBg from "@assets/images/trendingBanner.png";

const Sales = () => {

  const [isOn, setIsOn] = useState();
  
  const cardClick = (e) => {
    setIsOn(e);
  };

  return (
    <Container $col={true}>
      <div className="salesTitle">
        <HeadingText>Sales</HeadingText>
      </div>
      <SalesProduct>
      <Carousel
          slidesPerGroup={1}
          autoplay={false}
          spaceBetween1200={14}
          slidesPerView1200={6}
          spaceBetween1024={14}
          slidesPerView1024={4}
          slidesPerView768={4}
          spaceBetween768={6}
          slidesPerView567={3}
          spaceBetween567={5}
          slidesPerView480={2}
          spaceBetween480={5}
          slidesPerView280={1}
          spaceBetween280={5}
          carouselclass={"lg:w-full sm:w-[73%] w-6/12"}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: ".swiper-dis",
          }}
        >
          {[...Array(30)].map((slide, idx) => {
            return (
              <SwiperSlide className="mb-1 first:ml-0.5 ml-0 last:mr-1" key={idx} style={{width : "auto"}}>
                <Card
                  onClick={() => cardClick(idx)}
                  id={idx}
                  className="4xl:w-auto 2xl:w-auto xl:w-auto w-auto"
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
          <NxtBtn className={'swiper-next'}>
            <MdChevronRight size={22}/>
          </NxtBtn>
          <PrvBtn className={'swiper-prev'}>
            <MdChevronLeft size={22}/>
          </PrvBtn>
        </Carousel>
        <SalesLink>
          <Img src={trendingBg} alt="" />
        </SalesLink>
      </SalesProduct>
    </Container>
  );
};

const SalesLink = tw.div`
flex
justify-center
shadow-cartBtn
rounded
ml-3
4xl:w-[211px]
xl:w-[205px]
lg:w-[25%]
sm:w-[27%]
w-6/12
h-auto
relative
mb-1
`;

const SalesProduct = tw.div`
flex
`;

const Img = tw.img`
w-full
h-full
object-cover
object-center
rounded
`;

const NxtBtn = styled("button")`
   {
    top: 45%;
    right: 0;
    margin-right: 10px;
    position: absolute;
    background: rgba(211, 206 , 210, 0.8);
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

export default Sales;
