import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import maplLogo from "@assets/images/maplLogo.png";
import location from "@assets/images/location.png";
import { UserData, SearchPopup, InstructionPopup } from "./widgets";
import { Basic } from "../Text";

const SecondaryNavbar = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const navigate = useNavigate();
  
  const handleIcon = () => {
    setOpenIcon(!openIcon);
  };
  const handlePage = () => {
    navigate("/home");
  };
  
  const handleOpen = (e) => {
    e.target.value.length !== 0 ? setOpenFilter(false) : setOpenFilter(true);
    setOpenSearch(true);
  };
  
  const handleChange = (e) => {
    e.target.value.length !== 0 ? setOpenFilter(false) : setOpenFilter(true);
  };
  
  const handleClose = () => {
    setOpenSearch(false);
  };
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LogoContent>
            <LogoImg src={maplLogo} alt="" onClick={handlePage} />
            <LocationBtn onClick={toggleModal}>
              <img
                src={location}
                alt=""
                className="xl:w-4 xl:h-4 w-[22px] h-[22px]"
              />
              <Basic className="lg:text-[12px] xl:flex lg:flex hidden font-semibold">
                {"Choose Location"}
              </Basic>
            </LocationBtn>
          </LogoContent>
          <SearchContent onBlur={handleClose}>
            <SearchInput $icon={openIcon}>
              <Icon>
                <HiOutlineSearch
                  onClick={handleIcon}
                  className={"xl:text-lg lg:text-base"}
                />
              </Icon>
              <InputBox>
                <CustomInput
                  placeholder={"Product Search"}
                  onChange={handleChange}
                  onFocus={handleOpen}
                  id={"searchBox"}
                />
              </InputBox>
            </SearchInput>
            <SearchModal $openSearch={openSearch}>
              <SearchPopup openFilter={openFilter} openSearch={openSearch} />
            </SearchModal>

            <UserContent>
              <UserData />
            </UserContent>
          </SearchContent>
        </HeaderContent>
      </HeaderContainer>
      <InstructionPopup
        isOpenModal={isOpenModal}
        closeModal={() => isOpenModal && setIsOpenModal(false)}
      />
    </>
  );
};

const HeaderContainer = tw.div`
w-full 
self-center
flex 
items-center 
text-color456
px-4
py-1
bg-white
min-h-[80px]
border-b
border-color235
lg:relative
md:relative
sm:relative
`;

const HeaderContent = tw.div`
flex 
items-center
self-center
w-full 
h-full 
`;

const LogoContent = tw.div`
4xl:w-1/5
2xl:w-3/12
xl:w-5/12
lg:w-6/12
md:w-7/12
sm:w-2/5
w-1/2
cursor-pointer
flex
items-center
`;

const SearchContent = tw.div`
4xl:w-4/5
2xl:w-9/12
xl:w-9/12
lg:w-6/12
md:w-6/12
sm:w-3/5 
w-1/2
md:justify-end
sm:justify-end
justify-end
flex 
items-center 
`;

const LogoImg = tw.img`
2xl:w-[44%]
xl:max-w-[42%] 
lg:max-w-[28%]
md:max-w-[40%]
sm:max-w-[65%]
max-w-[60%]
4xl:mr-4
xl:mr-4
lg:mr-8
sm:mr-8
mr-4
`;

const LocationBtn = tw.button`
bg-color456
text-white
flex
items-center
lg:py-1 lg:px-[12px]
py-1 px-1
text-[10px] 
xl:h-9
lg:text-[12px] 
md:text-[11px]
rounded
`;

const SearchModal = tw.div`
${(p) =>
  p.$openSearch
    ? `absolute 
    w-full 
    h-screen 
    top-[100%] 
    right-0 
    bottom-0 
    left-0 
    z-10 
    bg-[color:var(--searchBg)]`
    : ` `}
`;

const SearchInput = tw.div`
${(p) =>
  p.$icon ? "lg:w-[60vw] w-full rounded-none" : "lg:w-10 w-10 rounded-full"}
2xl:w-[65vw]
xl:w-[60vw]
xl:h-9
2xl:rounded-none
xl:rounded-none
lg:h-10 
h-10
border
border-color64
relative
duration-150
overflow-hidden
flex 
items-center
`;

const Icon = tw.div`
lg:absolute
xl:top-[20%]
xl:left-[6px]
lg:top-[30%]
lg:left-[11px] 
top-[30%]
left-[10px] 
cursor-pointer
absolute
`;

const InputBox = tw.div`
relative
w-80
h-8
left-8
flex
items-center
justify-center
`;

const CustomInput = tw.input`
absolute
top-0
w-full
h-full
outline-none
pl-2
`;

const UserContent = tw.div`
xl:w-full
md:w-auto
h-full 
relative
xl:block
lg:hidden
hidden
`;

export default SecondaryNavbar;
