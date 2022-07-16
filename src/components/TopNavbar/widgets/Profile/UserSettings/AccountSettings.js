import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button } from "@components";
import { Basic } from "@components/Text";
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
    <AccountContainer>
      <AccountTitle>
        <Basic
          style={{ fontWeight: 700 }}
          className={"2xl:text-3xl xl:text-xl"}
        >
          {"Account Settings"}
        </Basic>
      </AccountTitle>
      <div className="grid lg:gap-4 lg:grid-cols-2">
        <Input
          name={"fname"}
          title={"First Name"}
          value={fname}
          onChange={onChangeHandler}
        />
        <Input
          name={"lname"}
          title={"Last Name"}
          value={lname}
          onChange={onChangeHandler}
        />
      </div>
      <div className="grid lg:gap-4 lg:grid-cols-2">
        <Input
          name={"email"}
          title={"E-mail"}
          value={email}
          onChange={onChangeHandler}
        />
        <Input
          name={"mobile_num"}
          title={"Moblie Number"}
          value={mobile_num}
          onChange={onChangeHandler}
        />
      </div>
      <div className="grid lg:gap-4 lg:grid-cols-2">
        <Input
          name={"date_of_birth"}
          title={"Date Of Birth"}
          value={date_of_birth}
          onChange={onChangeHandler}
        />
        <Input
          name={"lang"}
          title={"Language"}
          value={lang}
          onChange={onChangeHandler}
        />
      </div>
      <Input
        name={"vat_num"}
        title={"UID/VAT Number"}
        value={vat_num}
        onChange={onChangeHandler}
      />
      <Button className={"bg-black text-white w-24"} title={"To update"} />
    </AccountContainer>
  );
};

const AccountContainer = tw.div`
text-xl
w-1/2
px-9
`;

const AccountTitle = tw.div`
my-5
`;

export default AccountSettings;
