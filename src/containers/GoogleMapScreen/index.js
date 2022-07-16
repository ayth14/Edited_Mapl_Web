import React,{useState} from "react";
import tw from "tailwind-styled-components";
import { GoogleMap, Button } from "@components";
import { BsArrowLeft } from "react-icons/bs";
import ConfirmAddressModal from "./widgets/confirmAddressModal";
import InsertAddressModal from "./widgets/insertAddressModal";
import LocationUnavailableModal from "./widgets/locationUnavailableModal";
import { useNavigate } from "react-router-dom";

const GoogleMapScreen = () => {

  const [state,setState] = useState({
    isModal: false
  })
  const {isModal} = state;

  const navigate = useNavigate();

  const triggerModal = () =>{
    setState(prev => ({...prev, isModal: !prev.isModal}))
  }
  
  return (
    <div>
      <div className="flex justify-center relative top-[5vh]">
        <div className="absolute z-10 flex">
          <ButtonContainer>
            <BsArrowLeft className="w-full self-center" onClick={triggerModal} />
          </ButtonContainer>
          <InputContainer>
            <Input placeholder={"Search"} />
          </InputContainer>
        </div>
      </div>
      <GoogleMap />
      <ConfirmAddressModal isOpenModal={isModal} closeModal={() => isModal && setState(prev => ({ ...prev, isModal: false }))} />
    </div>
  );
};

const InputContainer = tw.div`
flex
w-[30vw]
`;

const Input = tw.input`
w-full
h-[5%]
p-5
top-[5%]
hidden
lg:flex
bg-white
rounded-sm
shadow-xl
hover:shadow-lg
hover:shadow-neutral-400
opacity-90
focus:outline-none
`;

const ButtonContainer = tw.div`
lg:flex 
h-10 
w-10 
mr-5 
bg-white 
cursor-pointer 
opacity-90 
hidden 
rounded-sm 
shadow-xl 
hover:shadow-lg 
hover:shadow-neutral-400 
`;

export default GoogleMapScreen;
