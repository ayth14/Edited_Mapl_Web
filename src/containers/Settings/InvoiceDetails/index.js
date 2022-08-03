import React from "react";
import tw from "tailwind-styled-components";

const InvoiceDetails = () => {
  
  return (
    <Container>
      <Heading>{"InvoiceDetails"}</Heading>
    </Container>
  );
};

const Container = tw.div`
m-[13px]
`;

const Heading = tw.div`
text-2xl
font-bold
`;

export default InvoiceDetails;
