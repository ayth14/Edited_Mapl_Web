import React from "react";
import tw from "tailwind-styled-components";
import { Basic, Button } from "@components";
import { IoClose } from "react-icons/io5";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import cartList from "./cartList";
const CartProductList = () => {
  return (
    <>
      <table className="table-auto">
        <thead className="border-b border-b2bButton text-left">
          <tr>
            <th>
              <div className="flex items-center">
                Product
                <FaSort />
              </div>
            </th>
            <th>Availability</th>
            <th>Price</th>
            <th>Number of selections</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product, idx) => (
            <tr key={idx} className="border-t border-b2bButton text-left ">
              <td className="py-6 flex max-w-fit items-center">
                <div className="bg-color249 flex justify-center w-20 h-20 py-2">
                  <img src={product.img} alt="" />
                </div>
                <span className="font-semibold pl-3">{product.productName}</span>
              </td>
              <td>
                <Availabilty>
                  {product.availabilty}
                </Availabilty>
              </td>
              <td>
                <Basic style={{ fontWeight: 700 }}>
                  {"CHF"} {product.price}
                </Basic>
              </td>
              <td className="w-[154px]">
                <div className={` ${product.quantity > 0 ? `w-full` : ``}`}>
                  <Button
                    className={` flex items-center bg-white w-full shadow-cartBtn rounded-[30px] p-2 ${
                      product.quantity > 0 ? "justify-between" : ` `
                    }`}
                    icon={product.quantity > 0 ? deleteIcon : plusIcon}
                    iconStyle={{
                      width: "auto",
                      height: "20px",
                      padding: "0 0.5rem 0 0",
                    }}
                    title={product.quantity ? product.quantity : "Add"}
                    titleclassname={`${product.quantity > 0 ? "pr-0" : "pr-1"}`}
                    titleStyle={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "rgb(45, 56, 66)",
                      display: "flex",
                    }}
                    bottomlabel={
                      product.quantity > 0 ? <Icon src={plusIcon} /> : "to cart"
                    }
                  />
                </div>
              </td>
              <td className="text-center">
                <button>
                  <IoClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Availabilty = tw.div`
border 
border-color139 
max-w-fit 
py-1 
px-2 
rounded-sm
`;

const Icon = tw.img`
w-auto
h-4
`;

export default CartProductList;
