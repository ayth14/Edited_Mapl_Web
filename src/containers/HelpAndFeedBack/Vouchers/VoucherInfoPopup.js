import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import voucher from "@assets/images/voucherImg.png";
import { XIcon } from "@heroicons/react/solid";

const VoucherInfoPopup = (props) => {
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
          <XIcon className="w-[20px] text-white" />
        </button>
      </div>
    );
  };

  return (
    <animated.div
      style={modalBackground}
      className={`${hidden} fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center bg-white items-center z-[1000] rounded-md`}
    >
      <animated.div style={modalStyle}>
        <Container>
          <div className="bg-logoColor rounded-tr-md rounded-tl-md">
            <CrossButton />
            <TitleContainer>
              <ItemContent>
                <Heading>
                  {"15%"}
                  <span className="xl:text-5xl lg:text-3xl md:text-2xl text-xl">
                    {"off"}
                  </span>
                </Heading>
                <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-normal text-white">
                  {"on your first order"}
                </p>
                <p className="xl:text-[21px] lg:text-lg md:text-base text-sm font-normal text-white pt-4">
                  {"Offer valid till Jul 16-22"}
                </p>
              </ItemContent>
              <ItemContent>
                <img src={voucher} alt="" className="w-40 h-48 xl:ml-24 ml-4" />
              </ItemContent>
            </TitleContainer>
          </div>
          <ItemContainer>
            <ItemContent>
              <p className="xl:text-lg lg:text-base text-sm font-medium">
                {"What's inside"}
              </p>
              <p className="lg:text-base md:text-sm text-xs font-normal text-color74 pt-2 pb-3">
                {
                  "A limited time 15% off on all grocery products you buy on MAPL Till the offer validity."
                }
              </p>
            </ItemContent>

            <ItemContent>
              <p className="xl:text-lg lg:text-base text-sm font-medium">
                {"How to reedem"}
              </p>
              <TextContent>
                {
                  "- When you will proceed for checkout process, by choosing voucher option you will redirected on the voucher screen."
                }
              </TextContent>
              <TextContent>
                {
                  "- You have 7 days to use this voucher coupon after the mentioned date on offer details the voucher coupon will expires."
                }
              </TextContent>
              <TextContent>
                {
                  "- By clicking on Claim button you will get 15% instant off on your first order after placing the order."
                }
              </TextContent>
            </ItemContent>
            <TextButton>{"Claim"}</TextButton>
          </ItemContainer>
        </Container>
      </animated.div>
    </animated.div>
  );
};

const Container = tw.div`
bg-white
xl:w-[750px]
lg:w-[740px]
md:w-[500px]
sm:w-[400px]
w-[300px]
h-full
mx-6
rounded-md
`;

const TitleContainer = tw.div`
flex 
flex-row
self-center
py-3
mx-9
`;

const ItemContainer = tw.div`
flex 
flex-col
self-center
py-3
mx-9
`;

const ItemContent = tw.div`
flex
flex-col
`;

const TextButton = tw.button`
sm:text-[15px]
text-white
font-semibold
rounded-sm
flex
self-center
justify-center
w-[30%]
bg-color51
py-2
lg:mt-4
sm:mt-5
`;

const Heading = tw.h1`
xl:text-8xl 
lg:text-6xl 
md:text-4xl 
text-3xl
font-bold
text-white
py-2
`;

const TextContent = tw.p`
lg:text-base 
md:text-sm 
text-xs 
font-normal 
text-color74 
pt-2 
pb-2
`;

export default VoucherInfoPopup;
