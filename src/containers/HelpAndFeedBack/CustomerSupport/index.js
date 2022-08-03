import React from "react";
import tw from "tailwind-styled-components";
import maplLogo from "@assets/images/maplLogo.png";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@components";
import theme from "@theme";

const CustomerSupport = () => {
  return (
    <Container>
      <MaplLogo src={maplLogo} />
      <FaWhatsapp
        size={100}
        className="self-center mb-10"
        color={theme.colors.green}
      />
      <SubHeading>{"Hi, How may I help you ?"}</SubHeading>
      <Button
        title="Connect With Us"
        className="bg-black w-[20%] text-white font-bold  rounded-md"
        titleclassname="text-[16px]"
      />
    </Container>
  );
};

const Container = tw.div`
my-10
flex
flex-col
text-center
border

p-10
rounded-md
`;

const MaplLogo = tw.img`
self-center 
w-[147px]
mx-3
mb-10
`;

const SubHeading = tw.h3`
text-[20px]
font-medium
mb-10
`;

export default CustomerSupport;