import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Basic } from "@components/Text";
import { IoClose } from "react-icons/io5"
import filterCategories from "./filterCategories";
import categoriesIcon from "@assets/images/categoriesIcon.png"
const Products = () => {
    const [Open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!Open)
    }
  return (
    <div>
        <CustomButton onClick={handleMenu}>
            <img src={categoriesIcon} alt="" className="w-6 h-6 mx-auto mt-2"/>
        </CustomButton>
        <OptionContainer $openMenu={Open}>
        <IoClose
              size={30}
              onClick={handleMenu}
              className={
                "absolute z-50 right-2 top-4 hover:bg-logoColor hover:text-white xl:hidden lg:flex flex"
              }
            />   
      <Basic className="lg:text-2xl pt-[8%]" style={{ fontWeight: "700" }}>
        Filters
      </Basic>
      <ResetButton>{"Reset all filter"}</ResetButton>

      {filterCategories.map((filter) => {
        return (
          <OptionContent>
            <Basic
              className={"lg:text-[16px] md:text-[14px] sm:text-[12px] py-3"}
              style={{ fontWeight: "700" }}
            >
              {filter.title}
            </Basic>
            {filter.value.map((value) => {
              return (
                <Checkbox>
                  <div>
                    <input
                      type="checkbox"
                      className={` accent-black`}
                      id="filterCheck"
                    />
                    <Basic className="ml-3">{value.title}</Basic>
                  </div>
                  <Basic className="pr-4">{value.quantity}</Basic>
                </Checkbox>
              );
            })}
          </OptionContent>
        );
      })}
        </OptionContainer>
    </div>
  );
};

const OptionContainer = tw.div`
${(p) => p.$openMenu ? "left-0" : "-left-[500px]"}
flex
flex-col
xl:w-auto
lg:w-[45vw]
w-[45vw]
xl:sticky
xl:top-0
bottom-0
xl:left-0
lg:fixed 
fixed
pl-3
peer-transition
ease-out
delay-150
duration-200
top-28
bottom-0
overflow-y-scroll
scrollbar-none
h-screen
z-50
bg-asideBarBgColor border-x border-color235
`;

const ResetButton = tw.button`
text-right 
text-color139 
hover:underline 
cursor-pointer 
pr-6
border-0
bg-transparent
`;

const OptionContent = tw.div`
flex
flex-col
py-2
`;

const Checkbox = tw.div`
flex
flex-row
justify-between
mx-0
py-1
`;

const CustomButton = tw.button`
absolute
xl:hidden
peer 
top-28
left-0
w-10
h-10
hover:bg-logoColor
`
export default Products;

