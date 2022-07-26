import React from "react";
import tw from "tailwind-styled-components";
import { Basic } from "@components/Text";
import profileSetting from "./profileSettings";
import ImageUpload from "./ImageUpload";
import logOut from "@assets/images/logoutIcon.png";
import { useNavigate } from "react-router-dom";
const Profile = (props) => {
  const navigate = useNavigate();
  
  const { openProfile, userName, profileclassname } = props;
  
  const balance = "0.00"
  const handleLogOut = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile/account-settings");
  };

  const handleVoucher = () => {
    navigate("/profile/vouchers")
  }

  return (
    <ProfileContainer $open={openProfile} className={profileclassname} >
      <div className="flex-1 relative top-0 h-full overflow-y-auto scrollbar-none">
        <UserValue onClick={handleProfile}>
          <ImageUpload />
          <Basic className={"pl-5 capitalize"} style={{ fontWeight: 700 }}>
            {userName}
          </Basic>
        </UserValue>
        <Vouchers onClick={handleVoucher}>
          <Basic style={{ fontWeight: 600 }}>{"Voucher Balance"}</Basic>
          <Basic style={{ fontWeight: 600 }}>
            {"Credit "}
            {balance}
            {" CHF"}
          </Basic>
        </Vouchers>
        {profileSetting.map((value) => {
          return (
            <div className="bg-white pt-3">
              <Basic style={{ fontWeight: 700, padding: "0 20px" }}>
                {value.title}
              </Basic>
              <OptionContent>
                {value.options.map((option) => {
                  return (
                    <OptionList
                      onClick={() => {
                        navigate(`${option.to}`);
                      }}
                    >
                      <img src={option.icon} alt="" className="w-5 h-5" />
                      <Basic className={"pl-3"}>{option.text}</Basic>
                    </OptionList>
                  );
                })}
              </OptionContent>
            </div>
          );
        })}
        <LogOutButton onClick={handleLogOut}>
          <img src={logOut} alt="" className="w-6 h-6" />
          <Basic className={"pl-3"}>{"Logout"}</Basic>
        </LogOutButton>
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = tw.div`
${(p) => (!p.$open ? "hidden" : "flex")}
flex-col
bg-white
shadow-cartBtn
w-[280px]
xl:fixed
xl:top-28
xl:h-auto
top-36
h-[40vh]
absolute
right-0
bottom-4
z-20
peer-transition
ease-out
delay-150
duration-200
`;

const UserValue = tw.div`
flex
items-center
border-b-[0.6px]
border-color206
bg-white
p-5
cursor-pointer
`;

const Vouchers = tw.div`
flex
items-center
justify-between
border-b-[5px]
border-color239
bg-white
py-4 px-5
cursor-pointer
`;

const OptionContent = tw.div`
border-y-[5px]
border-color239
mt-3
`;

const OptionList = tw.button`
border-b-[0.6px]
border-color206
flex
items-center
px-5 py-3
last:border-b-0
w-full
`;

const LogOutButton = tw.button`
flex
flex-row
items-center
p-5
`;

export default Profile;
