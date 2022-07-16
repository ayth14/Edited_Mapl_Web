import React from "react";
import FilteredSearch from "./FilteredSearch";
import PopularSearch from "./PopularSearch";

export default function SearchPopup(props) {
  const { openSearch, openFilter } = props;
  return openFilter ? (
    <div
      className={
        openSearch
          ? "absolute z-10 top-[0] right-0 left-0 bottom-0 w-full h-screen "
          : "hidden"
      }
    >
      <PopularSearch />
    </div>
  ) : (
    <div
      className={
        !openSearch
          ? "hidden"
          : "absolute z-10 top-[0] right-0 left-0 bottom-0 w-full h-screen"
      }
    >
      <FilteredSearch />
    </div>
  );
}
