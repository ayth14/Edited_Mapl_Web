import React, { useState } from "react";
import { Input, Button } from "@components";
import { Basic } from "@components/Text";
import tw from "tailwind-styled-components";
const ChangePassword = () => {
  const [state, setstate] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { currentPassword, newPassword, confirmPassword } = state;

  const onChangeHandler = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <PasswordContainer>
      <PasswordTitle>
        <Basic
          style={{ fontWeight: 700 }}
          className={"2xl:text-3xl xl:text-xl"}
        >
          {"Change Password"}
        </Basic>
      </PasswordTitle>
      <Input
        name={"currentPassword"}
        title={"Current Password"}
        type={"password"}
        value={currentPassword}
        onChange={onChangeHandler}
      />
      <Input
        name={"newPassword"}
        title={"New Password"}
        type={"password"}
        value={newPassword}
        onChange={onChangeHandler}
      />
      <Input
        name={"confirmPassword"}
        title={"Confirm Password"}
        type={"password"}
        value={confirmPassword}
        onChange={onChangeHandler}
      />
      <Button className={"bg-black text-white w-24"} title={"To update"} />
    </PasswordContainer>
  );
};

const PasswordContainer = tw.div`
text-xl
xl:w-1/3
w-1/2
px-9
`;

const PasswordTitle = tw.div`
my-5
`;

export default ChangePassword;
