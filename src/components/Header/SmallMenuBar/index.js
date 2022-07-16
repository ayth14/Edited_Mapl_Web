import React from "react";
import tw from "tailwind-styled-components";
import { Basic, HeadingText } from "@components/Text";
export default function SmallMenuBar() {
  return (
    <NavContainer>
      <NavContent>
        <NavLeft>
          <HeadingText
            className="pr-2  xl:text-[12px] 2xl:text-[14px]"
            style={{ fontWeight: 400 }}
          >
            {"Contact"}
          </HeadingText>
          <HeadingText
            className="pr-2  xl:text-[12px] 2xl:text-[14px]"
            style={{ fontWeight: 400 }}
          >
            {"Help"}
          </HeadingText>
          <HeadingText
            className="pr-2  xl:text-[12px] 2xl:text-[14px]"
            style={{ fontWeight: 400 }}
          >
            {"About"}
          </HeadingText>
          <HeadingText
            className="pr-2  xl:text-[12px] 2xl:text-[14px]"
            style={{ fontWeight: 400 }}
          >
            {"Bussiness Customer"}
          </HeadingText>
        </NavLeft>

        <NavMid>
          <NavMidContent>
            <div className="w-[22px] h-[18px]  flex items-center">
              <img
                src={require("@assets/images/delivery.png")}
                alt=""
              />
            </div>
            <Basic className="pl-1 xl:text-[12px]  2xl:text-[14px]">
              {"We deliver in minutes"}
            </Basic>
          </NavMidContent>
          <NavMidContent>
            <div className="w-[22px] h-[20px] flex items-center">
              <img
                src={require("@assets/images/deliveryCost.png")}
                alt=""
              />
            </div>
            <Basic className="pl-1 xl:text-[12px]  2xl:text-[14px]">
              {"Charges only CHF 3.90"}
            </Basic>
          </NavMidContent>
          <NavMidContent>
            <div className="w-[20px] h-[20px] flex items-center">
              <img
                src={require("@assets/images/minOrder.png")}
                alt=""
              />
            </div>
            <Basic className="pl-1 xl:text-[12px]  2xl:text-[14px]">
              {"No minimum order"}
            </Basic>
          </NavMidContent>
        </NavMid>

        <div className="flex items-center justify-between">
          <Basic className="xl:text-[12px] 2xl:text-[14px] pr-3">
            {" Mon-Thurs: 08-23; Fri: 08-24; Sat: 08-23:45 "}
          </Basic>
          <div className="flex items-center px-3">
            <div className=" w-[22px] h-[22px] pr-1">
              <img src={require("@assets/images/opened.png")} alt="" />
            </div>
            <Basic className="pl-2 xl:text-[12px] 2xl:text-[14px]">
              {"Now Opened"}
            </Basic>
          </div>
          <div className="flex">
            <img
              className="h-[29px]"
              src={require("@assets/images/swissGlobe.png")}
              alt=""
            />
          </div>
        </div>
      </NavContent>
    </NavContainer>
  );
}

const NavContainer = tw.div`
h-[40px] 
bg-[color:var(--BackColor)] 
text-white
py-3
`;

const NavContent = tw.div`
w-full 
h-full 
px-2 
flex 
justify-between 
items-center
`;

const NavLeft = tw.div`
items-center 
hidden
xl:flex 
justify-between
text-[12px]
`;

const NavMid = tw.div`
flex
items-center
justify-between
`;
const NavMidContent = tw.div`
flex 
items-center 
justify-between
2xl:pr-3 
`;
