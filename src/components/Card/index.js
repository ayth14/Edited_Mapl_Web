import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import {IoMdAdd} from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import countryFlag from "@assets/images/countryFlag.png";
import tempIcon from "@assets/images/tempIcon.png";
import restricted from "@assets/images/restricted.png";
const Card = (props) => {
  const {
    isId,
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
    outOfStock,
    discount,
    id,
    addable,
    ...rest
  } = props;

  const [state, setState] = useState({
    btnClick: false,
  });

  const { btnClick } = state;

  const navigate = useNavigate();

  const location = useLocation();

  const handlePage = () => {
    navigate(
      location.pathname === "/profile/annoucement/product-notification"
        ? "/profile/annoucement/product-notification"
        : "/product"
    );
  };

  const CartBtnClick = () => {
    setState((prev) => ({ ...prev, btnClick: !btnClick }));
  };

  const cardIcon = [
    { img: countryFlag, size: "max-w-[12%]" },
    { img: tempIcon, size: "max-w-[6%]" },
    { img: restricted, size: "max-w-[12%]" },
  ];
  return (
    <CardContainer {...rest}>
      <CustomButton
        onClick={CartBtnClick}
        $isOn={isId === id && btnClick}
      >
        {addable ? (
          isId === id && btnClick ? (
            <RiDeleteBin5Line />
          ) : (
            <IoMdAdd />
          )
        ) : (
          iconName
        )}
        <Basic>
            {addable ? (isId === id && btnClick ? "1" : "Add") : titleName}
        </Basic>
        <HoverText>
          {addable ? (
            isId === id && btnClick ? (
              <IoMdAdd />
            ) : (
              "to cart"
            )
          ) : (
            bottomlabel
          )}
        </HoverText>
      </CustomButton>
      <div onClick={handlePage}>
        {trendtag || recommendtag || newtag || outOfStock || discount ? (
          <CardTag
            className={`${
              (trendtag && "bg-black") ||
              (newtag && "bg-red-500") ||
              (recommendtag && "bg-yellow-500") ||
              (outOfStock && "bg-color165")
            }`}
          >
            <span>{trendtag || recommendtag || newtag || outOfStock}</span>
          </CardTag>
        ) : null}
        <CardImg>
          <Img src={productImg} alt="product image" />
        </CardImg>
        <CardBody>
          <CardTitle className="">{productName}</CardTitle>
          <CardContent>
            <OurPrice>{price}</OurPrice>
            <MarketPrice>instead {marketPrice}</MarketPrice>
          </CardContent>
          <CardContent>
            <ProductWeight>{weight}</ProductWeight>
            <ProductRate>{productRate}</ProductRate>
          </CardContent>
          <div className="flex items-center justify-between mt-1">
            {cardIcon.map((icon, idx) => {
              return (
                <div key={idx} className={`${icon.size}`}>
                  <img src={icon.img} alt="" />
                </div>
              );
            })}
          </div>
        </CardBody>
      </div>
    </CardContainer>
  );
};
const CardContainer = tw.div`
block
shadow-cartBtn
max-w-sm
bg-white
rounded-[3px]
relative
px-1
whitespace-normal
4xl:w-[190px]
2xl:w-[165px]
xl:w-[150px]
w-[135px]
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

const CustomButton = tw.button`
${(p) => (p.$isOn ? 'w-full justify-between' : '')}
flex
items-center
group
bg-white
shadow-cartBtn
rounded-[30px]
font-bold
text-color456
px-4
py-2
absolute
right-0
`;
const Basic = tw.span`
flex
justify-between
lg:text-[14px]
md:text-sm
text-xs
font-semibold
`;
const HoverText = tw.span`
lg:text-[14px]
md:text-sm
text-xs
font-semibold
pl-[2px]
overflow-hidden
ease-in-out
duration-[0.8s]
tracking-[-2em]
group-hover:tracking-[0em]
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
