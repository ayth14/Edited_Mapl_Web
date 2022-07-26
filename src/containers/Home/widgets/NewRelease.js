import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Card, HeadingText, Container, CustomSlider } from "@components";
import { SwiperSlide } from "swiper/react";
import product from "@assets/images/product6.png";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";

const NewRelease = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
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
          <HeadingText className="font-bold pl-3">New Release</HeadingText>
        </NewReleaseTitle>
        <CustomSlider sliderId={"newRelease"} sliderInner={"NsliderIn"}>
          {[...Array(12)].map((slide, index) => {
            return (
              <Slide key={index}>
                <Card
                  className="4xl:w-[170px] 2xl:w-[155px] xl:w-[130px] w-[135px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  newtag={"new"}
                  CartBtnClick={handleClick}
                  isOn={isOn}
                  titleClassName={`${isOn ? "pr-0" : "pr-1"}`}
                  iconName={isOn ? deleteIcon : plusIcon}
                  titleName={isOn ? "1" : "Add"}
                  bottomlabel={isOn ? <Icon src={plusIcon} /> : "to cart"}
                />
              </Slide>
            );
          })}
        </CustomSlider>
      </NewReleaseProduct>
    </Container>
  );
};

const NewReleaseProduct = tw.div`
2xl:w-7/12
xl:w-7/12 
lg:w-7/12  
md:w-full
ml-4
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

const Icon = tw.img`
w-auto
h-[14px]
`;

const Slide = tw.div`
mx-2
inline-block
my-1
first:ml-0
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

export default NewRelease;
