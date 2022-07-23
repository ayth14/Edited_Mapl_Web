import React from "react";
import tw from "tailwind-styled-components";
import { Card, Container, HeadingText, CustomSlider } from "@components";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import group5 from "@assets/images/group5.png";

const Recommendation = () => {

  return (
    <Container className="md:flex-col xl:flex-row lg:flex-row flex-col">
      <RecommendProduct>
        <RecommendTitle>
          <HeadingText className="font-bold text-left">
            {"Our Recommendations"}
          </HeadingText>
        </RecommendTitle>
        <CustomSlider sliderId={"recommendSlider"} sliderInner={"RsliderIn"}>
          {[...Array(24)].map(() => {
            return (
              <Slide>
                <Card
                  className="4xl:w-[175px] 2xl:w-[155px] xl:w-[130px] w-[135px]"
                  productName={"Jack Daniel's Tennessee Whiskey"}
                  price={"29.90"}
                  marketPrice={"32.90"}
                  weight={"70cl"}
                  productRate={"42.70/l"}
                  productImg={jackDaniel}
                  iconName={plusIcon}
                  deleteIcon={deleteIcon}
                />
              </Slide>
            );
          })}
          </CustomSlider>
      </RecommendProduct>
      <RecommendBanner>
        <BannerContainer>
          <BannerContent>
            <Img src={group5} alt="" />
            <BannerLink>
              <CustomText className="text-white">{"Our gin range"}</CustomText>
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
xl:mb-0
sm:mb-4
mr-4
mb-4
relative
flex
flex-col
items-center
`;

const Slide = tw.div`
mx-2
inline-block
my-1
first:ml-0
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
pointer-events-none
`;

const BannerLink = tw.div`
absolute 
top-2 
right-[10%]  
text-center
`;

const CustomText = tw.span`
text-white
2xl:text-4xl
xl:text-3xl 
lg:text-2xl 
md:text-lg 
sm:text-base 
text-xs 
font-[Montserrat] 
font-semibold 
text-gray-800 
`;

const CustomButton = tw.button`
xl:text-base
lg:text-sm
sm:text-xs
text-[10px]
bg-white
text-color456
mx-auto
rounded
xl:py-3 
sm:py-2
py-1
xl:w-[55%]
lg:w-[45%]
md:w-[50%]
sm:w-[70%]
w-[65%]
hover:shadow-md
mt-4
`;

export default Recommendation;
