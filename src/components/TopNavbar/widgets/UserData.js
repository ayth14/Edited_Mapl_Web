import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import SwitchOption from "./SwitchOption";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const UserData = (props) => {
  const { userclassname } = props;

  const [openMenu, setOpenMenu] = useState(false);

  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleUser = () => {
    setOpenProfile(!openProfile);
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const Links = [
    {
      name: "Gowrithansan",
      link: handleUser,
      icon: <AiOutlineUser size={25} />,
    },
    {
      name: "Wishlist",
      link: handleWishlist,
      icon: <IoMdHeartEmpty size={25} />,
      badge: 1,
      right: "xl:right-[2px] lg:right-[48px] top-[-3px] right-[58px]",
    },
    {
      name: "Cart",
      link: handleCart,
      icon: <FiShoppingCart size={25} />,
      badge: 2,
      right: "xl:right-[-6px] lg:right-[28px] right-[34px]",
    },
  ];

  const UserDetails = (icon, name, link, index, badge, right) => {
    return (
      <UserLi key={index}>
        <CustomButton onClick={link}>
          {icon}
          {badge && index != 0 ? (
            <BadgeVal className={`${right}`}>{badge}</BadgeVal>
          ) : null}
          <Text>{name}</Text>
        </CustomButton>
      </UserLi>
    );
  };
  
  return (
    <Container className={userclassname}>
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
        <SwitchOption switchClass={"xl:block 2xl:mx-4 xl:mx-1"} />
        <MenuList>
          {Links.map((items, index) => {
            return UserDetails(
              items.icon,
              items.name,
              items.link,
              index,
              items.badge,
              items.right
            );
          })}
        </MenuList>
      </MenuContent>
      <Profile
        openProfile={openProfile}
        userName={"swissan kandaswamy"}
        balance={"0.00"}
      />
    </Container>
  );
};

const Container = tw.div`
xl:relative
lg:absolute
absolute
right-0
z-10
bg-white
`;

const MenuContent = tw.div`
${(p) => (p.$openMenu ? "hidden" : "flex")}
justify-between
lg:flex-col
flex-col
xl:flex-row
items-center
xl:relative
xl:w-auto
lg:absolute
right-0
lg:w-80
w-72
xl:bg-transparent
xl:shadow-none
bg-white
shadow-xl
px-3
z-10
`;

const MenuList = tw.ul`
flex 
lg:flex-col
flex-col
xl:flex-row
lg:bg-white
xl:bg-transparent xl:shadow-none
mt-4 
md:mt-0
justify-center
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
xl:hidden 
`;

const UserLi = tw.li`
2xl:px-4 
xl:px-2 
lg:px-0 
lg:first:pl-0 
2xl:first:pl-9 
xl:first:pl-7 
last:pr-0
`;

const Text = tw.span`
xl:text-[12px] 
lg:text-[11px] 
md:text-[14px] 
text-[14px] 
flex 
xl:flex 
justify-center
xl:m-0 ml-4
`;

const CustomButton = tw.button`
xl:flex-col 
xl:my-0
lg:flex-row 
md:my-3 
my-3 
flex
items-center
relative
`;

const BadgeVal = tw.span`
text-[10px]
text-white
rounded-full
bg-black
absolute
top-[-3px]
w-4
h-4
`;

export default UserData;
