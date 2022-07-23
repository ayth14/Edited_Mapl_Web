import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Basic } from "@components";
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
      <Basic
        style={{ fontWeight: 700 }}
        className={"xl:text-3xl lg:text-2xl md:text-xl text-lg pb-5"}
      >
        {"Voucher"}
      </Basic>
      <VoucherContainer>
        {offerPrice.map((offer) => (
          <VoucherCard onClick={toggleModal}>
            <div className="absolute w-10 h-10 m-2">
              <img src={voucherLogo} alt="" />
            </div>
            <a href="#">
              <img
                src={voucher}
                alt=""
                className="rounded-t-lg bg-logoColor p-10"
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
xl:w-2/3
lg:w-full
w-full
py-7
`;

const VoucherContainer = tw.div`
grid
gap-6
xl:grid-cols-4
lg:grid-cols-4
grid-cols-3
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
xl:text-2xl 
lg:text-lg 
md:text-sm 
text-sm 
font-medium 
tracking-tight
`;

export default Vouchers;
