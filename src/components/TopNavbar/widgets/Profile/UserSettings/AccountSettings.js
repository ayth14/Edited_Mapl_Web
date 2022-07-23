import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button } from "@components";
import theme from "@theme";

const AccountSettings = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    mobile_num: "",
    email: "",
    date_of_birth: "",
    lang: "",
    vat_num: "",
  });

  const { fname, lname, mobile_num, email, date_of_birth, lang, vat_num } =
    state;

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Heading>{"Account Settings"}</Heading>
      <div className="w-full lg:w-[38vw] mt-10">
        <div className="grid grid-cols-2 gap-x-5">
          <Input
            name="fname"
            value={fname}
            type={"text"}
            title={"First Name"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="lname"
            value={lname}
            type={"text"}
            title={"Last Name"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="email"
            value={email}
            type={"email"}
            title={"E-mail"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="mobile_num"
            value={mobile_num}
            type={"tel"}
            title={"Mobile Number"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="date_of_birth"
            value={date_of_birth}
            type={"date"}
            title={"Date of Birth"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="lang"
            value={lang}
            type={"text"}
            title={"Language"}
            className="p-2"
            onChange={onChangeHandler}
          />
        </div>
        <Input
          name="vat_num"
          value={vat_num}
          type={"text"}
          title={"UID / VAT Number"}
          className="p-2"
          onChange={onChangeHandler}
        />
        <Button
          title={"To update"}
          className="bg-color51 sm:w-[20vw] md:w-[8vw] rounded-sm p-3"
          style={{ color: theme.colors.white }}
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

export default AccountSettings;