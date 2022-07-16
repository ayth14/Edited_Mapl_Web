import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { HeadingText, SecondaryText, Button,AuthContainer } from "@components";
import logo from '@assets/images/mapl1.png';
import checkImage from '@assets/images/checkImg.png';
import theme from "@theme";

const ConfirmRegistration = () => {

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate('/home')
  };

  return (
    <AuthContainer>
      <LoginContainer>
        <AppLogo src={logo} />
        <LoginContent>
          <div className="flex flex-col self-center text-center">
            <CheckImage src={checkImage} />
            <HeadingText className='my-6' >
              {'THANK YOU!'}
            </HeadingText>
            <SecondaryText className='font-sans text-[11px] font-semibold leading-4' >
              {'Your register has been completed.'} 
            </SecondaryText>
            <Button
              title={'Start Shopping'}
              titleStyle={{ color: theme.colors.white }}
              onClick={navigateToHomePage}
              className='bg-black mt-6'
            />
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

export default ConfirmRegistration;

