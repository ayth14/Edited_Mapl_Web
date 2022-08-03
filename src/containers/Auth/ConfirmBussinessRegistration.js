import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { HeadingText, SecondaryText, AuthContainer } from "@components";
import logo from "@assets/images/mapl1.png";
import checkImage from "@assets/images/checkImg.png";

const ConfirmBusinessRegistration = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 6000);
  });

  return (
    <AuthContainer>
      <LoginContainer>
        <AppLogo src={logo} />
        <LoginContent>
          <div className="flex flex-col self-center text-center">
            <CheckImage src={checkImage} />
            <HeadingText className="my-6">{"THANK YOU!"}</HeadingText>
            <SecondaryText className="text-[11px] text-center px-20 font-semibold leading-4">
              {
                "We appreciate your trust on us and we look forward to a successful business relationship with you. Please be patient while we have checked your information. We will contact you with a confirmation email."
              }
            </SecondaryText>
            <SecondaryText className="text-[11px] mt-6 text-center px-16 font-bold">
              {"ESTIMATED PROCESSING TIME 1-2 DAYS"}
            </SecondaryText>
          </div>
        </LoginContent>
      </LoginContainer>
    </AuthContainer>
  );
};

const LoginContainer = tw.div`
flex 
flex-col 
border
border-borderColor
rounded-[5px]
relative 
bg-white
w-[90%]
lg:w-[480px]
md:w-[440px]
sm:w-[400px]
`;

const AppLogo = tw.img`
self-center
absolute
top-[-17px]
lg:h-[34px]
lg:w-[110px]
h-[34px]
w-[100]
`;

const CheckImage = tw.img`
pt-5  
h-[205.8px]
self-center
`;

const LoginContent = tw.div`
flex
flex-col
my-[5%]
justify-around
`;

export default ConfirmBusinessRegistration;
