import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { IoClose } from "react-icons/io5";
import { Basic } from "@components/Text";
import categoriesList from "./categoriesList";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

const SideBarMenu = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <Container>
        <CustomButton onClick={handleMenu}>
          <img
            src={require("@assets/images/categoriesIcon.png")}
            alt=""
            className="w-6 h-6 mx-auto"
          />
        </CustomButton>
        <SideBarContent $openMenu={open}>
          <SideBarBox>
            <BasicText style={{ fontWeight: "700" }}>All Categories</BasicText>
            <IoClose
              size={30}
              onClick={handleMenu}
              className={
                "absolute z-50 right-2 top-4 hover:bg-logoColor hover:text-white xl:hidden lg:flex flex"
              }
            />

            <SideBarUl>
              {categoriesList.map((item, index) => {
                return (
                  <Link to={`${item.to}`}
                    className={`flex items-center py-2 px-4 xl:px-4 xl:justify-start lg:px-1 lg:justify-start hover:bg-color235 hover:font-bold cursor-pointer z-40`}
                    key={index}
                  >
                    <SideBarIcon>
                      <img src={item.icon} alt="aside bar icon" />
                    </SideBarIcon>
                    <p className="pl-3 xl:flex lg:flex flex">{item.name}</p>
                  </Link>
                );
              })}
            </SideBarUl>
          </SideBarBox> 
        </SideBarContent>
      </Container>
    </>
  );
};

const Container = tw.div`
flex
flex-col
lg:items-end
justify-end
min-h-screen
items-start
`;

const SideBarContent = tw.div`
${(p) => p.$openMenu ? "left-0 before:w-screen before:absolute" : "-left-[500px] before:w-0"}
flex
flex-col
xl:h-full
scrollbar-none
bg-asideBarBgColor
border-r
xl:w-auto
xl:relative
xl:top-0
xl:left-0
peer-transition
ease-out
delay-150
duration-200
fixed top-28
bottom-0
min-h-0
before:bg-black
before:z-0
before:opacity-50
before:h-full
xl:before:h-0
before:top-0
pt-2
`;

const SideBarBox = tw.div`
flex-1
sticky
top-0
z-40
overflow-y-auto
overflow-x-hidden
scrollbar-none
h-full
`;

const CustomButton = tw.button`
absolute
xl:hidden
peer 
top-0
left-0
w-10
h-10
hover:motion-safe:animate-bounce
`;

const BasicText = tw.span`
text-[20px] 
xl:flex 
flex 
pl-5
pt-4
sticky
bg-asideBarBgColor
`;

const SideBarUl = tw.ul`
xl:flex
flex-col
sm:bg-asideBarBgColor
bg-asideBarBgColor
relative
h-screen
overflow-y-auto
scrollbar-none
`;

const SideBarIcon = tw.div`
flex 
self-center 
xl:max-w-[20px]
lg:max-w-[30px] 
sm:max-w-[25px] 
max-w-[25px]
`;

export default SideBarMenu;
