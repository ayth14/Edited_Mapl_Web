import React, { useState } from "react";
import {
  Card,
  Container,
  HeadingText,
  MenuSlider,
  ToggleSwitch,
} from "@components";
import {Basic} from '@components/Text'
import CategoriesList from "@components/SideBarMenu/categoriesList";
import "./FilterProduct.css";

export default function FilteredProduct() {
  const [active, setActive] = useState("");
  const varietyList = [
    "Fruits",
    "vegetables",
    "Root Vegetables",
    "Salad",
    "Ready to use",
    "Vitamin basket",
    "RootVegetables",
    "vegetables",
    "Fruits",
    "Ready to use",
    "Vitamin basket",
    "Fruits",
    "vegetables",
    "Salad",
  ];
  const toggleOption = [
    { label: "New", checked: true },
    { label: "Sales", checked: false },
    { label: "Trend", checked: false },
    { label: "From Switzerland", checked: false },
  ];
  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <>
      <Container className="mx-1 my-6 relative z-0">
        {toggleOption.map((opt, index) => {
          return (
            <ToggleSwitch
              key={index}
              Checked={opt.checked}
              label={`${opt.label}`}
            />
          );
        })}
      </Container>

      <div className="flex flex-col mb-6 relative z-0 ">
        <MenuSlider slidesToShow={7} slidesToScroll={5} dots={false}>
          {CategoriesList.map((list, index) => {
            return (
              <>
                <div className="flex items-center max-w-[22px]" key={index}>
                  <img
                    src={list.icon}
                    alt=""
                    className={`img-${index} max-w-full h-auto`}
                  />
                </div>
                <div className="flex items-center list-txt pl-2">
                  {list.name}
                </div>  
              </>
            );
          })}
        </MenuSlider>
      </div>

      <Container className="xl:gap-x-6 lg:gap-x-3 gap-x-3 border-b border-color112 justify-start productvarietyPage mb-6 relative xl:overflow-visible lg:overflow-x-auto overflow-x-auto scrollbar-none">
        {/* <div className="border-b border-color112 w-auto overflow-x-scroll scrollbar-none"> */}
          {varietyList.map((item, index) => {
            return (
              <div className="">
                <div className="relative z-0">
                  <Basic 
                    className={` ${
                      active === index.toString() ? "active font-semibold" : ""
                    }`}
                    key={index}
                    id={index.toString()}
                    onClick={handleClick}
                  >
                    {item}
                  </Basic>
              </div>
            </div>
            );
          })}
        {/* </div> */}
      </Container>
      <div className="productCategoryTitle pb-6">
        <HeadingText>Wine, Beer & Spirits</HeadingText>
      </div>
      <Container $col={true} className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {[...Array(12)].map((card, index) => {
          return (
            <Card
              className=" pb-2 shadow-cartBtn mr-[13.5px] mb-4 relative rounded "
              productName={"Jack Daniel's Tennessee Whiskey"}
              price={"29.90"}
              marketPrice={"32.90"}
              weight={"70cl"}
              productRate={"42.70l"}
              productImg={require("@assets/images/Product-Img/jackDaniel.png")}
              key={index}
            />
          );
        })}
      </Container>
    </>
  );
}
