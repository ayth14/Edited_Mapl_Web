import React, { useState } from "react";
import { Button } from "@components";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import countryFlag from "@assets/images/countryFlag.png";
import tempIcon from "@assets/images/tempIcon.png";
import restricted from "@assets/images/restricted.png";

 const Card = (props) => {
  const {
    productName,
    price,
    productImg,
    marketPrice,
    weight,
    productRate,
    iconName,
    deleteIcon,
    trend,
    ...rest
  } = props;
  const navigate = useNavigate();
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };
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
          onClick={handleClick}
          icon={isOn ? deleteIcon : iconName}
          iconStyle={{ width: "auto", height: "14px", padding: "0 0.5rem 0 0" }}
          title={isOn ? "0" : "Add"}
          titleclassname={`${isOn ? "pr-0" : "pr-1"}`}
          titleStyle={{ fontSize:"14px", fontWeight: "700", color: "rgb(45, 56, 66)", display:"flex"}}
          bottomlabel={isOn ? <Icon src={iconName} /> : "to cart"}
        />
      </CartButton>
      <CardTag>
        {trend && <span>{"Trend"}</span>}
      </CardTag>
      <CardImg >
        <Img src={productImg} alt="product image" />
      </CardImg>
      <CardBody>
        <Link to={"/product"}>
          <CardTitle className="">{productName}</CardTitle>
        </Link>
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
4xl:w-[170px] 
2xl:w-[165px] 
xl:w-[130px] 
w-[150px]
whitespace-normal
`;

const CardTag = tw.div`
absolute 
top-12 
left-0  
text-white 
px-2 py-1 
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
2xl:text-xl 
xl:text-base 
font-extrabold 
font-openSans
text-gray-900 
`;

const MarketPrice = tw.span`
2xl:text-xs
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

const Icon = tw.img`
w-auto
h-[14px]
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