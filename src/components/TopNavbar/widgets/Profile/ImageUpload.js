import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { AiFillCamera } from "react-icons/ai";
import userLogo from "@assets/images/user.png";

const ImageUpload = () => {
  const [profileImg, setProfileImg] = useState(userLogo);
  const uploadImage = (event) => {
    const reader = new FileReader()
    reader.onload = () => {
       if(reader.readyState === 2){
        setProfileImg(reader.result)
       }
    }
    reader.readAsDataURL(event.target.files[0]);
  };
  return (
    <UserImage>
      <ImageHolder>
        <img src={profileImg} alt="img" className="w-full h-full object-cover"/>
      </ImageHolder>
      <CustomButton htmlFor="file-input">
        <AiFillCamera size={13} className={"mx-auto mt-1"} />
      </CustomButton>
      <CustomInput type="file" id="file-input" alt="" accept="image/*" onChange={uploadImage} />
    </UserImage>
  );
};
const UserImage = tw.div`
cursor-pointer
bg-white
rounded-lg
border
py-[3px]
relative
`;

const ImageHolder = tw.div`
w-[52px]
h-[52px]
`;

const CustomInput = tw.input`
hidden
`;

const CustomButton = tw.label`
border
border-color232
rounded-full
bg-white
w-6
h-6
absolute
-right-2
-bottom-2
`;
export default ImageUpload;
