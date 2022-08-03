import React from "react";
import tw from "tailwind-styled-components";
import { Card } from "@components";
import bellIcon from "@assets/images/bell.png";
import skyVodaka from "@assets/images/product-Img/skyVodaka.png";
import { useNavigate } from "react-router-dom";

const ProductNotification = () => {

  const navigate = useNavigate();
  
  const onClickHandler = () => {
    navigate("/profile/annoucement/productNotification/product-detail");
  };

  return (
    <Container>
      <Heading>{"Product Notification"}</Heading>
      <div className="mt-6">
        <Card
          productImg={skyVodaka}
          productName={"Skyy Vodka 70cl"}
          price={"29.90"}
          marketPrice={"32.90"}
          weight={"70cl"}
          productRate={"42.70/l"}
          titleName={"Notified"}
          iconName={bellIcon}
          onClick={onClickHandler}
          outOfStock={"Out of stock"}
        />
      </div>
    </Container>
  );
};

const Container = tw.div`
m-[13px]
`;

const Heading = tw.h1`
text-2xl
font-bold
`;

export default ProductNotification;
