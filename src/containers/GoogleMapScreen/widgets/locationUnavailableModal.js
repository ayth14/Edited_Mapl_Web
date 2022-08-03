import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import { XIcon } from "@heroicons/react/solid";
import { PrimaryText, Button, Input } from "@components";
import theme from "@theme";

const LocationUnavailableModal = (props) => {
  const { isOpenModal, closeModal } = props;

  const hidden = !isOpenModal ? "hidden" : "flex";

  const modalStyle = useSpring({
    scale: isOpenModal ? 1 : 0,
    opacity: isOpenModal ? 1 : 0,
  });

  const modalBackground = useSpring({
    backgroundColor: isOpenModal ? "rgba(0,0,0,0.5)" : "transparent",
  });

  const navigate = useNavigate();

  const goBackModal = () => {
    navigate("/home");
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
          <div className="px-10">
            <Heading>{"Location Unavailable"}</Heading>
            <div className="pt-4">
              <PrimaryText className="flex text-center px-4 ">
                {
                  "Unfortunately we are not yet in your region, but take the chance and vote for the next region we should start by filling out the form below:"
                }
              </PrimaryText>
            </div>
            <Input
              title={"NAME"}
              titleStyle={{ fontWeight: "bold" }}
              type={'text'}
              placeholder={"Name"}
              className="rounded-sm"
            />
            <Input
              title={"EMAIL"}
              titleStyle={{ fontWeight: "bold" }}
              type={'email'}
              placeholder={"email@.com"}
            />
            <Input
              title={"STREET"}
              titleStyle={{ fontWeight: "bold" }}
              type={'text'}
              placeholder={"Street Address"}
            />
            <div className="grid lg:grid-cols-2 lg:gap-4">
              <Input
                title={"POSTAL CODE"}
                titleStyle={{ fontWeight: "bold" }}
                type={'text'}
                placeholder={"Postal Code"}
              />
              <Input
                title={"CITY"}
                titleStyle={{ fontWeight: "bold" }}
                type={'text'}
                placeholder={"City"}
              />
            </div>
            <Button
              title={"Confirm"}
              className="w-full bg-black mt-4"
              titleStyle={{ color: theme.colors.white }}
              onClick={goBackModal}
            />
            <PrimaryText className="flex text-center px-4 my-4">
              {
                "Your email address is only used to send you information about the expansion of the delivery area and news about the activities of mapl.ch. You can always use the unsubscribe link included in the email."
              }
            </PrimaryText>
          </div>
        </Container>
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
font-semibold
text-[18px]
self-center
text-center
`;

export default LocationUnavailableModal;