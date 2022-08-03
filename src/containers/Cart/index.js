import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar, Footer, Basic, Button } from "@components";
import wishlistEmpty from "@assets/images/wishlistEmpty.png";
import UserData from "@components/TopNavbar/widgets/UserData";
import { Profile } from "@containers";
import CartProductList from "./CartProductList";
import cartList from "./cartList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  const [closeCart, setCloseCart] = useState(false);
  
  const navigate = useNavigate();
  
  const handleclose = () => {
    setCloseCart(!closeCart);
  };
  
  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  return (
    <>
      <TopNavbar />
      <Container>
        <SideMenuContent>
          <SideBar />
        </SideMenuContent>
        <UserData userclassname={"xl:hidden"} />
        <CartContainer>
          <Basic
            style={{ fontWeight: 700 }}
            className={"xl:text-2xl lg:text-2xl md:text-xl text-lg my-3"}
          >
            {"Cart"}
          </Basic>
          <WishlistContent>
            {cartList?.length > 0 ? (
              <>
                <CartProductList />
                <div className="flex justify-end pt-8">
                  <Button
                    title={"Proceed to Checkout"}
                    className={
                      "bg-color51 text-white w-[20%] inline-block rounded-sm p-3"
                    }
                    onClick={handleCheckout}
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
        </CartContainer>
        <Profile
          openProfile={true}
          userName={"Swissan Kandaswamy"}
          profileclassname={"xl:sticky xl:top-0 xl:right-0 xl:flex hidden"}
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

const CartContainer = tw.div`
4xl:w-[70%]
xl:w-2/3
lg:w-full
w-full
h-full 
flex
flex-col
static
p-7
xl:py-3
lg:py-7
`;

const WishlistContent = tw.div`
flex
flex-col
justify-end
`;

const TitleText = tw.span`
font-bold 
text-3xl 
py-4
`;

export default Cart;
