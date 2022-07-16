import React from "react";
import { TertiaryBoldText } from "@components/Text";

export default function PopularSearch() {
  return (
    <div className="w-[50%] h-[465px] bg-white mx-[24%]">
      <div className="w-full h-full flex flex-col">
        <div className="popularSearch-title px-6 pt-5">
          <TertiaryBoldText className="xl:text-[25px]">
            Popular Search
          </TertiaryBoldText>
        </div>
        <div className="flex flex-wrap searchCategory px-6 py-5">
          <div className="mr-5 my-5 ml-0">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Pasta
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Water
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Coffee
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Cereal
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Diaper
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Beer
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Desert
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Pizza
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Chocolate
            </a>
          </div>
          <div className="mr-5 my-5">
            <a
              href="/"
              className="px-4 py-3 rounded-md bg-[color:var(--popListBg)]"
            >
              Cream
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
