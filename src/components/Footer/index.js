import React from "react";
import tw from "tailwind-styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import googlePlayButton from "@assets/images/google-play-button.png";
import appsStoreButton from "@assets/images/apps-store-button.png";
import { PrimaryText } from "@components";
import theme from "@theme";

const Footer = () => {
  return (
    <Container>
      <div className="mt-8 mx-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16vw]">
          <div className="flex flex-col text-center sm:text-start">
            <Heading>Contact</Heading>
            <PrimaryText>MAPL AG</PrimaryText>
            <PrimaryText>Soodstrasse 52</PrimaryText>
            <PrimaryText>8134 Adliswil</PrimaryText>
            <PrimaryText className="mb-4">Switzerland</PrimaryText>
            <PrimaryText>Customer service</PrimaryText>
            <PrimaryText>+41 00 000 00 00</PrimaryText>
            <PrimaryText>info@mapl.ch</PrimaryText>
            <PrimaryText>Monday to Friday</PrimaryText>
            <PrimaryText className="mb-4">
              9.00 - 12.00 and 13.30 - 17.00
            </PrimaryText>
            <PrimaryText>No on-site sales.</PrimaryText>
            <PrimaryText>No orders by phone</PrimaryText>
          </div>
          <div className="flex flex-col  text-center sm:text-start">
            <Heading>Help</Heading>
            <ButtonText>{"Return"}</ButtonText>
            <ButtonText>{"Terms of Service"}</ButtonText>
            <ButtonText>{"Privacy"}</ButtonText>
            <ButtonText>{"Shipping Methods"}</ButtonText>
            <ButtonText>{"Imprint"}</ButtonText>
          </div>
          <div className="flex flex-col text-center sm:text-start">
            <Heading>About Us</Heading>
            <ButtonText>{"About us"}</ButtonText>
            <ButtonText>{"Story"}</ButtonText>
            <ButtonText>{"Sustainability"}</ButtonText>
            <ButtonText>{"Business Customers (B2B)"}</ButtonText>
            <ButtonText>{"Media Services"}</ButtonText>
          </div>
        </div>
        <hr className="mt-6 sm:mx-auto" />
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-[16vw] py-6">
          <div className="flex justify-center">
            <Links className="" onClick={() => alert("This is aletr")}>
              <LinksLogo src={googlePlayButton} alt="" />
            </Links>
            <Links onClick={() => alert("This is alert")}>
              <LinksLogo src={appsStoreButton} alt="" />
            </Links>
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a
                href="https://mapl.com/"
                className="hover:underline text-maplsite"
              >
                MAPL.CH
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
          <div className="flex md:justify-start justify-center self-center">
            <ul className="flex">
              <li>
                <FaFacebookF size={20} color={theme.colors.fbColor} />
              </li>
              <li>
                <FaInstagram size={20} color={theme.colors.instaColor} />
              </li>
              <li>
                <FaTwitter size={20} color={theme.colors.twitterColor} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = tw.div`
 bg-asideBarBgColor
 flex
 items-center
 justify-center
 `;

const Links = tw.button`
 flex 
 focus:outline-none
 `;

const LinksLogo = tw.img`
 h-[5vh]
 sm:w-full
 `;

const Heading = tw.span`
mb-4 
text-[14px]
font-semibold   
font-['Raleway']
`;

const ButtonText = tw.button`
hover:underline
flex
justify-start
self-center 
sm:self-start
`;

export default Footer;
