import React, { useState } from "react";
import user_routes from "./user_routes";
import { Route, Routes } from "react-router";
import tw from "tailwind-styled-components";
import { SideBar, TopNavbar, Footer } from "@components";
import { Profile } from "@components/TopNavbar/widgets";
import UserData from "@components/TopNavbar/widgets/UserData";

const UserAccount = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
      <TopNavbar />
      <Container>
        <SideMenuContent>
          <SideBar />
        </SideMenuContent>
        <UserData userclassname={"xl:hidden"} />
        <UserContent>
          <Routes>
            {user_routes.map((route, idx) => (
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
            profileclassname={"xl:absolute xl:top-0 xl:flex hidden"}
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
relative
px-4
xl:py-3
lg:py-7
py-5
`;

export default UserAccount;
