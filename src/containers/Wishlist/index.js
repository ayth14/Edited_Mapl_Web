import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar, Footer, Button } from "@components";
import wishlistEmpty from "@assets/images/wishlistEmpty.png";
import { Basic } from "@components";
import { useNavigate } from "react-router-dom";
import UserData from "@components/TopNavbar/widgets/UserData";
import Profile from "@components/TopNavbar/widgets/Profile";
import wishList from "./wishList";
import WishListProduct from "./WishListProduct";

const Wishlist = () => {

  const navigate = useNavigate()
  
    const handleCart = () => {
    navigate('/cart')
  }
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
            className={"xl:text-3xl lg:text-2xl md:text-xl text-lg py-3"}
          >
            {"Wishlist"}
          </Basic>
          <WishlistContent>
          {wishList?.length > 0 ? (
              <>
                <WishListProduct />
                <div className="flex justify-end pt-8">
                  <Button
                    title={"Add to Cart"}
                    className={
                      "bg-color51 text-white w-[20%] inline-block rounded-sm p-3"
                    }
                    onClick={handleCart}
                  />
                </div>
              </>
            ) : (
              <>
                <img
                  src={wishlistEmpty}
                  alt=""
                  className="w-[425px] h-[267px]"
                />
                <TitleText>{"Your Cart is empty"}</TitleText>
                <Basic>
                  {
                    "Add items to your shopping cart to remember them for your next purchase."
                  }
                </Basic>
              </>
            )}
          </WishlistContent>
        </WishlistContainer>
        <Profile
          openProfile={true}
          userName={"Swissan Kandaswamy"}
          profileclassname={"xl:sticky xl:top-0 xl:flex hidden"}
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
p-7
xl:py-3 
lg:py-7
`;

const WishlistContent = tw.div`
flex
flex-col
justify-end
mt-6
`;

const TitleText = tw.span`
font-bold 
text-3xl 
`;

export default Wishlist;
