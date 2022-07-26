import React from "react";
import tw from "tailwind-styled-components";
import { animated, useSpring } from "@react-spring/web";
import { XIcon } from "@heroicons/react/solid";
import { PrimaryText, Button } from "@components";
import theme from "@theme";

const DeleteModal = (props) => {
  const { isOpenModal, closeModal } = props;

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
          <div className="flex flex-col mx-10 self-start">
            <div className="flex flex-col w-[89%]">
              <PrimaryText className="font-bold">
                {"Delete this address?"}
              </PrimaryText>
              <PrimaryText className="font-normal py-2 w-20">
                {"Kasernenstrasse 66 8180 Buelach CH"}
              </PrimaryText>
            </div>
            <Button
              title={"Yes, thanks"}
              className="bg-black mt-2 font-bold rounded-[3px] w-[60%] self-start"
              titleStyle={{ color: theme.colors.white, fontSize: "15px" }}
              onClick={()=>alert('deleted element')}
            />
          </div>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
md:w-[304px]
sm:w-[50vw]
rounded-sm
h-[220px]
`;

export default DeleteModal;