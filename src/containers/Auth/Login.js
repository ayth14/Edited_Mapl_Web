import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  PrimaryText,
  SecondaryText,
  AuthContainer,
  AuthHeader,
} from "@components";
import logo from "@assets/images/mapl1.png";
import fbIcon from "@assets/images/fbIcon.png";
import googleIcon from "@assets/images/googleIcon.png";
import appleIcon from "@assets/images/appleIcon.png";
import switzerlandLogo from "@assets/images/flag-switzerland.png";
import theme from "@theme";
import { en } from "@i18n";
import { isEmpty, isValidEmail, isValidPassword, isValidNumber } from "@utils";
import { toast } from "react-toastify";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    phone_num: "",
    code: "",
    signInWithMobile: false,
    showPassword: false
  });
  const { email, password, phone_num, code, signInWithMobile,showPassword } = state;

  const navigate = useNavigate();

  const onHandleClick = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onHandleChange = (event) => {
    (isNaN(event?.target?.value) || event.target.value.length == 0)
      ? setState((prev) => ({ ...prev, signInWithMobile: false , email: event.target.value }))
      : setState((prev) => ({ ...prev, signInWithMobile: true, phone_num: event.target.value }))
  };

  const navigateToHomePage = () => {
    if (isEmpty(email) || isEmpty(password)) {
      toast.error(en.errors.empty_credential);
    } else if (email && !isValidEmail(email.trim())) {
      toast.error(en.errors.emailValidate);
    } else if (password.trim().length < 8) {
      toast.error(en.errors.minimumPasswordValue);
    } else if (password && !isValidPassword(password.trim())) {
      toast.error(en.errors.passwordValidate);
    } else {
      toast.success(en.success.success);
      navigate("/Home");
    }
  };

  const navigateWithValidPhoneNumber = () => {
    if (isEmpty(phone_num) || isEmpty(code)) {
      toast.error(en.errors.empty_credential);
    } else if (phone_num.trim().length < 10) {
      toast.error(en.errors.minimum_phoneNum);
    } else if (phone_num && !isValidNumber(phone_num.trim())) {
      toast.error(en.errors.validPhoneNum);
    } else if (code && !isValidNumber(code.trim())) {
      toast.error("Please enter valid code");
    } else {
      toast.success(en.success.success);
      navigate("/Home");
    }
  };

  const handleClickShowPassword = () =>{ 
    setState(prev => ({ ...prev, showPassword: !showPassword}))
  }

  return (
    <AuthContainer>
      <LoginContainer>
        <AppLogo src={logo} />
        <AuthHeader />
        <LoginContent>
          <div className="py-[25px]">
            <Input
              name={signInWithMobile ? "phone_num" : "email"}
              id={signInWithMobile ? "phone_num" : "email"}
              value={signInWithMobile ? phone_num : email}
              type={signInWithMobile ? "tel" : "email"}
              title={"E-mail or Mobile Number"}
              placeholder={
                signInWithMobile ? "+41 79 774 53 76" : "kunde@mapl.ch"
              }
              inputicon={signInWithMobile ? switzerlandLogo : null}
              onChange={onHandleChange}
            />
            <Input
              name={signInWithMobile ? "code" : "password"}
              id={signInWithMobile ? "code" : "password"}
              value={signInWithMobile ? code : password}
              type={showPassword ? "text" : "password"}
              title={signInWithMobile ? "Enter code" : "Password"}
              placeholder={signInWithMobile ? "Code" : "Password"}
              onChange={onHandleClick}
              hideAndShowEyeIcon={showPassword ? <EyeIcon className="w-3 h-3"/> : <EyeOffIcon className="w-3 h-3"/>}
              hideAndShowPasswordOnClick={handleClickShowPassword}
            />
          </div>
          <Button
            title={signInWithMobile ? "Send" : "SIGN IN"}
            titleStyle={{ color: theme.colors.white }}
            onClick={
              signInWithMobile
                ? navigateWithValidPhoneNumber
                : navigateToHomePage
            }
            className={"self-center bg-black mt-[-10px] w-full"}
          />
          <div className="flex flex-col text-center">
            <div className="py-[16px]">
              {!signInWithMobile ? (
                <PrimaryText className="flex justify-center underline font-sans font-semibold text-[11px]">
                  {"I need help with my password!"}
                </PrimaryText>
              ) : (
                <div className="flex flex-row justify-center">
                  <PrimaryText className="font-sans font-normal text-color172 text-[11px]">
                    {"Didn’t receive the Code?"}
                  </PrimaryText>
                  <TextButton
                    onClick={() => toast.error("this is resend button")}
                  >
                    {"Resend"}
                  </TextButton>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <Line />
              <SecondaryText className="text-color172 mx-2 self-center font-sans text-[11px]">
                {"Or continue with"}
              </SecondaryText>
              <Line />
            </div>
          </div>
          <ButtonContainer>
            <Button
              title={"Facebook"}
              onClick={() => toast.error("social login")}
              className={"bg-button rounded-[4px] items-center w-full border"}
              icon={fbIcon}
              iconStyle={{ width: "5.7px" }}
              iconclassname={"mx-1"}
            />
            <Button
              title={"Google"}
              onClick={() => toast.error("social login")}
              className={
                "bg-button rounded-[4px] my-[25px] items-center w-full border"
              }
              icon={googleIcon}
              iconStyle={{ width: "10px" }}
              iconclassname={"mx-1"}
            />
            <Button
              title={"Apple"}
              onClick={() => toast.error("social login")}
              className={
                "bg-button rounded-[4px] items-center w-full mb-5 border"
              }
              icon={appleIcon}
              iconStyle={{ width: "9.5px" }}
              iconclassname={"mx-1"}
            />
          </ButtonContainer>
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
h-[75%]
lg:h-[630px]
lg:w-[480px]
md:h-[590px]
md:w-[440px]
sm:h-[550px]
sm:w-[400px]
`;

const LoginContent = tw.div`
flex
flex-col
justify-between 
overflow-scroll 
mx-[25px] 
scrollbar-none
`;

const AppLogo = tw.img`
self-center
absolute
top-[-17px]
h-[34px]
lg:w-[110px]
lg:h-[34px]
sm:w-[90px]
sm:h-[28px]
`;

const TextButton = tw.button`
font-sans
text-[11px]
px-1
underline
`;

const Line = tw.div`
border
w-[50px]
h-0
self-center
`;

const ButtonContainer = tw.div`
flex
flex-col
mt-[27px]
w-[full]
mb-[10px]
`;

export default Login;
