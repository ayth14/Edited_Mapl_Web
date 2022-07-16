import React from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar } from "@components";
import Footer from "@components/Footer";
import ProductInfo from "./ProductInfo";
import jackDaniel from "@assets/images/Product-Img/jackDaniel.png";
import restricted from "@assets/images/X18Plus.png";
import ProductRecommend from "./ProductRecommend";
const ProductDescription = () => {
  return (
    <>
      <TopNavbar />
      <div className="flex">
        <ProductMenu>
          <SideBar />
        </ProductMenu>
        <ProductDetail>
          <ProductInfo
            productImg={jackDaniel}
            productName={"Jack Daniel's Tennessee Whiskey Apple 70cl"}
            productTitle={
              "The Apple Whiskey is ideal for various mixed drinks."
            }
            restrictedIcon={restricted}
            productPrice={"CHF 16.90"}
            expiryDate={"22.09.2025"}
          />
          <ProductRecommend />
        </ProductDetail>
      </div>
      <Footer />
    </>
  );
};

const ProductMenu = tw.div`
xl:w-1/6 
lg:w-[5.3336%]
w-[5.3336%]
h-full
sticky top-[2rem]
flex flex-col
z-30
`;

const ProductDetail = tw.div`
w-5/6 
h-full 
`;

export default ProductDescription;
