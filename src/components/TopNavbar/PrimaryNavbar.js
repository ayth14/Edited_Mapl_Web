import React from "react";
import tw from "tailwind-styled-components";
import { PrimaryText } from "@components";
import delivery from "@assets/images/delivery.png";
import deliveryCost from "@assets/images/deliveryCost.png";
import minOrder from "@assets/images/minOrder.png";
import opened from "@assets/images/opened.png";
import swissGlobe from "@assets/images/swissGlobe.png";

const HeaderDetails = (img, titleText) => {
  return (
    <>
      <img
        className={"max-w-[22px] md:max-w-[16px] lg:flex md:flex sm:hidden hidden"}
        src={img}
        alt=""
      />
      <div>
        <Text>{titleText}</Text>
      </div>
    </>
  );
};

const PrimaryNavbar = () => {
  const data = ["Contact", "Help", "About", "Business Customer"];
  return (
    <NavContainer>
      <NavContent>
        <NavLeft>
          {data.map((item, index) => {
            return (
              <PrimaryText
                style={{ fontFamily: "Raleway, sans-serif" }}
                className="lg:text-[12px] md:text-[11px] text-[10px] pr-6 "
                key={index}
              >
                <a href="/">{item}</a>
              </PrimaryText>
            );
          })}
        </NavLeft>
        <NavMid>
          {HeaderDetails(delivery, "We deliver in minutes")}
          {HeaderDetails(deliveryCost, "Charges only CHF 3.90")}
          {HeaderDetails(minOrder, "No minimum order")}
        </NavMid>

        <NavRight>
          <BaiscText className="">
            {"Mon-Thurs: 08-23; Fri: 08-24; Sat: 08-23:45"}
          </BaiscText>
          <WebTime>
          <div className="flex items-center">
          <img
            src={opened}
            alt=""
            className="xl:max-w-[18px] lg:max-w-4 md:max-w-[15%] sm:max-w-[20%] max-w-[15%]  h-auto"
            />
            <Basic>{"Now Opened"}</Basic>
          </div>

        </WebTime>
        <img
            src={swissGlobe}
            alt=""
            className="2xl:max-w-[5%] xl:max-w-[11%] lg:max-w-[10%] md:max-w-[12.45%] sm:max-w-[4%] max-w-[5%]"
          />
        </NavRight>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = tw.div`
h-[40px] 
bg-color456 
text-white
px-3
w-full
`;

const NavContent = tw.div`
h-full 
w-full
px-2 
flex 
items-center
justify-between
`;

const NavLeft = tw.div`
2xl:flex
2xl:min-w-fit
items-center 
lg:hidden
xl:hidden
md:hidden
hidden
text-[12px]
`;

const NavMid = tw.div`
flex
items-center
`;

const Text = tw.span`
lg:text-[12px] 
md:text-[11px] 
sm:text-[10px] 
text-[10px] 
pl-1
xl:mr-8 
md:mr-3
min-w-max 
lg:flex 
md:flex 
sm:hidden 
hidden
`;
const NavRight = tw.div`
w-full
sm:w-full
md:w-auto
lg:min-w-fit
flex
items-center
justify-between
`;

const WebTime = tw.div`
flex
items-center
justify-end
`;
const BaiscText = tw.span`
lg:text-[12px] 
md:text-[11px] 
text-[10px] 
xl:ml-[-6%]
pr-1  
2xl:flex 
md:hidden 
sm:hidden 
hidden
`
const Basic = tw.span`
lg:text-[12px] 
md:text-[11px] 
sm:text-[10px] 
text-[10px] 
pl-2
`;
export default PrimaryNavbar;
