import React from "react";
import tw from "tailwind-styled-components";
import { TertiaryBoldText } from "@components";

const PopularSearch = (props) => {
  const { searchCategory } = props;
  return (
    <SearchContainer>
      <SearchContent>
        <SearchTitle>
          <TertiaryBoldText className="xl:text-[25px]">
            {"Popular Search"}
          </TertiaryBoldText>
        </SearchTitle>
        <SearchList>
            {searchCategory.map((items, index) => {
              return (
                <div key={index} className="mr-5 my-5 ml-0">
                <a
                  href="/"
                  className="px-4 py-3 rounded-md bg-color239"
                >
                  {items}
                </a>
                </div>
              );
            })}
        </SearchList>
      </SearchContent>
    </SearchContainer>
  );
};

const SearchContainer = tw.div`
xl:w-[50%] 
lg:w-[60%] 
w-[72%] 
h-[465px] 
bg-white 
mr-[24%]
ml-[20.5%]
xl:ml-[25.6%]
4xl:ml-[20.6%]
`;

const SearchContent = tw.div`
w-full 
h-full 
flex 
flex-col
`;

const SearchTitle = tw.div`
px-6 
pt-5
`;

const SearchList = tw.div`
flex 
flex-wrap  
px-6 
py-5
`;
export default PopularSearch;
