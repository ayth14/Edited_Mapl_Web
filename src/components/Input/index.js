import tw from "tailwind-styled-components";
import React from "react";
import { PrimaryText } from "@components";

const Input = (props) => {
  const {
    containerStyle,
    title,
    requiredtitle,
    titleStyle,
    headericon,
    verifyButtonTitle,
    verifyButtonClassName,
    verifyButtonClick,
    inputicon,
    inputStyle,
    hideAndShowPasswordOnClick,
    hideAndShowEyeIcon,
    required,
    bottomlabel,
    bottomlabelclassname,
    bottomLabelButton,
    bottomlableresendbtnclassname,
    bottomLabelContainer
  } = props;
  return (
    <div className={`${containerStyle} py-1`}>
      <div className="flex justify-between">
        <div className="flex">
        {title && <PrimaryText
        style={{ ...titleStyle }}
        className={"text-[12px] font-sans font-semibold"}
        >
          {title}
          {requiredtitle && <span className={`${requiredtitle} mx-1 text-sm`}>{'*'}</span>}
          </PrimaryText>}
          {headericon && <VerifyIcon src={headericon} className="px-[6px]" />}
        </div>
        {verifyButtonTitle && <VerifyButton className={`${verifyButtonClassName}`} onClick={verifyButtonClick}> {verifyButtonTitle}</VerifyButton>}
      </div>
      <div className="flex flex-row relative">
        {inputicon ? (
          <InputIcon
            src={inputicon}
            className="top-[1.2pc] absolute z-10 ml-3"
          />
        ) : null}
        <CustomInput
          style={{ ...inputStyle }}
          required={required ? true : false}
          className={`${inputicon ? "pl-11" : null} relative flex items-center`}
          {...props}
        />
        <button onClick={hideAndShowPasswordOnClick} className='absolute right-0 items-center top-[1.8pc] mr-1 focus: outline-none'>
          {hideAndShowEyeIcon && <div className="w-5 h-5">{hideAndShowEyeIcon}</div>}
        </button>
        </div>
      {bottomlabel ? (
        <div className={`${bottomLabelContainer} mt-[-4px] flex`}>
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
my-3
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