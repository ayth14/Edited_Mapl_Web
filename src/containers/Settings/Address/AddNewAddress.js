import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button, CheckBox } from "@components";
import theme from "@theme";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { en } from "@i18n";
import LeftArrow from '@assets/images/leftArrow.png';

const AddNewAddress = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    postcode: "",
    street: "",
    city: "",
    address: "",
    country: "",
    phone_number: "",
    company: "",
  });

  const {
    fname,
    lname,
    postcode,
    street,
    city,
    address,
    country,
    phone_number,
    company,
  } = state;

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const saveData = () =>{
    toast.success(en.success.success)
  }

  const navigate = useNavigate();

  const onBack = () => {
    navigate('/profile/settings/address')
  }

  return (
    <Container>
      <div className="flex">
      <BackButton src={LeftArrow} onClick={onBack}/>
      <Heading>{"Add New Address"}</Heading>
      </div>
      <div className="w-full lg:w-[38vw] mt-10">
        <div className="grid grid-cols-2 gap-x-5">
          <Input
            name="fname"
            value={fname}
            type={"text"}
            title={"First Name"}
            requiredtitle={fname ? 'text-black' : 'text-logoColor'}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="lname"
            value={lname}
            type={"text"}
            title={"Last Name"}
            requiredtitle={lname ? 'text-black' : 'text-logoColor'}
            className="p-2"
            onChange={onChangeHandler}
          />
        </div>
        <Input
          name="street"
          value={street}
          type={"text"}
          title={"Street + no."}
          requiredtitle={street ? 'text-black' : 'text-logoColor'}
          className="p-2"
          onChange={onChangeHandler}
        />
        <div className="grid grid-cols-3 gap-x-5">
          <Input
            name="postcode"
            value={postcode}
            type={"tel"}
            title={"Postcode"}
            requiredtitle={postcode ? 'text-black' : 'text-logoColor'}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="city"
            value={city}
            type={"text"}
            title={"City"}
            requiredtitle={city ? 'text-black' : 'text-logoColor'}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="address"
            value={address}
            type={"text"}
            title={"Address Title"}
            requiredtitle={address ? 'text-black' : 'text-logoColor'}
            className="p-2"
            onChange={onChangeHandler}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <Input
            name="country"
            value={country}
            type={"text"}
            title={"Country"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="phone_number"
            value={phone_number}
            type={"tel"}
            title={"Phone number"}
            className="p-2"
            onChange={onChangeHandler}
          />
        </div>
        <Input
          name="company"
          value={company}
          type={"text"}
          title={"Company"}
          className="p-2"
          onChange={onChangeHandler}
        />
        <CheckBox title={'Default (Standard) billing'} className='w-5 h-5' titleClassName='font-normal' containerStyle='my-5'/>
        <CheckBox title={'Default (Standard) shipping'} className='w-5 h-5' titleClassName='font-normal' containerStyle='my-5'/>
        <Button
          title={"Save address"}
          className="bg-color51 sm:w-[20vw] md:w-[8vw] rounded-sm p-3"
          style={{ color: theme.colors.white }}
          onClick={saveData}
        />
      </div>
    </Container>
  );
};

const Container = tw.div`
m-[13px]
`;

const BackButton = tw.img`
h-5 
w-5 
self-center 
cursor-pointer
`;

const Heading = tw.h1`
text-xl
font-bold
self-center
mx-2
`;

export default AddNewAddress;