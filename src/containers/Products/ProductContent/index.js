import React, { useState } from "react";
import {
  Card,
  Container,
  HeadingText,
  MenuSlider,
  ToggleSwitch,
  Basic,
} from "@components";
import tw from "tailwind-styled-components";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import jackDaniel from "@assets/images/product-Img/jackDaniel.png";
import CategoriesList from "@components/SideBarMenu/categoriesList";
import "./filterProduct.css";

const ProductContent = () => {
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
    "vegetables",
  ];
  const toggleOption = [
    { label: "New", checked: true },
    { label: "Sales", checked: false },
    { label: "Trend", checked: false },
    { label: "From Switzerland", checked: false },
  ];
  
  const sorting = ["CHF", "CHF/100g", "A-Z"];
  
  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <>
      <Container className="mx-2 my-6 relative lg:overflow-visible  overflow-x-auto scrollbar-none lg:p-0 py-4">
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
        <SliderWrapper>
          <SlideList>
            {varietyList.map((item, index) => {
              return (
                <List>
                  <ListElement
                    $active={active === index.toString()}
                    key={index}
                    id={index.toString()}
                    onClick={handleClick}
                  >
                    {item}
                  </ListElement>
                </List>
              );
            })}
          </SlideList>
        </SliderWrapper>
      </OptionContainer>

      <TitleContainer>
        <HeadingText>{"Wine, Beer & Spirits"}</HeadingText>
        <Sorting>
          {sorting.map((val, idx) => (
            <div className="flex after:border-l-2 last:after:border-0 after:border-color889 px-2">
              <Basic>{val}</Basic>
              <TiArrowSortedDown size={17} className={"cursor-pointer"} />
              <TiArrowSortedUp size={17} className={"cursor-pointer"} />
            </div>
          ))}
        </Sorting>
      </TitleContainer>

      <Container
        $col={true}
        className="grid gap-4 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
      >
        {[...Array(12)].map((card, index) => {
          return (
            <Card
              className="pb-2 w-auto"
              productName={"Jack Daniel's Tennessee Whiskey"}
              iconName={plusIcon}
              deleteIcon={deleteIcon}
              price={"29.90"}
              marketPrice={"32.90"}
              weight={"70cl"}
              productRate={"42.70/l"}
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
cursor-pointer
`;

const OptionContainer = tw.div`
mb-6
relative
`;

const SliderWrapper = tw.div`
flex 
overflow-x-auto 
overflow-y-hidden 
whitespace-nowrap 
scrollbar-none 
`;

const SlideList = tw.div`
flex 
gap-x-4 
border-b 
border-color112
`;

const List = tw.div`
relative 
inline-block
cursor-pointer
py-2
`;

const ListElement = tw.div`
${(p) =>
  p.$active
    ? `
after:absolute 
after:bg-black 
after:w-full 
after:h-[5px] 
after:top-[96%] 
after:right-0 
after:px-0
after:z-30 
after:overflow-visible
font-semibold`
    : ``}
`;

const TitleContainer = tw.div`
flex
lg:flex-row
flex-col
self-center
justify-between
mb-6
`;

const Sorting = tw.div`
flex
items-center
justify-end
lg:p-0
pt-4
`;
export default ProductContent;
