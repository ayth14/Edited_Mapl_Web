import React, {useState} from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Card, Container, HeadingText, Carousel } from "@components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import banner1 from "@assets/images/banner1.png";
import banner2 from "@assets/images/banner2.png";
import banner3 from "@assets/images/banner3.png";
import trendingBg from "@assets/images/trendingBanner.png";
import { SwiperSlide } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Trending = () => {
  
  const banners = [{ img: banner1 }, { img: banner2 }, { img: banner3 }];
  
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };


  return (
    <Container $col={true}>
      <div className="py-4">
        <HeadingText>Trending Now</HeadingText>
      </div>
      <Trendingbanner>
        <Carousel
          slidesPerGroup={2}
          autoplay={true}
          navigation={false}
          spaceBetween1200={20}
          slidesPerView1200={3}
          spaceBetween1024={20}
          slidesPerView1024={3}
          slidesPerView768={3}
          spaceBetween768={15}
          slidesPerView567={2}
          spaceBetween567={5}
          slidesPerView480={2}
          spaceBetween480={5}
          slidesPerView280={1}
          spaceBetween280={5}
        >
          {banners.map((banner) => {
            return (
              <SwiperSlide>
                <img src={banner.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Carousel>
      </Trendingbanner>

      <TrendingProduct>
        <Carousel
          slidesPerGroup={2}
          autoplay={false}
          spaceBetween1200={13.5}
          slidesPerView1200={6}
          spaceBetween1024={13.5}
          slidesPerView1024={5}
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
          {[...Array(30)].map((slide, index) => {
            return (
              <SwiperSlide className="mb-1 first:ml-2 ml-0 last:mr-2" key={index} style={{width : "auto"}}>
                <Card
                  className="w-auto"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  CartBtnClick={handleClick}
                  isOn={isOn}
                  titleClassName={`${isOn ? "pr-0" : "pr-1"}`}
                  iconName={isOn ? deleteIcon : plusIcon}
                  titleName={isOn ? "1" : "Add"}
                  bottomlabel={isOn ? <Icon src={plusIcon} /> : "to cart"}
                />
              </SwiperSlide>
            );
          })}
          <NxtBtn className={'swiper-next'}>
            <MdChevronRight/>
          </NxtBtn>
          <PrvBtn className={'swiper-prev'}>
            <MdChevronLeft/>
          </PrvBtn>
        </Carousel>
        <TrendingLink>
          <Img src={trendingBg} alt="" />
        </TrendingLink>
      </TrendingProduct>
    </Container>
  );
};

const TrendingLink = tw.div`
flex
justify-center
ml-3
4xl:[211px]
xl:w-[205px]
lg:w-[205px]
sm:w-[27%]
w-6/12
h-auto
bg-transparent
relative
mb-1
`;

const Img = tw.img`
w-full
h-full
rounded
object-cover
object-center
`;

const Icon = tw.img`
w-auto
h-[14px]
`;


const TrendingProduct = tw.div`
flex
mt-8
`;

const Trendingbanner = tw.div`
flex 
flex-row
gap-x-6
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
export default Trending;
