import React from "react";
import tw from "tailwind-styled-components";
import { Basic, Button, CheckBox } from "@components";
import { IoClose } from "react-icons/io5";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import plusIcon from "@assets/images/plusIcon.png";
import deleteIcon from "@assets/images/deleteIcon.png";
import wishList from "./wishList";

const WishListProduct = () => {

  return (
    <>
      <table className="table-auto">
        <thead className="border-b border-b2bButton text-left">
          <tr>
            <th className="max-w-fit">
              <div className="flex items-center">
                <span>Product</span> 
                <FaSort />
              </div>
            </th>
            <th>Availability</th>
            <th>Price</th>
            <th>Number of selections</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((product, idx) => (
            <tr key={idx} className="border-t border-b2bButton text-left ">
              <td className="py-6 w-[28vw]">
                <div className="flex gap-x-2 justify-start items-center">
                  <CheckBox className={"w-3 h-3"}/>
                <div className="bg-color249 flex justify-center w-[69px] h-[69px] py-2">
                  <img src={product.img} alt="" />
                </div>
                <span className="font-semibold">
                  {product.productName}
                </span>
                </div>
              </td>
              <td>
                  <Basic className={"border border-color139 px-2 py-1 rounded-sm"}>{product.availabilty}</Basic> 
              </td>
              <td className="mr-7">
                <Basic style={{ fontWeight: 700 }}>
                  {"CHF"} {product.price}
                </Basic>
              </td>
              <td className="w-[10vw]">
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
              <td className="text-center pl-3">
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
py-1 
px-2 
mr-7
rounded-sm
flex
`;

const Icon = tw.img`
w-auto
h-4
`;

export default WishListProduct;
