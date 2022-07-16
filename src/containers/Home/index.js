import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar, Footer } from "@components";
import {
  Banner,
  InstructionPopup,
  LocationPopup,
  NewRelease,
  Recommendation,
  Sales,
  Trending,
} from "./widgets";
import { UserData } from "@components/TopNavbar/widgets";

const Home = () => {
  const [state, setState] = useState({
    isModal: false
  })
  const {isModal} = state;

  const toggleModal = () =>{
    setState(prev=>({...prev, isModal: !prev.isModal}))
  }

  return (
    <>
      <TopNavbar />
      <Container>
        <SideMenuContent>
          <SideBar />
        </SideMenuContent>
        <UserData userclassname={"xl:hidden"}/>
        <HomeScreenContent>
          <Banner />
          <Recommendation />
          <NewRelease />
          <Trending />
          <Sales />
        </HomeScreenContent>
      </Container> 
      <Footer />
    </>
  );
};

const Container = tw.div`
flex
xl:gap-1
relative
`;

const SideMenuContent = tw.div`
xl:w-[15.5%] 
lg:sticky
lg:top-0
sticky
top-0
md:top-0
h-screen
flex flex-col
z-30
`;

const HomeScreenContent = tw.div`
xl:w-[85.5%]
lg:w-full
w-full
h-full 
flex
flex-col
static
px-4
xl:py-3
lg:py-7
py-5
`;

export default Home;
