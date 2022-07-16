import React from "react";
import tw from "tailwind-styled-components";
import MainMenuBar from "./MainMenuBar";
import SmallMenuBar from "./SmallMenuBar";

export default function TopNavbar() {
  return (
    <>
      <SmallNav>
        <SmallMenuBar />
      </SmallNav>

      <MainNav className="mainNav">
        <MainMenuBar />
      </MainNav>
    </>
  );
}

const SmallNav = tw.div`
sticky
top-0
right-0
left-0
z-20
`;

const MainNav = tw.div`
sticky
top-9
right-0
left-0
z-20
bg-white
w-full
pt-2
min-h-[60px]
`;
