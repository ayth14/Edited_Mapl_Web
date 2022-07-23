import React, { useState } from "react";
import { Input, Button } from "@components";
import tw from "tailwind-styled-components";
import theme from "@theme";

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
    <Container>
      <Heading>{"Change Password"}</Heading>
      <div className="w-full lg:w-[19vw] mt-10">
          <Input
            name="currentPassword"
            value={currentPassword}
            type={"text"}
            title={"Current Password"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="newPassword"
            value={newPassword}
            type={"text"}
            title={"New Password"}
            className="p-2"
            onChange={onChangeHandler}
          />
          <Input
            name="confirmPassword"
            value={confirmPassword}
            type={"text"}
            title={"Confirm New Password"}
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

export default ChangePassword;
