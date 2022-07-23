import React from "react";
import tw from "tailwind-styled-components";
import OTPInput from "otp-input-react";
import { PrimaryText, Button } from "@components";
import { animated, useSpring } from "@react-spring/web";
import { XIcon } from "@heroicons/react/solid";
import theme from "@theme";

const OtpModal = (props) => {
  const {
    title,
    value,
    onChange,
    titleStyle,
    isOpenModal,
    closeModal,
    heading,
    onClick,
    buttonTitle,
  } = props;

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
          <Content>
            <PrimaryText
              style={{ ...titleStyle }}
              className={"text-[13px] tracking-normal"}
            >
              {title}
            </PrimaryText>
            <PrimaryText
              style={{ ...titleStyle }}
              className={
                "sm:text-[20px] lg:text-[24px] font-bold tracking-wider my-4"
              }
            >
              {heading}
            </PrimaryText>
            <OTPInput
              value={value}
              onChange={onChange}
              autoFocus={true}
              OTPLength={4}
              otpType="number"
              disabled={false}
              className="flex mt-4 w-full lg:justify-center sm:justify-center justify-start mr-0"
              inputStyles={{
                backgroundColor: theme.colors.gray[1],
                height: "50px",
                width: "44px",
                borderWidth: 1,
                borderRadius: "5%",
                borderColor: theme.colors.gray[2],
              }}
            />
            <Button
              title={buttonTitle}
              titleStyle={{
                color: theme.colors.white,
                flex: 1,
                alignSelf: "center",
              }}
              className="bg-black w-[100%] sm:w-[60%] my-8 lg:mr-[20px] sm:mr-[20px] lg:justify-center md:justify-start  font-semibold flex rounded-md"
              onClick={onClick}
            />
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
          </Content>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
mx-auto
w-[90%]
h-[75%]
lg:w-[480px]
md:w-[440px]
sm:w-[400px]
lg:h-[300px]
md:h-[290px]
sm:h-[280px]
rounded-sm
`;

const Content = tw.div`
px-10 
relative 
h-full
mx-auto
flex-col
flex
`;

export default OtpModal;
