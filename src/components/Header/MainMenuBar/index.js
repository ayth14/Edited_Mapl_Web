import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Button from "@components/Button";
import SearchPopup from "./SearchPopup";
import { PrimaryText } from "@components/Text";
import { useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import maplLogo from "@assets/images/maplLogo.png";
import location from "@assets/images/location.png";
import userIcon from "@assets/images/userIcon.png";
import wishlistIcon from "@assets/images/wishlistIcon.png";
import cartIcon from "@assets/images/cartIcon.png";
import SwitchOption from "./SwitchOption/SwitchOption";

const SecondaryNavbar = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handlePage = () => {
    navigate("/");
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
  const Links = [
    {
      name: "Gowrithansan",
      link: "/",
      img: userIcon,
      size: "xl:max-w-[25%] lg:max-w-[60%] md:max-w-[18%] max-w-[16%]",
    },
    {
      name: "Wishlist",
      link: "/",
      img: wishlistIcon,
      size: "2xl:max-w-[24px] xl:max-w-[59%] lg:max-w-[55%] md:max-w-[25%] max-w-[20%]",
    },
    {
      name: "Cart",
      link: "/",
      img: cartIcon,
      size: "2xl:max-w-[23px] lg:max-w-[55%] xl:max-w-[100%] md:max-w-[25%] max-w-[20%]",
    },
  ];

  const UserDetails = (img, name, link, index, size) => {
    return (
      <li key={index}>
        <a
          href={`${link}`}
          className={"xl:flex-col lg:my-0 md:my-3 my-3 flex items-center"}
        >
          <img className={`${size}`} src={img} alt="" />
          <PrimaryText
            className={
              "xl:text-[12px] lg:text-[11px] md:text-[14px] text-[14px] flex lg:hidden xl:flex justify-center xl:m-0 ml-4"
            }
          >
            {name}
          </PrimaryText>
        </a>
      </li>
    );
  };
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContent>
            <LogoImg src={maplLogo} alt=""/>
            <LocationBtn>
              <img src={location} alt="" className="w-[22px] h-[22px]"/>
              <span className="hidden md:flex lg:hidden xl:flex font-bold">
                {"Choose Location"}
              </span>
            </LocationBtn>
        </LogoContent>
        <SearchContent onBlur={handleClose}>
          <SearchInput>
            <Img src={require("@assets/images/searchIcon.png")} />
            <CustomInput
              placeholder={"Product Search ..."}
              onChange={handleChange}
              onFocus={handleOpen}
              id={"searchBox"}
            />
          </SearchInput>
          <SearchModal $openSearch={openSearch}>
            <SearchPopup openFilter={openFilter} openSearch={openSearch} />
          </SearchModal>

          <UserContent>
            <SwitchOption switchClass={"hidden md:hidden lg:block"} />
            <MenuBtn
              data-collapse-toggle="mobile-menu"
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {openMenu ? <IoMenu size={25} /> : <IoClose size={25} />}
            </MenuBtn>
            <MenuContent id="mobile-menu" $openMenu={openMenu}>
              <SwitchOption switchClass={"block md:block lg:hidden"} />
              <MenuList>
                {Links.map((items, index) => {
                  return UserDetails(
                    items.img,
                    items.name,
                    items.link,
                    index,
                    items.size
                  );
                })}
              </MenuList>
            </MenuContent>
          </UserContent>
        </SearchContent>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = tw.div`
w-full 
self-center
flex 
items-center 
text-color456
px-4
py-3
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
lg:w-4/12
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
xl:w-11/12
lg:w-9/12
md:w-6/12
sm:w-3/5 
w-1/2
md:justify-between
sm:justify-between
justify-between
flex 
items-center 
`;

const LogoImg = tw.img`
2xl:w-[40%]
xl:max-w-[40%] 
lg:max-w-[50%]
md:max-w-[40%]
sm:max-w-[65%]
max-w-[60%]
xl:my-2
4xl:mr-6
xl:mr-6
lg:mr-8
sm:mr-8
mr-4
`;
const LocationBtn = tw.button`
bg-color456
text-white
flex
items-center
py-[4px] px-[12px]
text-[10px] 
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
group
xl:w-full 
lg:w-[40%]
md:w-[10%]
sm:w-[10%]
w-[14%]
xl:relative
`;
const Img = tw.img`
h-[14px] 
w-[14px] 
self-center
absolute
z-20
xl:mt-3 xl:ml-2
lg:mt-0 lg:ml-2
md:mt-3 md:ml-2
sm:mt-0
mt-0 ml-2
xl:top-0
lg:top-[40%]
md:top-[25%]
top-[40%]
`;

const CustomInput = tw.input`
xl:flex xl:w-full xl:static xl:group-hover:w-full
border 
border-color64 
lg:hidden lg:group-hover:flex lg:group-hover:w-[65vw] lg:absolute lg:left-[31%] 
md:hidden md:group-hover:flex md:group-hover:w-[45vw] md:absolute md:top-[22%] md:left-[53%]
sm:hidden sm:group-hover:flex sm:group-hover:w-[56vw] sm:absolute sm:top-[22%] sm:left-[40%]
hidden 
group-hover:flex 
group-hover:w-[60vw] 
absolute 
top-[50%] right-0
z-10 px-7 py-2
`;

const UserContent = tw.div`
xl:w-full
lg:w-[150%]
md:w-auto
h-full 
flex 
items-center 
pl-4
relative
`;

const MenuContent = tw.div`
${(p) => (p.$openMenu ? "hidden" : "flex")}
w-[400%] 
md:w-[400%] 
sm:w-[400%]
flex-col
xl:py-0
lg:py-0
lg:block 
lg:w-auto 
xl:bg-transparent
lg:shadow-none 
lg:static items-center 
md:top-[100%] right-0
sm:top-[100%] right-0
md:bg-white shadow-3xl
md:py-6
md:absolute
sm:absolute
sm:py-6
py-6
absolute
top-full right-0
bg-white
`;

const MenuList = tw.ul`
flex 
flex-col 
lg:flex-row 
lg:bg-white
xl:bg-transparent xl:shadow-none
mt-4 
md:mt-0 
`;

const MenuBtn = tw.button`
inline-flex 
items-center 
relative
p-2 
ml-3 
text-sm 
text-gray-500 
rounded-lg 
lg:hidden 
`;

export default SecondaryNavbar;
