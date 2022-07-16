import React from "react";
import tw from "tailwind-styled-components";

const Container = (props) => {
  const { children, ...style } = props;
  return <CustomBox {...style}>{children}</CustomBox>;
}

const CustomBox = tw.div`
    flex
    ${(p) => (p.$col ? "flex-col" : "flex-row")}
    w-full
    h-full
    mb-14
`;

export default Container;