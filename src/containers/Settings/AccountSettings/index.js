import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button, PrimaryText } from "@components";
import theme from "@theme";

const languages = [
  {lang: 'Select a language', value: ''},
  {lang: 'Deutsche', value: 'Deutsche'},
  {lang: 'English', value: 'English'},
  {lang: 'French', value: 'French'},
]

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
          <div>
            <PrimaryText className={"text-[12px] font-sans font-semibold"}>
              {"Language"}
            </PrimaryText>
            <SelectOption
              name="lang"
              value={lang}
              className="p-1"
              onChange={onChangeHandler}
            >
              {languages.map((item) => (
                <option value={item.value} disabled={item.value ? false : true}>{item.lang}</option>
              ))}
            </SelectOption>
          </div>
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
text-2xl
font-bold
`;

const SelectOption = tw.select`
w-full
my-3
h-[2.48pc]
items-center
self-center
p-2
text-[12px]
border
focus:outline-none
drop-shadow-md
`;

export default AccountSettings;