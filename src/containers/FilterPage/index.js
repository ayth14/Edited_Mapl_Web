import React from "react";
import { TopNavbar } from "@components";
import { Footer } from "@components";
import FilterChoice from "./FilterChoice";
import FilteredProduct from "./FilteredProduct";

const FilterPage = () => {
  return (
    <>
      <TopNavbar />
      <div className="flex">
        <div className="xl:w-1/6 lg:w-full w-full h-screen bg-green-300 xl:sticky xl:top-8 z-40">
          <FilterChoice />
        </div>
        <div className="xl:w-5/6 lg:w-full  w-0 h-full px-4">
          <FilteredProduct />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FilterPage;
