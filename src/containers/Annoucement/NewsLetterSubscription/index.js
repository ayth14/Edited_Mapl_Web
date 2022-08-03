import React from "react";
import tw from "tailwind-styled-components";
import { CheckBox } from "@components";

const NewsLetterSubscription = () => {

  return (
    <Container>
      <Heading>{"Newsletter Subscription"}</Heading>
      <div className="w-full lg:w-[38vw] mt-10">
        <CheckBox title={'General Subscription'} className='w-5 h-5' titleClassName='font-normal' containerStyle='my-5'/>
        <CheckBox title={'Cart emails'} className='w-5 h-5' titleClassName='font-normal'/>
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

export default NewsLetterSubscription;