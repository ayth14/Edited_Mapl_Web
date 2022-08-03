import React from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar } from "@components";
import Footer from "@components/Footer";
import ProductInfoB2B from "./ProductInfoB2B";
import ProductRecommendB2B from "./ProductRecommendB2B";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png"


const ProductDetailB2B = () => {
  return (
    <>
      <TopNavbar />
      <div className="flex">
        <ProductMenu>
          <SideBar />
        </ProductMenu>
        <ProductDes>
          <ProductInfoB2B 
            productImg={jackDaniel}
            productName={"Jack Daniel's Tennessee Whiskey Apple 70cl"}
            productTitle={"The Apple Whiskey is ideal for various mixed drinks."}
            privateRate={"CHF 23.90"}
            productPrice={"CHF 16.90"}
            gastranomyRate={"CHF 23.90"}
          />
          <ProductRecommendB2B/>
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

export default ProductDetailB2B;
