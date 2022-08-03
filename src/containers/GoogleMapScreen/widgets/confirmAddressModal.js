import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { animated, useSpring } from "@react-spring/web";
import { XIcon } from "@heroicons/react/solid";
import { PrimaryText, Button, GoogleMap } from "@components";
import theme from "@theme";
import indoorWhite from "@assets/images/home.png";
import indoorBlack from "@assets/images/homeBlack.png";
import outdoor from "@assets/images/outdoor.png";
import outdoorWhite from "@assets/images/outdoorWhite.png";
import { HiOutlinePencil } from "react-icons/hi";
import LocationUnavailableModal from "./locationUnavailableModal";

const ConfirmAddressModal = ({ isOpenModal, closeModal }) => {
  const [state, setState] = useState({
    isToggleDoor: true,
    isLocationUnavailableModal: false,
  });
  const { isToggleDoor, isLocationUnavailableModal } = state;

  const hidden = !isOpenModal ? "hidden" : "flex";

  const modalStyle = useSpring({
    scale: isOpenModal ? 1 : 0,
    opacity: isOpenModal ? 1 : 0,
  });

  const modalBackground = useSpring({
    backgroundColor: isOpenModal ? "rgba(0,0,0,0.5)" : "transparent",
  });

  const toggleIndoor = () => {
    setState((prev) => ({ ...prev, isToggleDoor: true }));
  };

  const toggleOutdoor = () => {
    setState((prev) => ({ ...prev, isToggleDoor: false }));
  };

  const gotoNextModal = () => {
    setState((prev) => ({ ...prev, isLocationUnavailableModal: true }));
  };

  const CrossButton = () => {
    return (
      <div className="flex justify-end">
        <button onClick={closeModal} className="m-3">
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
          <Content>
            <Heading>{"CONFIRM DELIVERY ADDRESS"}</Heading>
            <div className="pt-4">
              <PrimaryText>{"Please check your address details"}</PrimaryText>
            </div>
            <div className="flex my-4 border">
              <div
                className={`${
                  isToggleDoor ? "bg-black" : "bg-white"
                } inline-block w-full text-center`}
              >
                <ToggleButton onClick={toggleIndoor} className='align-middle' style={{color: !isToggleDoor ? theme.colors.black : theme.colors.white}}>
                  {"Is indoor"}
                </ToggleButton>
                <img
                  src={isToggleDoor ? indoorWhite : indoorBlack}
                  className={"inline-block w-6 h-5 self-center mx-2"}
                  alt=""
                />
              </div>
              <div
                className={`${
                  !isToggleDoor ? "bg-black" : "bg-white"
                } inline-block w-full text-center`}
              >
                <ToggleButton onClick={toggleOutdoor} className='align-middle' style={{color: isToggleDoor ? theme.colors.black : theme.colors.white}}>
                  {"Is outdoor"}
                </ToggleButton>
                <img
                  src={!isToggleDoor ? outdoorWhite : outdoor}
                  className={"inline-block w-5 h-5 self-center mx-2"}
                  alt=""
                />
              </div>
            </div>
            <GoogleMapContainer>
              <GoogleMap />
            </GoogleMapContainer>
            {!isToggleDoor ? (
               <div className="flex flex-col">
                <div className="flex">
               <SearchInput
                 placeholder="e.g. 4073, Sundown Lane Austin, Texas, 78749"
                 className="w-full"
               />
               <HiOutlinePencil className="flex self-center mb-1" />
               </div>
                 <input type={"file"} className='mt-3' />
             </div>
            ) : (
              <div className="flex flex-row">
                <SearchInput
                  placeholder="e.g. 4073, Sundown Lane Austin, Texas, 78749"
                  className="w-full"
                />
                <HiOutlinePencil className="flex self-center mb-1" />
              </div>
            )}
            <div className="my-3">
              <PrimaryText className="font-bold">{"Delivery Note"}</PrimaryText>
              <InputMessage
                placeholder={"Describe us how we find you best."}
                className="min-h-[10vh]"
              />
              <PrimaryText className="font-bold">{"Address Title"}</PrimaryText>
              <InputMessage
                placeholder={"e.g. home, office etc."}
                className="min-h-[4vh]"
              />
            </div>
            <div className="overflow-y-auto">
              <Button
                title={"Confirm"}
                className="bg-black w-full mb-5"
                titleStyle={{ color: theme.colors.white, fontWeight: "bold" }}
                onClick={gotoNextModal}
              />
            </div>
          </Content>
        </Container>
        <LocationUnavailableModal
          isOpenModal={isLocationUnavailableModal}
          closeModal={() =>
            isLocationUnavailableModal &&
            setState((prev) => ({ ...prev, isLocationUnavailableModal: false }))
          }
        />
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
w-[90%]
h-[75%]
lg:h-[650px]
lg:w-[480px]
md:h-[590px]
md:w-[440px]
sm:h-[550px]
sm:w-[400px]
bg-white
mx-auto
overflow-scroll
scrollbar-none
`;

const Heading = tw.h1`
whitespace-nowrap
overflow-hidden
overflow-ellipsis
font-bold
text-[16px]
self-center
text-center
`;

const Content = tw.div`
px-10
relative
h-full
mx-auto
`;

const GoogleMapContainer = tw.div`
flex
relative
h-[30vh]
md:w-full
my-5
`;

const ToggleButton = tw.button`
h-10
self-center
`;

const SearchInput = tw.input`
w-full
border-b-2
w-[32%]
focus:outline-none
`;

const InputMessage = tw.textarea`
w-full
focus:outline-none
bg-color236
border-color207
rounded-md
my-3
p-2
`;

export default ConfirmAddressModal;