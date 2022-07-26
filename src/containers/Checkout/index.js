import React, { useState } from "react";
import tw from "tailwind-styled-components";
import {
  SideBar,
  TopNavbar,
  Footer,
  Button,
  Basic,
  CheckBox,
  Input,
} from "@components";
import { HiCheckCircle } from "react-icons/hi";
import UserData from "@components/TopNavbar/widgets/UserData";
import Profile from "@components/TopNavbar/widgets/Profile";
import voucher from "@assets/images/profile-setting/voucher.png";
import AddNote from "./AddNote";
import paymentMethod from "./paymentMethod";

const Checkout = () => {
  
  const [active, setActive] = useState("");
  
  const [checked, setChecked] = useState(false);
  
  const tipCost = [1, 2, 4, 6, 8, 10];

  const paymentSummary = [
    { title: "Product Total Price (Sub total)", cost: "CHF 45.00" },
    { title: "VAT fee (7.7%)", cost: "CHF 3.465" },
    { title: "Delivery fee", cost: "CHF 3.90" },
  ];
  
  const handleCost = (event) => {
    setActive(event.target.id);
    console.log(event.target.value);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }
  return (
    <>
      <TopNavbar />
      <Container>
        <SideMenuContent>
          <SideBar />
        </SideMenuContent>
        <UserData userclassname={"xl:hidden"} />
        <CheckoutContainer>
          <div className="flex items-center justify-between">
            <Basic
              style={{ fontWeight: 700 }}
              className={"xl:text-3xl lg:text-2xl md:text-xl text-lg"}
            >
              {"Checkout"}
            </Basic>
            <div className="flex">
              <Button
                title={"Private Billing"}
                className={
                  "bg-black text-white shadow-cartBtn w-auto mx-2 rounded-md py-3 px-7"
                }
              />
              <Button
                title={"Bussiness Billing"}
                titleclassname={"max-w-full"}
                className={
                  "bg-white text-black shadow-cartBtn w-auto mx-2 mr-4 rounded-md py-3 px-7"
                }
              />
            </div>
          </div>
          <CheckoutContent>
            <div className="grid grid-cols-2 gap-3">
              <AddNote />
              <TipContainer>
                <TitleText>{"Leave a Tip"}</TitleText>
                <div className="flex flex-row items-center my-7 gap-x-3 px-8">
                  {tipCost.map((cost, idx) => (
                    <CustomButton onClick={handleCost} id={idx.toString()}>
                      {`CHF ${cost}`}
                      <HiCheckCircle
                        size={18}
                        className={
                          active === idx.toString()
                            ? `absolute -top-2 -right-2`
                            : "hidden"
                        }
                      />
                    </CustomButton>
                  ))}
                </div>
              </TipContainer>
              <PaymentMethod>
                <TitleText>{"Payment Methods"}</TitleText>
                <div className="px-8">
                  {paymentMethod.map((pay, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center border-b border-b2bButton last:border-b-0 py-2 cursor-pointer"
                    >
                      <img src={pay.img} alt="" className="w-7 h-7" />
                      <span className="ml-2">{pay.title}</span>
                    </div>
                  ))}
                </div>
              </PaymentMethod>

              <PaymentSummary>
                <TitleText>{"Payment Summary"}</TitleText>
                <div className="flex flex-col">
                  <div className="px-8">
                    <div className="flex flex-row items-center justify-between py-4  border-b border-b2bButton">
                      <div className="flex flex-row items-center">
                        <div className="border rounded-sm">
                          <img src={voucher} alt="" className="w-6 h-6 p-1" />
                        </div>
                        <span className="ml-3">
                          {"Choose your Voucher Code"}
                        </span>
                      </div>
                      <label
                        htmlFor="chooseFile"
                        className="bg-white border rounded-sm border-color207 font-semibold py-1 px-4"
                      >
                        {"Choose"}
                      </label>
                      <input
                        type="file"
                        name=""
                        id="chooseFile"
                        className="hidden"
                      />
                    </div>
                    {paymentSummary.map((bill) => (
                      <div className="flex flex-row items-center justify-between py-3 border-b border-b2bButton">
                        <span className="font-semibold">{bill.title}</span>
                        <span>{bill.cost}</span>
                      </div>
                    ))}
                    <div className="flex flex-row items-center justify-between pt-3">
                      <span className="font-bold">{"Net Total"}</span>
                      <span>{"CHF 52.365"}</span>
                    </div>
                  </div>
                </div>
              </PaymentSummary>
            </div>
            <PaymentSchedule>
              <TitleText>{"Plan Delivery Later"}</TitleText>
              <div className="px-8">
                <div className="flex flex-row justify-between items-center py-5">
                  <span>{"Schedule Delivery Time"}</span>
                  <div id="set-time" className={`${checked ? 'flex': 'hidden'} items-center`}>
                    <Button
                      title={"Today"}
                      className={
                        "bg-black text-white shadow-cartBtn w-auto mx-4 rounded-md py-3 px-7"
                      }
                    />
                    <Button
                      title={"Tommorrow"}
                      className={
                        "bg-white text-black shadow-cartBtn w-auto mr-4 rounded-md py-3 px-7"
                      }
                    />
                    <Input
                      type="date"
                      className={"m-0 py-1 px-4"}
                      style={{margin: "0 0 0 0"}}
                    />
                    <Input
                      type="time"
                      className={"m-0 py-1 px-4"}
                      style={{margin: "0 0 0 25px"}}
                    />
                  </div>
                  <CheckBox className={"w-4 h-4"} id="set-time" checked={checked} onChange={(e) => handleCheck(e)}/>
                </div>
              </div>
            </PaymentSchedule>

            <PlaceOrder>
              <Basic>
                "The <TextLink>terms and conditions</TextLink> of MAPL, here are
                our <TextLink>privacy policy</TextLink> regulations for your
                information."
              </Basic>
              <Button
                title={"Place Order"}
                className={
                  "bg-color51 text-white w-auto inline-block rounded-sm py-2 px-7"
                }
              />
            </PlaceOrder>
          </CheckoutContent>
        </CheckoutContainer>
        <Profile
          openProfile={true}
          userName={"Swissan Kandaswamy"}
          profileclassname={"xl:sticky xl:top-0 xl:flex hidden"}
        />
      </Container>
      <Footer />
    </>
  );
};

const Container = tw.div`
flex
relative
`;

const SideMenuContent = tw.div`
xl:w-[15.5%] 
lg:sticky
lg:top-0
sticky
top-0
md:top-0
h-screen
flex flex-col
z-30
`;

const CheckoutContainer = tw.div`
xl:full
lg:w-full
w-full
h-full 
flex
flex-col
relative
px-4
xl:py-5
lg:py-7
py-5
`;

const CheckoutContent = tw.div`
flex
flex-col
pt-6
pr-7
`;

const TipContainer = tw.div`
flex
flex-col
bg-white
shadow-cartBtn
`;

const PaymentMethod = tw.div`
flex
flex-col
bg-white
shadow-cartBtn
`;

const PaymentSummary = tw.div`
flex
flex-col
bg-white
shadow-cartBtn
`;

const PaymentSchedule = tw.div`
flex
flex-col
justify-end
bg-white
shadow-cartBtn
mt-4
`;

const PlaceOrder = tw.div`
flex
items-center
justify-between
py-4
`;

const TextLink = tw.button`
underline
`;

const TitleText = tw.span`
font-semibold 
text-lg 
py-2
px-8
border-b
border-color139
`;

const CustomButton = tw.button`
bg-white 
border 
border-color207 
py-1 px-2
relative
rounded-sm
`;

export default Checkout;
