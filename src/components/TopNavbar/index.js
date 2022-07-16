import React from "react";
import tw from "tailwind-styled-components";
import PrimaryNavbar from "./PrimaryNavbar";
import SecondaryNavbar from "./SecondaryNavbar";

const TopNavbar = () => {
  return (
    <>
      <SmallNav>
        <PrimaryNavbar />
      </SmallNav>

      <MainNav>
        <SecondaryNavbar />
      </MainNav>
    </>
  );
}

const SmallNav = tw.div`
sticky
top-0
right-0
left-0
z-50
h-auto
`;

const MainNav = tw.div`
sticky
top-9
right-0
left-0
z-50
w-full
h-auto
`;

export default TopNavbar;