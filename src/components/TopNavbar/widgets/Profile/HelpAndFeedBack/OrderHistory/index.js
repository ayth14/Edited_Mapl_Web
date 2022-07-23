import React from "react";
import tw from "tailwind-styled-components";
import { PrimaryText } from "@components";
import OrderHistoryList from "./orderHistoryList";

const OrderHistory = () => {
  return (
    <Container>
      <Heading>{"Order History"}</Heading>
      <div className="w-full lg:w-[44vw] overflow-scroll scrollbar-none">
        <OrderItemContainer>
          {OrderHistoryList.map((item, index) => (
            <Item>
              <div className="flex justify-between my-4">
                <div className="flex">
                  <PrimaryText>{`Order ${item.orderId}`}</PrimaryText>
                  <ConfirmImage src={item.confirmImg} />
                  <PrimaryText className="text-green">
                    {item.diliveryStatus}
                  </PrimaryText>
                </div>
                <PrimaryText className="text-color139">
                  {item.deliveryDate}
                </PrimaryText>
              </div>
              <div className="flex justify-between">
                <Invoice src={item.invoiceImage} />
                <div>
                  <PrimaryText>{item.paymentStatus}</PrimaryText>
                  <PrimaryText className="text-green m-2">
                    {item.paidStatus}
                  </PrimaryText>
                </div>
                <div>
                  <PrimaryText>{item.totalAmount}</PrimaryText>
                  <PrimaryText className="text-color139 m-2">
                    {item.chf}
                  </PrimaryText>
                </div>
                <PrimaryText>{item.orderDetails}</PrimaryText>
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
text-xl
font-bold
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