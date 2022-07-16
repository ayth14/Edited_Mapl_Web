import React, { useState } from "react";
import { Card, Container, HeadingText, MenuSlider, ToggleSwitch, } from "@components";
import { Basic } from "@components/Text";
import tw from "tailwind-styled-components";
import plusIcon from "@assets/images/plusIcon.png"
import deleteIcon from "@assets/images/deleteIcon.png"
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import CategoriesList from "@components/SideBarMenu/categoriesList";
import './filterProduct.css'

const ProductContent = () => {
  const [active, setActive] = useState("");
  const varietyList = [ "Fruits","vegetables", "Root Vegetables", "Salad", "Ready to use", "Vitamin basket", "RootVegetables",
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

      <SliderContainer>
        <MenuSlider slidesToShow={7} slidesToScroll={5} dots={false}>
          {CategoriesList.map((list, index) => {
            return (
              <>
                <Image key={index}>
                  <img
                    src={list.icon}
                    alt=""
                    className={`img-${index} max-w-full h-auto`}
                  />
                </Image>
                <Basic className="flex items-center list-txt pl-2">
                  {list.name}
                </Basic>
              </>
            );
          })}
        </MenuSlider>
      </SliderContainer>

      <OptionContainer>
        {varietyList.map((item, index) => {
          return (
            <div>
              <List className="">
                <ListElement $active={active === index.toString()}
                  key={index}
                  id={index.toString()}
                  onClick={handleClick}
                >
                 {item} 
                </ListElement>
              </List>
            </div>
          );
        })}
      </OptionContainer>

      <HeadingText className={"pb-6"}>{"Wine, Beer & Spirits"}</HeadingText>

      <Container
        $col={true}
        className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2"
      >
        {[...Array(12)].map((card, index) => {
          return (
            <Card
              className=" pb-2 shadow-cartBtn mr-[13.5px] mb-4 relative rounded "
              productName={"Jack Daniel's Tennessee Whiskey"}
              iconName={plusIcon}
              deleteIcon={deleteIcon}
              price={"29.90"}
              marketPrice={"32.90"}
              weight={"70cl"}
              productRate={"42.70l"}
              productImg={jackDaniel}
              key={index}
            />
          );
        })}
      </Container>
    </>
  );
};

const Image = tw.div`
flex 
items-center 
w-[22px]
h-[22px]
`;
const SliderContainer = tw.div`
flex 
flex-col 
mb-6 
relative 
z-0 
cursor-pointer
`;

const OptionContainer = tw.div`
flex
xl:gap-x-6 
lg:gap-x-3 
gap-x-2 
border-b 
border-color112 
justify-start 
mb-6 
relative 
xl:overflow-visible 
lg:overflow-x-auto 
overflow-x-auto 
scrollbar-none
`;

const List = tw.div`
relative 
z-0
cursor-pointer
`;

const ListElement = tw.div`
${(p) => p.$active ? `
after:absolute 
after:bg-black 
after:w-full 
after:h-[5px] 
after:top-[94%] 
after:right-0 
after:padding-0 
font-semibold`
:
``}
`;

export default ProductContent;
