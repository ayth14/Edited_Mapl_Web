import tw from "tailwind-styled-components";
import React from "react";
import { PrimaryText } from "@components";
import { EyeIcon } from "@heroicons/react/outline";
const Input = (props) => {
  const {
    containerStyle,
    title,
    titleStyle,
    headericon,
    verifyButtonTitle,
    verifyButtonClassName,
    verifyButtonClick,
    inputicon,
    inputStyle,
    required,
    bottomlabel,
    bottomlabelclassname,
    bottomLabelButton,
    bottomlableresendbtnclassname,
    bottomLabelContainer
  } = props;
  return (
    <div className={`${containerStyle}`}>
      <div className="flex justify-between">
        <div className="flex">
          <PrimaryText
            style={{ ...titleStyle }}
            className={"text-[12px] font-sans font-semibold"}
          >
            {title}
          </PrimaryText>
          <VerifyIcon src={headericon} className="px-[6px]" />
        </div>
        <VerifyButton className={`${verifyButtonClassName}`} onClick={verifyButtonClick}>
          {verifyButtonTitle}
        </VerifyButton>
      </div>
      <div className="flex flex-row relative">
        {inputicon ? (
          <InputIcon
            src={inputicon}
            className="mt-4 md:mt-4 absolute z-10 ml-3"
          />
        ) : null}
        <CustomInput
          style={{ ...inputStyle, marginTop: "1vh" }}
          required={required ? true : false}
          className={inputicon ? "pl-11" : null}
          {...props}
        />
        {/* <EyeIcon  className="absolute w-3 h-3 right-2"/> */}
      </div>
      {bottomlabel ? (
        <div className={`${bottomLabelContainer} mt-[-20px] my-[10px] flex`}>
          <PrimaryText
            className={`${bottomlabelclassname} font-sans text-color102`}
          >
            {bottomlabel}
          </PrimaryText>
          {bottomLabelButton ? (
            <ResendButton
              className={`${bottomlableresendbtnclassname} flex cursor-pointer focus:outline-none px-1 underline font-sans self-center `}
              onClick={() => alert("This is aletr")}
            >
              {bottomLabelButton}
            </ResendButton>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
const CustomInput = tw.input`
w-full
p-3
pl-4
my-6
text-[12px]
border
focus:outline-none
drop-shadow-md
`;
const VerifyButton = tw.button`
text-[11px]
font-sans
font-semibold
`;
const InputIcon = tw.img`
w-[30px]
h-[30px]
`;
const VerifyIcon = tw.img`
h-[10px]
self-center
`;
const ResendButton = tw.button`
`;
export default Input;