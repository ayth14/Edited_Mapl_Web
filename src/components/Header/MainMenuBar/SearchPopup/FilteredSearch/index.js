import React from "react";
import { TertiaryBoldText } from "@components/Text";

export default function FilteredSearch() {
  return (
    <div className="w-[45%] h-[465px] bg-white mx-[24%] top-auto right-0">
      <div className="filteredSearchTitle px-6 pt-5">
        <TertiaryBoldText className="xl:text-[25px] ">
          Filtered Search
        </TertiaryBoldText>
      </div>
    </div>
  );
}
