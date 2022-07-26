import React, { useState } from "react";
import { Button } from "@components";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import countryFlag from "@assets/images/countryFlag.png";
import tempIcon from "@assets/images/tempIcon.png";
import restricted from "@assets/images/restricted.png";

 const Card = (props) => {
  const {
    isOn,
    productName,
    price,
    productImg,
    marketPrice,
    weight,
    productRate,
    iconName,
    titleName,
    titleClassName,
    bottomlabel,
    trendtag,
    recommendtag,
    newtag,
    CartBtnClick,
    ...rest
  } = props;
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/product");
  };
  const cardIcon = [
    { img: countryFlag, size: "max-w-[12%]" },
    { img: tempIcon, size: "max-w-[6%]" },
    { img: restricted, size: "max-w-[12%]" },
  ];
  return (
    <CardContainer {...rest}>
      <CartButton className={` ${isOn ? `w-[95%] left-0 mx-auto` : ``}`}>
        <Button
          className={` flex items-center bg-white w-full shadow-cartBtn rounded-[30px] px-2 py-1 ${
            isOn ? "justify-between" : ` `
          }`}
          onClick={CartBtnClick}
          icon={iconName}
          iconStyle={{ width: "auto", height: "14px", padding: "0 0.5rem 0 0" }}
          title={titleName}
          titleclassname={titleClassName}
          titleStyle={{ fontSize:"14px", fontWeight: "700", color: "rgb(45, 56, 66)", display:"flex"}}
          bottomlabel={bottomlabel}
        />
      </CartButton>
      {trendtag || recommendtag  || newtag ? <CardTag className={`${trendtag && 'bg-black' || newtag && "bg-red-500" || recommendtag && "bg-yellow-500"}`}>
         <span>{trendtag || recommendtag || newtag}</span> 
      </CardTag>: null}
      <CardImg onClick={handlePage}>
        <Img src={productImg} alt="product image" />
      </CardImg>
      <CardBody>
        <a href="/product">
          <CardTitle className="">{productName}</CardTitle>
        </a>
        <CardContent>
          <OurPrice>{price}</OurPrice>
          <MarketPrice>instead {marketPrice}</MarketPrice>
        </CardContent>
        <CardContent>
          <ProductWeight>{weight}</ProductWeight>
          <ProductRate>{productRate}</ProductRate>
        </CardContent>
        <div className="flex items-center justify-between mt-1">
          {cardIcon.map((icon) => {
            return (
              <div className={`${icon.size}`}>
                <img src={icon.img} alt="" />
              </div>
            );
          })}
        </div>
      </CardBody>
    </CardContainer>
  );
}

const CardContainer = tw.div`
block
shadow-cartBtn
max-w-sm 
bg-white 
rounded-[3px] 
relative
px-1
whitespace-normal
`;

const CardTag = tw.div`
absolute 
top-12 
left-0  
text-white 
px-2 py-[2px] 
rounded-tr-[5px]
uppercase
`;

const CardBody = tw.div` 
pb-1
`;

const CardTitle = tw.span`
4xl:text-base
2xl:text-xs
text-xs 
xl:text-[11px] 
font-bold 
tracking-tight 
text-gray-900 
`;

const CartButton = tw.div`
absolute 
top-2 
right-0
`;

const CardContent = tw.div`
flex 
justify-between 
items-center 
mt-1 
mb-2
`;

const OurPrice = tw.span`
2xl:text-lg 
xl:text-base 
font-extrabold 
font-openSans
text-gray-900 
`;

const MarketPrice = tw.span`
2xl:text-[10px]
2xl:pr-2
text-[10px] 
md:text-xs 
lg:text-[10px] 
font-semibold 
text-gray-900 
pr-3
`;

const ProductWeight = tw.span`
font-semibold
text-color139
`;

const ProductRate = tw.span`
font-semibold
text-color139
`;

const Img = tw.img`
w-full 
object-contain 
rounded-t-lg 
pt-8
pb-4
xl:h-[10vw] 
lg:h-[18vw] 
md:h-[20vw] 
h-[32vw] 
`;

const CardImg = tw.div`
w-full 
px-2
cursor-pointer
`;

export default Card;