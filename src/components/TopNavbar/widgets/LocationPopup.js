import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { animated, useSpring } from "@react-spring/web";
import { XIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const LocationPopup = (props) => {

  const { isOpenModal, closeModal } = props;

  const navigate = useNavigate();

  const hidden = !isOpenModal ? "hidden" : "flex";

  const modalStyle = useSpring({
    scale: isOpenModal ? 1 : 0,
    opacity: isOpenModal ? 1 : 0,
  });

  const modalBackground = useSpring({
    backgroundColor: isOpenModal ? "rgba(0,0,0,0.5)" : "transparent",
  });

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
          <ItemContainer>
            <ItemContent>
              <Heading>{"Reason 1"}</Heading>
              <TextContent>
                One of our mottos is:
                <TextSemibold> From the quarter for the quarter!</TextSemibold>
              </TextContent>
              <TextContent>
                Depending on where you are,
                <TextSemibold>
                  different products from your neighborhood
                </TextSemibold>{" "}
                are available, for example from your neighborhood bakery.
              </TextContent>
            </ItemContent>
            <ItemContent>
              <Heading>{"Reason 2"}</Heading>
              <TextContent>
                So that we can get to you as quickly as possible, we have
                <TextSemibold> various local department stores.</TextSemibold>
              </TextContent>
              <TextContent>
                In order to be able to show you the{" "}
                <TextSemibold>correct product</TextSemibold> availability, we
                need to be able to allocate you to a warehouse right from the
                start. Makes sense right?
              </TextContent>
            </ItemContent>
            <ItemContent>
              <Heading>{"Tip"}</Heading>
              <TextContent>
                <Link to={"/googleMap"} className={"text-logoColor"}>
                  Register right at the beginning
                </Link>
                {", then your delivery address is automatically stored. "}
              </TextContent>
              <TextContent>
                If you want to have it delivered to a{" "}
                <TextSemibold>different address, first enter your</TextSemibold>{" "}
                <Link to={"/googleMap"} className={"text-logoColor"}>
                  new address
                </Link>{" "}
                so that the correct and available products for your neighborhood
                are available in the shop.
              </TextContent>
            </ItemContent>
          </ItemContainer>
          <BottomText className="leading-10 tracking-wider py-4">
            {"Thank you for your understanding and your information!"}
          </BottomText>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
flex
flex-col
p-2
rounded-sm
xl:w-[60vw] xl:h-full
lg:w-[70vw] lg:h-full
lg:relative
fixed
inset-0
mx-auto
my-[15%]
w-[85%]
h-[80%]
`;

const ItemContainer = tw.div`
px-2
py-7
mt-4
flex
flex-col
relative
mx-auto
overflow-y-scroll
scrollbar-none
lg:flex-row
`;

const ItemContent = tw.div`
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

const TextSemibold = tw.span`
font-semibold
`;

const BottomText = tw.p`
text-center
font-semibold
text-[16px]
`;

export default LocationPopup;
