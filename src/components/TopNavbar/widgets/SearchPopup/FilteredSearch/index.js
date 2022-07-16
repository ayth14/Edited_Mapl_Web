import React from "react";
import tw from "tailwind-styled-components";
import { TertiaryBoldText } from "@components";

const FilteredSearch = () => {
  return (
    <SearchContainer>
      <div className="filteredSearchTitle px-6 pt-5">
        <TertiaryBoldText className="xl:text-[25px] ">
          Filtered Search
        </TertiaryBoldText>
      </div>
    </SearchContainer>
  );
}
const SearchContainer = tw.div`
xl:w-[50%] 
lg:w-[60%] 
w-[70%] 
h-[465px]
sm:w-[45%] 
w-[72%] 
h-[465px] 
bg-white  
ml-[20.5%] 
xl:ml-[25.6%] 
4xl:ml-[20.6%] 
top-auto right-0
`;
export default FilteredSearch;