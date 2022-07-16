import React from "react";
import tw from "tailwind-styled-components";
import { TopNavbar, Footer } from "@components";
import Options from "./Options";
import ProductContent from "./ProductContent";
import { UserData } from "@components/TopNavbar/widgets";

const Products = () => {
  return (
    <>
      <TopNavbar />
      <FilterContainer>
        <OptionContainer>
          <Options />
        </OptionContainer>
        <UserData userclassname={"xl:hidden"} />
        <ProductsContainer>
          <ProductContent />
        </ProductsContainer>
      </FilterContainer>
      <Footer />
    </>
  );
};

const FilterContainer = tw.div`
flex
`;
const OptionContainer = tw.div`
xl:w-1/6 
lg:w-full 
w-full 
h-screen 
xl:sticky 
xl:top-8 
z-40
`;

const ProductsContainer = tw.div`
xl:w-5/6 
lg:w-full  
w-full 
h-full 
px-4
xl:py-1
lg:py-7
`;

export default Products;
