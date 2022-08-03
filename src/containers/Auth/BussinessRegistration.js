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
import checkIcon from "@assets/images/openedGray.png";
import greenCheckIcon from "@assets/images/opened.png";
import switzerlandLogo from "@assets/images/flag-switzerland.png";
import OtpModal from "./widgets/OtpModal";
import { toast } from "react-toastify";
import { en } from "@i18n";
import {
  isValidName,
  isValidNumber,
  isValidPassword,
  isValidEmail,
  isValidUrl,
  isValidNo,
  isValidPostcode,
  isValidUserId,
} from "@utils";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const BussinessRegistration = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_num: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    company: "",
    url: "",
    uid: "",
    street: "",
    number: "",
    postCode: "",
    city: "",
    country: "",
    isMobileVerificationModal: false,
    isEmailVerificationModal: false,
    isMobileModalValue: "",
    isEmailModalValue: "",
    isOtpModalValue: "",
    verifyMobileNum: false,
    verifyEmail: false,
  });

  const {
    fname,
    lname,
    email,
    phone_num,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    company,
    url,
    uid,
    street,
    number,
    postCode,
    city,
    country,
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

  const toggleEmailVerificationModal = () => {
    if (email && !isValidEmail(email.trim())) {
      toast.error(en.errors.emailValidate);
    } else {
      setState((prev) => ({ ...prev, isEmailVerificationModal: true }));
    }
  };

  const toggleMobileVerificationModal = () => {
    if (phone_num && !isValidNumber(phone_num.trim())) {
      toast.error(en.errors.phoneNumValidate);
    } else {
      setState((prev) => ({ ...prev, isMobileVerificationModal: true }));
    }
  };

  const onChangeEmail = (event) => {
    setState((prev) => ({ ...prev, email: event.target.value }));
    if (email) {
      setState((prev) => ({ ...prev, verifyEmail: false }));
    }
  };

  const onChangeMobileNum = (event) => {
    setState((prev) => ({ ...prev, phone_num: event.target.value }));
    if (phone_num) {
      setState((prev) => ({ ...prev, verifyMobileNum: false }));
    }
  };

  const getEmailOtpModalValue = (value) => {
    setState({ ...state, isEmailModalValue: value });
  };

  const getMobileNumberOtpModalValue = (value) => {
    setState({ ...state, isMobileModalValue: value });
  };

  const goBackByEmailOtpModal = () => {
    if (isEmailModalValue.trim().length == 0) {
      alert(en.errors.otpValidate);
    } else if (isEmailModalValue.trim().length < 4) {
      alert(en.errors.minimumOtpValue);
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

  const handleClickShowPassword = () =>{ 
    setState(prev => ({ ...prev, showPassword: !showPassword}))
  }

  const handleClickShowConfirmPassword = () => {
    setState(prev => ({...prev , showConfirmPassword: !showConfirmPassword}))
  }

  const goBackByMobileOtpModal = () => {
    if (isMobileModalValue.trim().length == 0) {
      alert(en.errors.otpValidate);
    } else if (isMobileModalValue.trim().length < 4) {
      alert(en.errors.minimumOtpValue);
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

  const checkvalue =
    (fname.trim().length == 0 && en.errors.empty_credential) ||
    (lname.trim().length == 0 && en.errors.lastName) ||
    (email.trim().length == 0 && en.errors.email) ||
    (phone_num.trim().length == 0 && en.errors.empty_mobileNum) ||
    (password.trim().length == 0 && en.errors.password) ||
    (confirmPassword.trim().length == 0 && en.errors.confirmPassword) ||
    (company.trim().length == 0 && en.errors.company) ||
    (uid.trim().length == 0 && en.errors.uid) ||
    (street.trim().length == 0 && en.errors.street) ||
    (number.trim().length == 0 && en.errors.number) ||
    (postCode.trim().length == 0 && en.errors.postCode) ||
    (city.trim().length == 0 && en.errors.city) ||
    (country.trim().length == 0 && en.errors.country);

  const completeRegistration = () => {
    if (checkvalue) {
      toast.error(checkvalue);
    } else if (!verifyEmail) {
      toast.error(en.errors.verifyEmail);
    } else if (!verifyMobileNum) {
      toast.error(en.errors.verifyMobileNum);
    } else if (
      (fname && !isValidName(fname.trim())) ||
      (lname && !isValidName(lname.trim()))
    ) {
      toast.error(en.errors.nameValidate);
    } else if (password && !isValidPassword(password.trim())) {
      toast.error(en.errors.passwordValidate);
    } else if (password !== confirmPassword) {
      toast.error(en.errors.confirmPasswordValidate);
    } else if (company && !isValidName(company.trim())) {
      toast.error(en.errors.validCompanyName);
    } else if (url && !isValidUrl(url.trim())) {
      toast.error(en.errors.validUrl);
    } else if (uid && !isValidUserId(uid.trim())) {
      toast.error(en.errors.validUid);
    } else if (street && !isValidName(street.trim())) {
      toast.error(en.errors.validStreet);
    } else if (number && !isValidNo(number.trim())) {
      toast.error(en.errors.validNumber);
    } else if (postCode && !isValidPostcode(postCode.trim())) {
      toast.error(en.errors.validPostCode);
    } else if (city && !isValidName(city.trim())) {
      toast.error(en.errors.validCity);
    } else if (country && !isValidName(country.trim())) {
      toast.error(en.errors.validCountry);
    } else {
      toast.success(en.success.success);
      navigate("/confirmBusinessRegistration");
    }
  };

  return (
    <AuthContainer>
      <LoginContainer>
        <AppLogo src={logo} />
        <AuthHeader />
        <LoginContent className="overflow-scroll mx-[25px] scrollbar-none">
          <div className="mt-[25px] grid lg:gap-4 lg:grid-cols-2">
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
          <div className="grid lg:gap-4 lg:grid-cols-2">
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
              bottomLabelButton={"Resend"}
              bottomLabelOnClick={() => alert("This is button")}
              bottomLabelContainer={"justify-end"}
              bottomlabelclassname={"text-[9px]"}
              bottomlableresendbtnclassname={"text-[9px]"}
            />
            <Input
              name="phone_num"
              value={phone_num}
              type="tel"
              title={"Phone Number"}
              headericon={
                phone_num && verifyMobileNum
                  ? greenCheckIcon
                  : phone_num
                  ? checkIcon
                  : null
              }
              verifyButtonTitle={
                phone_num && verifyMobileNum
                  ? "Verified"
                  : phone_num
                  ? "Verify"
                  : null
              }
              verifyButtonClassName={`${
                phone_num && verifyMobileNum
                  ? "text-black underline"
                  : phone_num
                  ? "text-blue underline"
                  : null
              }`}
              verifyButtonClick={
                phone_num ? toggleMobileVerificationModal : null
              }
              placeholder={"+14 79 774 53 76"}
              maxLength={13}
              inputicon={switzerlandLogo}
              onChange={onChangeMobileNum}
              bottomlabel={
                phone_num && verifyMobileNum
                  ? null
                  : phone_num
                  ? "Didn’t receive the Code? "
                  : null
              }
              bottomLabelButton={"Resend"}
              bottomLabelOnClick={() => alert("This is button")}
              bottomLabelContainer={"justify-end"}
              bottomlabelclassname={"text-[9px]"}
              bottomlableresendbtnclassname={"text-[9px]"}
            />
          </div>
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
          <div className="grid lg:gap-4 lg:grid-cols-2 ">
            <Input
              name="company"
              value={company}
              type="text"
              title={"Company"}
              placeholder={"Muster GmbH"}
              onChange={onChangeHandler}
            />
            <Input
              name="url"
              value={url}
              type="url"
              title={"Web URL (optional)"}
              placeholder={"Confirm Password"}
              onChange={onChangeHandler}
            />
          </div>
          <Input
            name="uid"
            value={uid}
            type="text"
            title={"UID / VAT number"}
            placeholder={"CH-123.456.789"}
            onChange={onChangeHandler}
          />
          <div className="grid lg:gap-4 lg:grid-cols-2 ">
            <Input
              name="street"
              value={street}
              type="text"
              title={"Street"}
              placeholder={"Soodstrasse"}
              onChange={onChangeHandler}
            />
            <Input
              name="number"
              value={number}
              type="text"
              title={"No."}
              placeholder={"52"}
              maxLength={2}
              onChange={onChangeHandler}
            />
          </div>
          <div className="grid lg:gap-4 lg:grid-cols-3 ">
            <Input
              name="postCode"
              value={postCode}
              type="text"
              title={"Postcode"}
              placeholder={"8134"}
              maxLength={4}
              onChange={onChangeHandler}
            />
            <Input
              name="city"
              value={city}
              type="text"
              title={"City"}
              placeholder={"Adliswil"}
              onChange={onChangeHandler}
            />
            <Input
              name="country"
              value={country}
              type="text"
              title={"Country"}
              placeholder={"Switzerland"}
              onChange={onChangeHandler}
            />
          </div>
          <CheckBox title={"Subscribe to Newsletter"} />
          <Button
            title={"CREATE ACCOUNT"}
            titleStyle={{ color: theme.colors.white }}
            onClick={completeRegistration}
            className={"self-center bg-black my-[20px] mb-[30px] w-full"}
          />
        </LoginContent>
      </LoginContainer>
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

export default BussinessRegistration;