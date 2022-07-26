import React,{useState} from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { PrimaryText } from "@components";
import {
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import DeleteModal from "./DeleteModal";

const AddressData = [
  {
    id: 1,
    locationType: "Home Address",
    locationLandmark: "Gowrithasan Kandasamy",
    location: "Kasernestrasse 66 8180 Buelach CH",
    billingAddress: "Standard Billing Address",
    diliveryAddress: "Standard Dilivery Address",
    editAddress: { PencilIcon },
    deleteAddress: { TrashIcon },
  },
];

const Address = () => {

  const [isDeleteModal, setIsDeleteModal] = useState(false)
  
  const navigate = useNavigate();

  const gotoAddNewAddress = () => {
    navigate('/profile/add-new-address')
  }

  const gotoEditAddress = () => {
    navigate('/profile/edit-address')
  }

  const isOpenDeleteModal = () => {
    setIsDeleteModal(prev => ({...prev, isDeleteModal: true}))
  }

  return (
    <Container>
      <div className="flex justify-between">
        <Heading>{"Address"}</Heading>
        <AddNewAddressButton onClick={gotoAddNewAddress}>
          {"Add new address"}
        </AddNewAddressButton>
      </div>
      <div>
        {AddressData.map((item, index) => (
          <div className="flex flex-col border border-color229 rounded-sm mt-6 p-5">
            <PrimaryText className="text-lg font-bold">
              {item.locationType}
            </PrimaryText>
            <PrimaryText className="text-lg py-1">
              {item.locationLandmark}
            </PrimaryText>
            <PrimaryText className="text-sm sm:w-full md:w-[5vw] leading-6 mb-2">
              {item.location}
            </PrimaryText>
            <div className="flex my-1">
              <CheckCircleIcon className="w-5 text-green" />
              <PrimaryText className="text-green font-semibold mx-1">
                {item.billingAddress}
              </PrimaryText>
            </div>
            <div className="flex">
              <CheckCircleIcon className="w-5 text-green" />
              <PrimaryText className="text-green font-semibold mx-1">
                {item.diliveryAddress}
              </PrimaryText>
            </div>
            <div className="flex justify-between mt-10">
              <EditButton onClick={gotoEditAddress}>
                <PencilIcon className="w-5" />
                <PrimaryText className="px-2">{"To Edit"}</PrimaryText>
              </EditButton>
              <DeleteButton onClick={isOpenDeleteModal}>
                <TrashIcon />
              </DeleteButton>
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        isOpenModal={isDeleteModal}
        closeModal={() =>
          isDeleteModal &&
          setIsDeleteModal((prev) => ({ ...prev, isDeleteModal: false }))
        }
      />
    </Container>
  );
};

const Container = tw.div`
m-[13px]
lg:w-[18vw]
`;

const Heading = tw.h1`
text-xl
font-bold
`;

const AddNewAddressButton = tw.button`
self-center 
underline 
text-blue 
font-semibold
`;

const EditButton = tw.button`
flex 
border 
p-2
`;

const DeleteButton = tw.button`
w-5
`;

export default Address;