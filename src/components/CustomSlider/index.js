import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CustomSlider = (props) => {
  const { children, sliderId, sliderInner } = props;
  const [sliderlength, setSliderLength] = useState(0)
  const nextSlide = () => {
    let slider = document.getElementById(`${sliderId}`);
    slider.scrollLeft = slider.scrollLeft + 250;
    setSliderLength(slider.scrollLeft)
  };
  const prevSlide = () => {
    let slider = document.getElementById(`${sliderId}`);
    slider.scrollLeft = slider.scrollLeft - 250;
    setSliderLength(slider.scrollLeft)
  };
  
  return (
    <>
      <SliderButtonLeft onClick={prevSlide} className={`${sliderlength !== 0 ? 'flex' : 'hidden'}`}>
        <MdChevronLeft
          size={22}
          className={"flex self-center justify-center pr-[2px]"}
        />
      </SliderButtonLeft>
      <ProductSlider id={`${sliderId}`}><div id={`${sliderInner}`}>{children}</div></ProductSlider>
      <SliderButtonRight onClick={nextSlide}  className={`${sliderlength === sliderlength ? 'flex' : 'hidden'}`}>
        <MdChevronRight
          size={22}
          className={"flex self-center justify-center pl-[2px]"}
        />
      </SliderButtonRight>
    </>
  );
};

const ProductSlider = tw.div`
w-full
h-full
whitespace-nowrap
overflow-x-scroll
scrollbar-none
scroll-smooth
`;

const SliderButtonLeft = tw.div`
absolute
border
bg-b2bButton
rounded-full
hover:bg-color456
hover:text-white
top-[50%]
-left-1
translate-y-2/4
z-40
`;

const SliderButtonRight = tw.div`
absolute
border
bg-b2bButton
rounded-full
hover:bg-color456
hover:text-white
top-[50%]
4xl:-right-0
2xl:-right-3
-right-0
translate-y-2/4
z-40
`;

export default CustomSlider;
