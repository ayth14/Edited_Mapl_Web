import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { GoogleMap } from "@components";
import { BsArrowLeft } from "react-icons/bs";
import InsertAddressModal from "./widgets/insertAddressModal";
import { useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import Config from "../../config";

const GoogleMapScreen = () => {
  const [state, setState] = useState({
    isInsertAddressModal: false,
    isLocationUnavailabelModal: false
  });
  const { isInsertAddressModal } = state;

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({ ...prev, isInsertAddressModal: true }));
    }, [2000]);
  }, []);

  const gobackToHomePage = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="flex justify-center relative top-[9vh]">
        <div className="absolute z-10 flex">
          <ButtonContainer>
            <BsArrowLeft
              className="w-full self-center"
              onClick={gobackToHomePage}
            />
          </ButtonContainer>
          <Autocomplete
            className="sm:w-[50vw] lg:w-[40vw] px-4 flex rounded-sm focus:outline-none shadow-xl hover:shadow-lg hover:shadow-neutral-400 opacity-90"
            apiKey={Config.GOOGLE_MAP_API_KEY}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
        </div>
      </div>
      <GoogleMap />
      <InsertAddressModal
        isOpenModal={isInsertAddressModal}
        closeModal={() =>
          isInsertAddressModal && setState((prev) => ({ ...prev, isInsertAddressModal: false }))
        }
      />
    </div>
  );
};

const ButtonContainer = tw.div`
flex
h-10
w-10
mr-5
bg-white
cursor-pointer
opacity-90
rounded-sm
shadow-xl
hover:shadow-lg
hover:shadow-neutral-400
`;

export default GoogleMapScreen;