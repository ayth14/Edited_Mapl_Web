import React from "react";
import tw from "tailwind-styled-components";
import { CheckBox } from "@components";
const AddNote = () => {
  const addNote = [
    "Call me on arrival",
    "Contactless Delivery",
    "Please don't ring the bell",
  ];
  return (
    <Container>
      <TitleText>{"Add a Note"}</TitleText>
      <div className="px-8">
        <CustomInput type={"text"} placeholder={"Additional note here..."} />
      </div>
      <div className="flex flex-row items-center py-6 ">
        {addNote.map((option, idx) => (
          <CheckBox
            key={idx}
            title={option}
            titleClassName={"ml-1 font-normal"}
            className={"border border-black w-[15px] h-[15px]"}
            containerStyle={
              "items-center first:pl-8 first:pr-0 px-[10px] last:pr-8 last:pl-0"
            }
          />
        ))}
      </div>
    </Container>
  );
};

const Container = tw.div`
flex
flex-col
bg-white
shadow-cartBtn
`;

const TitleText = tw.span`
font-semibold 
text-lg 
py-2
px-8
border-b
border-color139
`;

const CustomInput = tw.input`
border-b
border-color203
py-3
w-full
placeholder:text-color203
focus:outline-none
focus:border-b
`;

export default AddNote;
