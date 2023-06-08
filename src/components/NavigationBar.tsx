import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { SlBag, SlHeart } from "react-icons/sl";
export const NavigationBar = () => {
  return (
    <div className="fixed top-0 flex w-full flex-col">
      <div className="flex h-[51px] w-full flex-row items-center justify-between px-10 py-2">
        <div className="flex items-center">
          <Image
            src="shopping logo.svg"
            alt="shopping-logo"
            width={200}
            height={25}
            className="mx-[11px]"
          />
          <div className="mt-[6px] flex items-center font-sans font-normal text-slate-700 hover:cursor-pointer">
            <span className="mx-[11px] hover:underline hover:decoration-yellow-400 hover:decoration-4 hover:underline-offset-[15px]">
              MEN
            </span>
            <span className="mx-[11px] hover:underline hover:decoration-yellow-400 hover:decoration-4 hover:underline-offset-[15px]">
              WOMEN
            </span>
            <span className="mx-[11px] hover:underline hover:decoration-yellow-400 hover:decoration-4 hover:underline-offset-[15px]">
              MOBILE COVERS
            </span>
          </div>
        </div>
        <div className="flex items-center divide-x">
          <div className="relative mr-2">
            <input
              type="text"
              className="focus: min-h-[40px] w-[301px] rounded-md border-[1px] bg-slate-100 pl-11 focus:border-slate-300 focus:bg-white focus:outline-none "
            />
            <BsSearch className="absolute left-4 top-[50%] -translate-y-[50%]" />
          </div>
          <div className="flex items-center gap-5 ml-4 mr-14">
            <span>Login</span>
            <SlHeart size={25}/>
            <SlBag size={25}/>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 px-24 font-sans text-lg font-[350] border-t-[1px] bg-red-200">
        <span>OOF SALE</span>
        <span>MEN</span>
        <span>WOMEN</span>
        <span>ACCESSORIES</span>
        <span>OFFICIAL MERCH</span>
        <span>PLUS SIZE</span>
        <span>TEENS</span>
      </div>
    </div>
  );
};
