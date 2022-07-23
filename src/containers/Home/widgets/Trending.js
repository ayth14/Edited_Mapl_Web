import React from "react";
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

const Trending = () => {
  
  const banners = [{ img: banner1 }, { img: banner2 }, { img: banner3 }];
  
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
          navigation={true}
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
        >
          {[...Array(12)].map((slide, index) => {
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
                  iconName={plusIcon}
                  deleteIcon={deleteIcon}
                />
              </SwiperSlide>
            );
          })}
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

const TrendingProduct = tw.div`
flex
mt-8
`;

const Trendingbanner = tw.div`
flex 
flex-row
gap-x-6
`;

export default Trending;
