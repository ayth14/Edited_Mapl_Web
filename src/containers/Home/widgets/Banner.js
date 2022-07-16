import React from "react";
import tw from "tailwind-styled-components";
import MainBg from "@assets/images/group4.png";

const Banner = () => {
  return (
    <BgContainer>
      <Img src={MainBg} alt="" />
      <BannerContent>
        <Text>{"Our non-alcoholic range"}</Text>
        <CustomButton>{"Discover it Now"}</CustomButton>
      </BannerContent>
    </BgContainer>
  );
};

const BgContainer = tw.div`
flex 
w-full
h-full
my-8
bg-green
xl:relative
lg:sticky
lg:mt-4
relative
`;
const BannerContent = tw.div`
flex 
flex-col 
text-center
absolute 
right-6 
z-60
2xl:top-[75px]
2xl:max-w-[450px]
xl:top-[40px]
xl:max-w-[370px]
lg:top-[35px]
lg:max-w-[300px]
md:top-[35px]
md:max-w-[200px]
top-[10px]
max-w-[150px]
`;
const Img = tw.img`
w-full 
h-full
object-cover
object-center
overflow-hidden
left-0 
right-0
`;
const Text = tw.span`
2xl:text-4xl
xl:text-3xl 
lg:text-2xl 
md:text-lg 
sm:text-base 
text-xs 
font-[Montserrat] 
font-extrabold 
text-gray-800 
2xl:mb-4
mb-2
`;

const CustomButton = tw.button`
xl:text-base
lg:text-sm
sm:text-xs
text-[10px]
bg-color456
text-white
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
`;
export default Banner;
