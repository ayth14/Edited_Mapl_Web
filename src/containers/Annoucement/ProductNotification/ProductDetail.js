import React from "react";
import tw from "tailwind-styled-components";
import ProductInformation from "./ProductInformation";
import skyVodaka from "@assets/images/product-Img/skyVodaka.png";
import restricted from "@assets/images/X18Plus.png";
import ProductRecommend from "./ProductRecommend";
  
const ProductDetail = () => {
  return (
    <>
        <ProductContainer>
          <ProductInformation
            productImg={skyVodaka}
            productName={"Skyy Vodka 70cl"}
            productTitle={
              "The quadruple distilled Skyy Vodka in the world famous blue bottle."
            }
            restrictedIcon={restricted}
            productPrice={"CHF 16.90"}
            expiryDate={"22.09.2025"}
          />
          <ProductRecommend />
        </ProductContainer>
    </>
  );
};

const ProductContainer = tw.div`
w-full
h-full 
`;

export default ProductDetail;
