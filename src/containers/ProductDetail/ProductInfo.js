import React from "react";
import tw from "tailwind-styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button, HeadingText, Ratings } from "@components";
import { Basic, BasicBold } from "@components/Text";
import plusIcon from "@assets/images/plusIcon.png";
import tempIcon from "@assets/images/tempIcon.png";
import uniqueCost from "@assets/images/uniqueCost.png";
import pack6CostIcon from "@assets/images/pack6Cost.png";
import pack12CostIcon from "@assets/images/pack12Cost.png";
import { useState } from "react";

const ProductInfo = (props) => {
  const [wishList, setWishList] = useState(false);
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
  const handleWishList = () => {
    setWishList(!wishList);
  };
  return (
    <Container>
      <ProductImage>
        <img
          src={productImg}
          alt=""
          className="max-w-[40%] pointer-events-none"
        />
        <WishList onClick={handleWishList}>
          {wishList ? (
            <AiFillHeart size={30} color={"red"} />
          ) : (
            <AiOutlineHeart size={30} />
          )}
        </WishList>
        <Storage>
          <img
            src={tempIcon}
            alt=""
            className="max-w-[35%] mx-auto pointer-events-none"
          />
          <BasicBold>Cooled</BasicBold>
        </Storage>
      </ProductImage>
      <ProductDetail>
        <ProductContent>
          <HeadingText>{productName}</HeadingText>
          <ProductRating>
            <div className="border rounded-2 py-[4px] px-[6px]">
              <Basic>{"500 stk An Larger"}</Basic>
            </div>
            <div className="">
              <Ratings totalStars={5} label={"Rating"} />
            </div>
          </ProductRating>
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
          <Img src={restrictedIcon} alt="" className="" />
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
            icon={plusIcon}
            iconStyle={{ width: "auto", height: "17px" }}
            title={"Add to Cart"}
            className={
              "bg-white shadow-cartBtn items-center rounded-[30px] w-auto"
            }
            titleStyle={{
              fontWeight: "600",
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "16px",
              padding: "0 0 0 6px",
            }}
          />
        </ProductPrice>
        <ProductExpiry>
          <span className="pr-5">Best Before Date:</span>
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
2xl:pr-16
xl:pr-12
`;

const Img = tw.img`
2xl:max-w-[6%] 
xl:max-w-[9%] 
lg:max-w-[10%] 
md:max-w-[5%] 
max-w-[10%]
`;

const ProductContent = tw.div`
flex
flex-col
justify-between
py-4
`;

const ProductRating = tw.div`
flex
flex-row
justify-between
py-2
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
right-14
`;

const Storage = tw.div`
absolute 
bottom-0 
right-14
`;

const ProductExpiry = tw.div`
flex
`;

export default ProductInfo;
