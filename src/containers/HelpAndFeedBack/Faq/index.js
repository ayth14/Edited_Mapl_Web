import React, { useState } from "react";
import tw from "tailwind-styled-components";
import FaqList from "./FaqList";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import theme from '@theme';

const Faq = () => {
  const [state, setState] = useState({
    showDetail: "",
    toggleData: false,
  });
  const { showDetail, toggleData } = state;

  const handleClickShowDetail = (index) => {
    setState((prev) => ({ ...prev, showDetail: index, toggleData: !toggleData }));
  };
  
  return (
    <Container>
      <Heading>{"Frequently Asked Questions"}</Heading>
      {FaqList.map((item, index) =>  (
        <ListContainer key={index}>
          <div className="flex justify-between">
            {<HeadingTitle className={showDetail === index  && !toggleData ? 'text-logoColor' : 'text-black'}>{item.heading}</HeadingTitle>}
            <button onClick={() => handleClickShowDetail(index)}>
              {showDetail === index && !toggleData  ? (
                <ChevronUpIcon className="w-5 h-5 self-center mx-2" color={!showDetail === index  && !toggleData ? theme.colors.logoColor : theme.colors.black} />
              ) : (
                <ChevronDownIcon className="w-5 h-5 self-center mx-2" color={showDetail === index && !toggleData ? theme.colors.black : theme.colors.logoColor} />
              )}
            </button>
          </div>
          {showDetail === index && !toggleData  ? <Content>{item.content}</Content> : null}
        </ListContainer>
      ))}
    </Container>
  );
};

const Container = tw.div`
m-[13px]
`;

const Heading = tw.h1`
text-2xl
font-bold
self-center
mb-5
`;

const ListContainer = tw.div`
pt-8
py-5
border-b
border-black
last:border-0
`;

const HeadingTitle = tw.h1`
font-medium
text-2xl
`;

const Content = tw.h3`
font-normal
py-5
`;

export default Faq;