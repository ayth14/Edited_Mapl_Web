import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { animated, useSpring } from "@react-spring/web";
import { XIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const LocationPopup = (props) => {
  const { isOpenModal, closeModal } = props;
  const navigate = useNavigate()
  const hidden = !isOpenModal ? "hidden" : "flex";

  const modalStyle = useSpring({
    scale: isOpenModal ? 1 : 0,
    opacity: isOpenModal ? 1 : 0,
  });

  const modalBackground = useSpring({
    backgroundColor: isOpenModal ? "rgba(0,0,0,0.5)" : "transparent",
  });

  const registerAddress = () => {
    navigate("/googleMap")
  }

  const CrossButton = () => {
    return (
      <div className="flex justify-end">
        <button onClick={closeModal} className="m-2">
          <XIcon className="w-[20px]" />
        </button>
      </div>
    );
  };

  return (
    <animated.div
      style={modalBackground}
      className={`${hidden} fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center bg-white items-center z-[1000]`}
    >
      <animated.div style={modalStyle}>
        <Container>
          <CrossButton />
          <Heading>
            {
              "Two reasons why we need your shipping address right from the start"
            }
          </Heading>
          <div className="p-2 mt-4 flex">
            <ItemContainer>
              <Heading>{"Reason 1"}</Heading>
              <div>
                <TextContent>
                  {
                    "One of our mottos is: From the quarter for the quarter!Depending on where you are, different products from your neighborhood are available, for example from your neighborhood bakery. "
                  }
                </TextContent>
              </div>
            </ItemContainer>
            <ItemContainer>
              <Heading>{"Reason 2"}</Heading>
              <TextContent>
                {
                  "So that we can get to you as quickly as possible, we have various local department stores. In order to be able to show you the correct product availability, we need to be able to allocate you to a warehouse right from the start. Makes sense right? "
                }
              </TextContent>
            </ItemContainer>
            <ItemContainer>
              <Heading>{"Tip"}</Heading>
              <TextContent>
                <RegisterButton onClick={registerAddress}>Register right at the beginning</RegisterButton> , then your delivery address is automatically stored. If you want to have it delivered to a different address, first enter your  new address  so that the correct and available products for your neighborhood are available in the shop.
              </TextContent>
            </ItemContainer>
          </div>
          <BottomText className="leading-10 tracking-wider">
            {"Thank you for your understanding and your information!"}
          </BottomText>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
lg:w-[60vw]
sm:w-full
h-full
p-2
rounded-sm
`;

const ItemContainer = tw.div`
flex 
flex-col
`;

const Heading = tw.h1`
font-bold
text-[18px]
self-center
text-center
leading-5
tracking-wide 
px-10
`;

const TextContent = tw.p`
text-[13px]
text-center
m-2
`;

const BottomText = tw.p`
text-center
font-semibold
text-[16px]
`;

const RegisterButton = tw.button`
text-logoColor
`
export default LocationPopup;
