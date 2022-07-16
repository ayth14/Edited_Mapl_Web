import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { animated, useSpring } from "@react-spring/web";
import { PrimaryText, Button } from "@components";
import theme from '@theme';

const InsertAddressModal = (props) => {
  const { isOpenModal, closeModal } = props;

  const [state, setState] = useState({
    isToggleModal: false,
  });
  const { isToggleModal } = state;

  const hidden = !isOpenModal ? "hidden" : "flex";

  const modalStyle = useSpring({
    scale: isOpenModal ? 1 : 0,
    opacity: isOpenModal ? 1 : 0,
  });

  const modalBackground = useSpring({
    backgroundColor: isOpenModal ? "rgba(0,0,0,0.5)" : "transparent",
  });

  return (
    <animated.div
      style={modalBackground}
      className={`${hidden} fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center bg-white items-center z-[1000]`}
    >
      <animated.div style={modalStyle}>
        <Container>
          <div className="my-2 flex flex-col">
            <div className="flex flex-col w-[89%] self-center py-1">
              <PrimaryText
                style={{ color: theme.colors.green }}
                className="font-normal"
              >
                {"We are about to arrive here!"}
              </PrimaryText>
              <PrimaryText className="font-normal">
                {"4073 Sundown Lane Austin, Texas, 78749"}
              </PrimaryText>
            </div>
            <Button
              title={"Confirm address"}
              className="bg-black mt-2 font-bold rounded-[3px]"
              titleStyle={{ color: theme.colors.white, fontSize: "15px" }}
            />
          </div>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
mx-auto
md:w-[324px]
sm:w-[50vw]
rounded-lg
p-[1px]
`;

export default InsertAddressModal;