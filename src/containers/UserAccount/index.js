import React from "react";
import uroutes from "./uroutes";
import { Route, Routes } from "react-router";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar, Footer } from "@components";
import { Profile } from "@components/TopNavbar/widgets";

const UserAccount = () => {
  return (
    <>
      <TopNavbar />
      <Container>
        <SideMenuContent>
          <SideBar />
        </SideMenuContent>
        <UserContent>
          <Routes>
            {uroutes.map((route, idx) => (
              <Route
                path={route.path}
                element={route.element}
                exact
                key={idx}
              />
            ))}
          </Routes>
          <Profile
            openProfile={true}
            userName={"Swissan Kandaswamy"}
            profileclassname={"absolute top-0"}
          />
        </UserContent>
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

const UserContent = tw.div`
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

export default UserAccount;
