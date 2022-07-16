import React from "react";
import tw from "tailwind-styled-components";
import { Card, Container, HeadingText, Carousel } from "@components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import trendingBg from "@assets/images/trendingBanner.png";
import { SwiperSlide } from "swiper/react";

const Sales = () => {
  return (
    <Container $col={true}>
      <div className="salesTitle">
        <HeadingText>Sales</HeadingText>
      </div>
      <SalesProduct>
      <Carousel
          slidesPerGroup={6}
          autoplay={false}
          navigation={true}
          spaceBetween1024={5}
          slidesPerView1024={6}
          slidesPerView768={4}
          spaceBetween768={6}
          slidesPerView567={3}
          spaceBetween567={5}
          slidesPerView480={2}
          spaceBetween480={5}
          slidesPerView280={1}
          spaceBetween280={5}
          carouselclass={"lg:w-full sm:w-[73%] w-6/12"}
        >
          {[...Array(12)].map((slide, index) => {
            return (
              <SwiperSlide className="mb-1" key={index} id={slide-`${index}`}>
                <Card
                  className="first:ml-0 last:mr-3 ml-[13.5px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  iconName={plusIcon}
                  deleteIcon={deleteIcon}
                />
              </SwiperSlide>
            );
          })}
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
`
export default Sales;
