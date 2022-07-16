import React from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar } from "@components";
import Footer from "@components/Footer";
import ProductInfo from "./ProductInfo";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png"
import restricted from "@assets/images/X18Plus.png"
import ProductRecommend from "./ProductRecommend";

const ProductDetail = () => {
  return (
    <>
      <TopNavbar />
      <div className="flex">
        <ProductMenu>
          <SideBar />
        </ProductMenu>
        <ProductDes>
          <ProductInfo 
            productImg={jackDaniel}
            productName={"Jack Daniel's Tennessee Whiskey Apple 70cl"}
            productTitle={"The Apple Whiskey is ideal for various mixed drinks."}
            restrictedIcon={restricted}
            productPrice={"CHF 16.90"}
            expiryDate={"22.09.2025"}
          />
          <ProductRecommend/>
        </ProductDes>
      </div>
      <Footer />
    </>
  );
};

const ProductMenu = tw.div`
xl:w-1/6 
h-full
sticky top-[2rem]
flex flex-col
z-30
`;

const ProductDes = tw.div`
xl:w-5/6 
w-full
h-full 
`;

export default ProductDetail;
