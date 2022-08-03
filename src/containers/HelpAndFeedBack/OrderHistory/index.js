import React from "react";
import tw from "tailwind-styled-components";
import { PrimaryText } from "@components";
import OrderHistoryList from "./orderHistoryList";
import { SearchIcon } from "@heroicons/react/outline";

const OrderHistory = () => {
  return (
    <Container>
      <div className="flex justify-between lg:w-[54vw]">
        <Heading>{"Order History"}</Heading>
        <div className="flex relative">
          <SearchIcon className="absolute z-10 w-5 h-5 m-[0.6pc]" />
          <SearchBar placeholder={"Search Orders"} />
        </div>
      </div>
      <div className="w-full lg:w-[54vw] overflow-scroll scrollbar-none">
        <OrderItemContainer>
          {OrderHistoryList.map((item, index) => (
            <Item>
              <div className="flex justify-between my-4">
                <div className="flex">
                  <PrimaryText className="font-semibold">{`Order ${item.orderId}`}</PrimaryText>
                  <ConfirmImage src={item.confirmImg} className="ml-2" />
                  <PrimaryText className="text-green">
                    {item.diliveryStatus}
                  </PrimaryText>
                </div>
                <PrimaryText className="text-color139 font-semibold">
                  {item.deliveryDate}
                </PrimaryText>
              </div>
              <div className="flex justify-between">
                <Invoice src={item.invoiceImage} />
                <div className="flex">
                  <div>
                    <PrimaryText className="font-semibold">
                      {item.paymentStatus}
                    </PrimaryText>
                    <PrimaryText className="text-green m-2 font-semibold mr-16">
                      {item.paidStatus}
                    </PrimaryText>
                  </div>
                  <div>
                    <PrimaryText className="font-semibold">
                      {item.totalAmount}
                    </PrimaryText>
                    <PrimaryText className="text-color139 m-2 font-semibold">
                      {item.chf}
                    </PrimaryText>
                  </div>
                </div>
                <PrimaryText className="font-semibold">
                  {item.orderDetails}
                </PrimaryText>
              </div>
              <hr className="mt-4" />
            </Item>
          ))}
        </OrderItemContainer>
      </div>
    </Container>
  );
};

const Container = tw.div`
m-[13px]
`;

const Heading = tw.h1`
text-2xl
font-bold
self-center
`;

const SearchBar = tw.input`
sm:w-[40vw] 
lg:w-[25vw] 
flex 
rounded-sm 
border
border-black
h-[5vh] 
pl-8
pr-4
focus:outline-none
`;

const ConfirmImage = tw.img`
w-[9px]
h-[9px]
self-center
mx-1
`;

const Invoice = tw.img`
w-16
`;

const OrderItemContainer = tw.div`
my-10
`;

const Item = tw.div`
my-5
flex-col
`;

export default OrderHistory;
