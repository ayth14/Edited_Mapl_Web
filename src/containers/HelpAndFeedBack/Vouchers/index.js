import React, { useState } from "react";
import tw from "tailwind-styled-components";
import voucher from "@assets/images/voucherImg.png";
import voucherLogo from "@assets/images/voucherLogo.png";
import VoucherInfoPopup from "./VoucherInfoPopup";

const Vouchers = () => {
  const [openModal, setOpenModal] = useState(false);

  const offerPrice = [
    "15% off",
    "25% Cashback",
    "25% Cashback",
    "15% off",
    "25% Cashback",
    "15% off",
    "25% Cashback",
    "15% off",
  ];

  const toggleModal = () => {
    setOpenModal(true);
  };
  return (
    <Container>
    <TopHeading>{'Voucher'}</TopHeading>
      <VoucherContainer>
        {offerPrice.map((offer) => (
          <VoucherCard onClick={toggleModal}>
            <div className="absolute 2xl:w-10 2xl:h-10 xl:w-6 xl:h-6 w-5 h-5 m-2">
              <img src={voucherLogo} alt="" />
            </div>
            <a href="#">
              <img
                src={voucher}
                alt=""
                className="rounded-t-lg bg-logoColor xl:p-6 p-5"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <Heading>{offer}</Heading>
              </a>
              <p class="mb-3 font-normal ">on your first order</p>
            </div>
          </VoucherCard>
        ))}
      </VoucherContainer>
      <VoucherInfoPopup
        isOpenModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </Container>
  );
};

const Container = tw.div`
flex
flex-col
2xl:w-full
xl:w-full
lg:w-full
w-full
p-5
`;

const TopHeading = tw.h1`
text-2xl
font-bold
`;

const VoucherContainer = tw.div`
my-10
grid
xl:grid-cols-4
lg:grid-cols-3
sm:grid-col-3
grid-cols-2
gap-4
relative
`;

const VoucherCard = tw.div`
max-w-fit
bg-white 
rounded-lg 
shadow-cartBtn
`;

const Heading = tw.h5`
mb-2 
2xl:text-2xl 
xl:text-base 
lg:text-lg 
md:text-sm 
text-sm 
font-medium 
tracking-tight
`;

export default Vouchers;