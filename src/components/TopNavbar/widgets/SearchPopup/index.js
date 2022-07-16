import React from "react";
import tw from "tailwind-styled-components";
import FilteredSearch from "./FilteredSearch";
import PopularSearch from "./PopularSearch";

const SearchPopup = (props) => {
  const searchCategories = [
    "Pasta",
    "Water",
    "Coffee",
    "Cereal",
    "Diaper",
    "Beer",
    "Dessert",
    "Pizza",
    "Chocolate",
    "Cream",
  ];
  const { openSearch, openFilter } = props;
  return openFilter ? (
    <PopularSearchContainer $openSearch={openSearch}>
      <PopularSearch searchCategory={searchCategories} />
    </PopularSearchContainer>
  ) : (
    <FilteredSearchContainer $openSearch={openSearch}>
      <FilteredSearch />
    </FilteredSearchContainer>
  );
};
const PopularSearchContainer = tw.div`
${(p) =>
  p.$openSearch
    ? "absolute z-10 top-[0] right-0 left-0 bottom-0 w-full h-screen"
    : "hidden"}
`;
const FilteredSearchContainer = tw.div`
${(p) =>
  !p.$openSearch
    ? "hidden "
    : "absolute z-10 top-[0] right-0 left-0 bottom-0 w-full h-screen"}
`;
export default SearchPopup;
