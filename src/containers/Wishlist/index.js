import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar, Footer } from "@components";
import wishlistEmpty from "@assets/images/wishlistEmpty.png";
import { Basic } from "@components";
import UserData from "@components/TopNavbar/widgets/UserData";
import Profile from "@components/TopNavbar/widgets/Profile";

const Wishlist = () => {
  return (
    <>
      <TopNavbar />
      <Container>
        <SideMenuContent>
          <SideBar />
        </SideMenuContent>
        <UserData userclassname={"xl:hidden"} />
        <WishlistContainer>
          <Basic
            style={{ fontWeight: 700 }}
            className={"xl:text-3xl lg:text-2xl md:text-xl text-lg py-6"}
          >
            {"Wishlist"}
          </Basic>
          <WishlistContent>
            <img src={wishlistEmpty} alt="" className="w-[425px] h-[267px]" />
            <TitleText>{"Your wishlist is empty"}</TitleText>
            <Basic>
              {
                "Add items to your shopping list to remember them for your next purchase."
              }
            </Basic>
          </WishlistContent>
        </WishlistContainer>
        <Profile
          openProfile={true}
          userName={"Swissan Kandaswamy"}
          profileclassname={"xl:absolute xl:top-0 xl:flex hidden"}
        />
      </Container>
      <Footer />
    </>
  );
};

const Container = tw.div`
flex
xl:gap-1
relative
`;

const SideMenuContent = tw.div`
xl:w-[15.5%] 
lg:sticky
lg:top-0
sticky
top-0
md:top-0
h-screen
flex flex-col
z-30
`;

const WishlistContainer = tw.div`
xl:w-2/3
lg:w-full
w-full
h-full 
flex
flex-col
relative
px-4
xl:py-3
lg:py-7
py-5
`;

const WishlistContent = tw.div`
flex
flex-col
justify-center
items-center
`;

const TitleText = tw.span`
font-bold 
text-3xl 
py-4
`;

export default Wishlist;
