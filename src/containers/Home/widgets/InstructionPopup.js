import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "@components";
import { XIcon } from "@heroicons/react/solid";
import theme from "@theme";
import LocationPopup from "./LocationPopup";
import { useNavigate } from "react-router-dom";

const InstructionPopup = (props) => {
  const { isOpenModal, closeModal } = props;
  const navigate = useNavigate();
  const [openLocation, setOpenLocation] = useState(false)

  const hidden = !isOpenModal ? "hidden" : "flex";

  const modalStyle = useSpring({
    scale: isOpenModal ? 1 : 0,
    opacity: isOpenModal ? 1 : 0,
  });

  const toggleInstructionModal = () => {
    setOpenLocation(true)
  }

  const openMap = () => {
    navigate("/googleMap")
  }

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
            {"Before you can order, you have to tell us where to deliver"}
          </Heading>
          <div className="p-2 mt-4 flex">
            <ItemContainer className="px-3">
              <TextLinkButton onClick={toggleInstructionModal}>{"Why do we need your location?"}</TextLinkButton>
              <Button
                title={"Select location"}
                className="bg-black rounded-sm lg:mt-5"
                titleStyle={{ color: theme.colors.white }}
                onClick={openMap}
              />
            </ItemContainer>
            <div className="border-l-2 h-[18vh] lg:h-[16vh] px-1" />
            <ItemContainer>
              <TextContent>
                {"If you already know, you are out of the delivery zone"}
              </TextContent>
              <TextButton>{"Please click here"}</TextButton>
            </ItemContainer>
            <div className="border-l-2 h-[18vh] lg:h-[16vh] px-1" />
            <ItemContainer>
              <TextContent>
                {
                  "If you want us to inform you, when we expand our delivery loaction"
                }
              </TextContent>
              <Button
                title={"Register location"}
                className="bg-black rounded-sm mt-5 lg:w-[50%]"
                titleStyle={{ color: theme.colors.white }}
              />
            </ItemContainer>
          </div>
          <LocationPopup isOpenModal={openLocation} closeModal={() => setOpenLocation(false)}/>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
lg:w-[800px]
sm:w-full
h-full
p-2
rounded-sm
`;

const ItemContainer = tw.div`
flex 
flex-col
`;

const TextButton = tw.button`
sm:text-[15px]
text-logoColor
hover:underline
lg:mt-8
sm:mt-5
font-semibold
`;

const TextLinkButton = tw.button`
flex 
text-center
font-semibold
hover:underline
m-2
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
flex 
text-center
font-semibold
hover:underline
m-2
`;

export default InstructionPopup;
