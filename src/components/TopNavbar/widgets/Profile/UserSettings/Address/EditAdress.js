import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button, CheckBox } from "@components";
import theme from "@theme";
import { toast } from "react-toastify";
import { en } from "@i18n";

const EditAddress = () => {
  const [state, setState] = useState({
    fname: "Gowrithasan",
    lname: "Kandasamy",
    postcode: "8180",
    street: "Kasernenstrasse 66",
    city: "Bülach",
    address: "Home Address",
    country: "Switzerland",
    phone_number: "079 774 53 76",
    company: "Büli Kiosk GmbH",
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

  const savedata = () =>{
    toast.success(en.success.success)
  }

  return (
    <Container>
      <Heading>{"Edit Address"}</Heading>
      <div className="w-full lg:w-[38vw] mt-10">
        <div className="grid grid-cols-2 gap-x-5">
          <Input
            name="fname"
            value={fname}
            type={"text"}
            title={"First Name *"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="lname"
            value={lname}
            type={"text"}
            title={"Last Name *"}
            className="p-2"
            onChange={onChangeHandler}
          />
        </div>
        <Input
          name="street"
          value={street}
          type={"text"}
          title={"Street + no. *"}
          className="p-2"
          onChange={onChangeHandler}
        />
        <div className="grid grid-cols-3 gap-x-5">
          <Input
            name="postcode"
            value={postcode}
            type={"tel"}
            title={"Postcode *"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="city"
            value={city}
            type={"text"}
            title={"City *"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="address"
            value={address}
            type={"text"}
            title={"Address Title *"}
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
          onClick={savedata}
        />
      </div>
    </Container>
  );
};

const Container = tw.div`
m-[13px]
`;

const Heading = tw.h1`
text-xl
font-bold
`;

export default EditAddress;