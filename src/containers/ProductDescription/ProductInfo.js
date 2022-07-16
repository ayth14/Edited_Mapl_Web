import React from "react";
import tw from "tailwind-styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { Button, HeadingText } from "@components";
import { Basic, BasicBold } from "@components/Text";
import tempIcon from "@assets/images/tempIcon.png";
import uniqueCost from "@assets/images/uniqueCost.png";
import pack6CostIcon from "@assets/images/pack6Cost.png";
import pack12CostIcon from "@assets/images/pack12Cost.png";

const ProductInfo = (props) => {
  const {
    productImg,
    productName,
    productTitle,
    restrictedIcon,
    productPrice,
    expiryDate,
  } = props;
  const productCost = [
    { img: uniqueCost, title: "Unique Piece CHF 9.90", margin: "0" },
    { img: pack6CostIcon, title: "6-Pack CHF 8.50", margin: "10px" },
    { img: pack12CostIcon, title: "12-Pack CHF 6.90", margin: "7px" },
  ];
  return (
    <Container>
      <ProductImage>
        <img src={productImg} alt="" className="max-w-[40%]" />
        <WishList>
          <AiOutlineHeart size={30} />
        </WishList>
        <Storage>
          <img src={tempIcon} alt="" className="max-w-[35%] mx-auto" />
          <BasicBold>Cooled</BasicBold>
        </Storage>
      </ProductImage>
      <ProductDetail>
        <HeadingText>{productName}</HeadingText>
        <ProductContent>
          <div className="border rounded-2 py-[4px] px-[6px]">
            <Basic>500 stk An Larger</Basic>
          </div>
          <div className=""></div>
        </ProductContent>
        <Basic>{productTitle}</Basic>
        <ProductCost>
          {productCost.map((btn) => {
            return (
              <Button
                icon={btn.img}
                iconStyle={{
                  width: "auto",
                  height: "17px",
                  marginLeft: btn.margin,
                }}
                className="w-full justify-between my-1 border border-b2bButton rounded hover:border-black"
                title={btn.title}
                titleStyle={{
                  fontWeight: "600",
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "16px",
                }}
              />
            );
          })}
        </ProductCost>
        <ProductMessage>
          <img
            src={restrictedIcon}
            alt=""
            className="2xl:max-w-[6%] xl:max-w-[9%] lg:max-w-[10%] md:max-w-[5%]"
          />
          <div className="flex flex-col px-3">
            <BasicBold>
              {"We only deliver to persons of legal age (>18)"}
            </BasicBold>
            <Basic>
              {"We may want to check your ID."}
              <a href="/" className="text-logoColor pl-1">
                {"Learn more"}
              </a>
            </Basic>
          </div>
        </ProductMessage>
        <ProductPrice>
          <div className="flex flex-col">
            <BasicBold>{productPrice}</BasicBold>
            <Basic className="2xl:text-[13px]" style={{ fontWeight: "200" }}>
              incl. VAT., excl. Delivery costs
            </Basic>
          </div>
          <Button
            icon={require("@assets/images/plusIcon.png")}
            iconStyle={{ width: "auto", height: "17px" }}
            title={"Add to Cart"}
            className={"items-center rounded-[30px] w-auto"}
            titleStyle={{
              fontWeight: "600",
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "16px",
              padding: "0 0 0 6px",
            }}
          />
        </ProductPrice>
        <ProductExpiry>
          <span>Best Before Date:</span>
          <span>{expiryDate}</span>
        </ProductExpiry>
      </ProductDetail>
    </Container>
  );
};

const Container = tw.div`
flex
lg:flex-row
md:flex-col
sm:flex-col
xs:flex-col
items-center
py-[6%]
px-4
`;

const ProductImage = tw.div`
flex
lg:w-1/2
md:w-full
sm:w-full
justify-center
relative
z-0
`;
const ProductDetail = tw.div`
lg:w-1/2
md:w-full
sm:w-full
flex
flex-col

`;

const ProductContent = tw.div`
flex
flex-row
py-4
`;

const ProductPrice = tw.div`
flex
flex-row
justify-between
items-center
py-3
`;

const ProductMessage = tw.div`
flex
flex-row
items-center
py-3
`;

const ProductCost = tw.div`
flex 
flex-col
items-center
justify-between
py-4
`;

const WishList = tw.div`
absolute 
top-0 
right-5
`;
const Storage = tw.div`
absolute 
bottom-0 
right-5
`;
const ProductExpiry = tw.div`
flex
`;

export default ProductInfo;
