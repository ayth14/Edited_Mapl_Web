import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  AuthContainer,
  CheckBox,
  AuthHeader,
} from "@components";
import theme from "@theme";
import logo from "@assets/images/mapl1.png";
import switzerlandLogo from "@assets/images/flag-switzerland.png";
import checkIcon from "@assets/images/openedGray.png";
import greenCheckIcon from "@assets/images/opened.png";
import OtpModal from "./widgets/OtpModal";
import { isValidName, isValidNumber, isValidEmail, isValidPassword } from "@utils";
import { toast } from "react-toastify";
import { en } from "@i18n";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Registration = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    mobile_num: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    isMobileVerificationModal: false,
    isEmailVerificationModal: false,
    isMobileModalValue: "",
    isEmailModalValue: "",
    verifyMobileNum: false,
    verifyEmail: false,
  });

  const {
    fname,
    lname,
    mobile_num,
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    isMobileVerificationModal,
    isEmailVerificationModal,
    isMobileModalValue,
    isEmailModalValue,
    verifyMobileNum,
    verifyEmail,
  } = state;

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const toggleMobileVerificationModal = () => {
    if(mobile_num && !isValidNumber(mobile_num.trim())){
      toast.error(en.errors.phoneNumValidate)
    }else{
      setState((prev) => ({ ...prev, isMobileVerificationModal: true }));
    }
  };

  const toggleEmailVerificationModal = () => {
    if (email && !isValidEmail(email.trim())) {
      toast.error(en.errors.emailValidate)
    } else {
      setState((prev) => ({ ...prev, isEmailVerificationModal: true }));
    }
  };

  const onChangeMobileNum = (event) => {
    setState((prev) => ({ ...prev, mobile_num: event.target.value }));
    if (mobile_num) {
      setState((prev) => ({ ...prev, verifyMobileNum: false }));
    }
  };

  const onChangeEmail = (event) => {
    setState((prev) => ({ ...prev, email: event.target.value }));
    if (email) {
      setState((prev) => ({ ...prev, verifyEmail: false }));
    }
  };

  const getMobileNumberOtpModalValue = (value) => {
    setState({ ...state, isMobileModalValue: value });
  };

  const getEmailOtpModalValue = (value) => {
    setState({ ...state, isEmailModalValue: value });
  };

  const handleClickShowPassword = () =>{ 
    setState(prev => ({ ...prev, showPassword: !showPassword}))
  }

  const handleClickShowConfirmPassword = () => {
    setState(prev => ({...prev , showConfirmPassword: !showConfirmPassword}))
  }

  const goBackByMobileOtpModal = () => {
    if (isMobileModalValue.trim().length == 0) {
      toast.error(en.errors.otpValidate);
    } else if (isMobileModalValue.trim().length < 4) {
      toast.error(en.errors.minimumOtpValue);
    } else {
      toast.success(en.success.verified);
      setState((prev) => ({
        ...prev,
        isMobileVerificationModal: false,
        verifyMobileNum: true,
        isMobileModalValue: null,
      }));
    }
  };

  const goBackByEmailOtpModal = () => {
    if (isEmailModalValue.trim().length == 0) {
      toast.error(en.errors.otpValidate);
    } else if (isEmailModalValue.trim().length < 4) {
      toast.error(en.errors.minimumOtpValue);
    } else {
      toast.success(en.success.verified);
      setState((prev) => ({
        ...prev,
        isEmailVerificationModal: false,
        verifyEmail: true,
        isEmailModalValue: null,
      }));
    }
  };

  let checkvalue =
    (fname.trim().length == 0 && en.errors.empty_credential) ||
    (lname.trim().length == 0 && en.errors.lastName) ||
    (mobile_num.trim().length == 0 && en.errors.empty_mobileNum) ||
    (email.trim().length == 0 && en.errors.email) ||
    (password.trim().length == 0 && en.errors.password) ||
    (confirmPassword.trim().length == 0 && en.errors.confirmPassword);

  let checkAllInputs =
    fname.trim().length == 0 ||
    lname.trim().length == 0 ||
    password.trim().length == 0 ||
    confirmPassword.trim().length == 0;

  const createAccount = () => {
    if (checkvalue) {
      toast.error(checkvalue);
    } else if (
      (fname && !isValidName(fname.trim())) ||
      (lname && !isValidName(lname.trim()))
    ) {
      toast.error(en.errors.nameValidate);
    } else if (!verifyMobileNum) {
      toast.error(en.errors.verifyMobileNum);
    } else if (!verifyEmail) {
      toast.error(en.errors.verifyEmail);
    } else if (password && !isValidPassword(password.trim())) {
      toast.error(en.errors.passwordValidate);
    } else if (password !== confirmPassword) {
      toast.error(en.errors.confirmPasswordValidate);
    } else {
      toast.success(en.success.success);
      navigate("/confirmRegistration");
    }
  };

  const goToBussinessRegPage = () => {
    navigate("/bussinessRegistration");
  };

  return (
    <AuthContainer>
      <LoginContainer>
        <AppLogo src={logo} />
        <AuthHeader />
        <LoginContent className="overflow-scroll mx-[25px] scrollbar-none">
          <div className="mt-[25px] grid lg:gap-4 lg:grid-cols-2 ">
            <Input
              name="fname"
              value={fname}
              type="text"
              title={"First Name"}
              placeholder={"Max"}
              onChange={onChangeHandler}
            />
            <Input
              name="lname"
              value={lname}
              type="text"
              title={"Last Name"}
              placeholder={"Muster"}
              onChange={onChangeHandler}
            />
          </div>
          <Input
            name="mobile_num"
            value={mobile_num}
            type="tel"
            title={"Mobile Number"}
            headericon={
              mobile_num && verifyMobileNum
                ? greenCheckIcon
                : mobile_num
                ? checkIcon
                : null
            }
            verifyButtonTitle={
              mobile_num && verifyMobileNum
                ? "Verified"
                : mobile_num
                ? "Verify"
                : null
            }
            verifyButtonClassName={`${
              mobile_num && verifyMobileNum
                ? "text-black underline"
                : mobile_num
                ? "text-blue underline"
                : null
            }`}
            verifyButtonClick={
              mobile_num ? toggleMobileVerificationModal : null
            }
            placeholder={"+41 79 774 53 76"}
            maxLength={13}
            inputicon={switzerlandLogo}
            onChange={onChangeMobileNum}
            bottomlabel={
              mobile_num && verifyMobileNum
                ? null
                : mobile_num
                ? "Didn’t receive the Code? "
                : null
            }
            bottomlabelclassname={"text-[12px]"}
            bottomLabelButton={"Resend"}
            bottomLabelOnClick={() => alert("This is button")}
            bottomLabelContainer={"justify-center"}
            bottomlableresendbtnclassname={"text-[12px]"}
          />
          <Input
            name="email"
            value={email}
            type="email"
            title={"E-mail"}
            headericon={
              email && verifyEmail ? greenCheckIcon : email ? checkIcon : null
            }
            verifyButtonTitle={
              email && verifyEmail ? "Verified" : email ? "Verify" : null
            }
            verifyButtonClassName={`${
              email && verifyEmail
                ? "text-black underline"
                : email
                ? "text-blue underline"
                : null
            }`}
            verifyButtonClick={email ? toggleEmailVerificationModal : null}
            placeholder={"kunde@mapl.ch"}
            onChange={onChangeEmail}
            bottomlabel={
              email && verifyEmail
                ? null
                : email
                ? "Didn’t receive the Code? "
                : null
            }
            bottomlabelclassname={"text-[12px]"}
            bottomLabelButton={"Resend"}
            bottomLabelOnClick={() => alert("This is button")}
            bottomLabelContainer={"justify-center"}
            bottomlableresendbtnclassname={"text-[12px]"}
          />
          <Input
            name="password"
            value={password}
            type={showPassword ? "text" : "password"}
            title={"Password"}
            placeholder={"Password"}
            onChange={onChangeHandler}
            hideAndShowEyeIcon={showPassword ? <EyeIcon className="w-3 h-3"/> : <EyeOffIcon className="w-3 h-3"/>}
            hideAndShowPasswordOnClick={handleClickShowPassword}
          />
          <Input
            name="confirmPassword"
            value={confirmPassword}
            type={showConfirmPassword ? "text" : "password"}
            title={"Confirm Password"}
            placeholder={"Confirm Password"}
            onChange={onChangeHandler}
            hideAndShowEyeIcon={showConfirmPassword ? <EyeIcon className="w-3 h-3"/> : <EyeOffIcon className="w-3 h-3"/>}
            hideAndShowPasswordOnClick={handleClickShowConfirmPassword}
          />
          <CheckBox title={"Subscribe to Newsletter"} />
          <Button
            title={"CREATE ACCOUNT"}
            titleStyle={{
              color:
                mobile_num && checkAllInputs
                  ? theme.colors.black
                  : mobile_num
                  ? theme.colors.white
                  : theme.colors.white,
            }}
            onClick={createAccount}
            className={`${
              mobile_num && checkAllInputs
                ? "self-center bg-b2bButton mt-[20px] w-full"
                : mobile_num
                ? "self-center bg-black mt-[20px] w-full"
                : "self-center bg-black mt-[20px] w-full"
            }`}
          />
          <Button
            title={"APPLY FOR A B2B ACCOUNT"}
            titleStyle={{
              color:
                mobile_num && checkAllInputs
                  ? theme.colors.white
                  : mobile_num
                  ? theme.colors.black
                  : theme.colors.black,
            }}
            onClick={goToBussinessRegPage}
            className={`${
              mobile_num && checkAllInputs
                ? "self-center bg-black my-[20px] mb-[30px] w-full"
                : mobile_num
                ? "self-center bg-b2bButton my-[20px] mb-[30px] w-full"
                : "self-center bg-b2bButton my-[20px] mb-[30px] w-full"
            }`}
          />
        </LoginContent>
      </LoginContainer>
      <OtpModal
        value={isMobileModalValue}
        onChange={getMobileNumberOtpModalValue}
        isOpenModal={isMobileVerificationModal}
        title={"Mobile number Verification"}
        heading={"Please enter 4 digit code"}
        buttonTitle={"Verify"}
        closeModal={() =>
          isMobileVerificationModal &&
          setState((prev) => ({ ...prev, isMobileVerificationModal: false }))
        }
        onClick={goBackByMobileOtpModal}
      />
      <OtpModal
        value={isEmailModalValue}
        onChange={getEmailOtpModalValue}
        isOpenModal={isEmailVerificationModal}
        title={"Email Verification"}
        heading={"Please enter 4 digit code"}
        buttonTitle={"Verify"}
        closeModal={() =>
          isEmailVerificationModal &&
          setState((prev) => ({ ...prev, isEmailVerificationModal: false }))
        }
        onClick={goBackByEmailOtpModal}
      />
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

export default Registration;