import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { SlBag, SlHeart } from "react-icons/sl";
import { MenuComponent } from "./MenuComponent";
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
          <div className="  mt-[6px] flex items-center font-sans font-normal text-slate-700 hover:cursor-pointer">
            <div className="group relative">
              <span className="mx-[11px] hover:underline hover:decoration-yellow-400 hover:decoration-4 hover:underline-offset-[13px]">
                MEN
              </span>
              <MenuComponent />
            </div>
            
            <div className="group relative">
              <span className="mx-[11px] hover:underline hover:decoration-yellow-400 hover:decoration-4 hover:underline-offset-[13px]">
                WOMEN
              </span>
              <MenuComponent />
            </div>
            
            <div className="group relative">
              <span className="mx-[11px] hover:underline hover:decoration-yellow-400 hover:decoration-4 hover:underline-offset-[13px]">
                MOBILE COVERS
              </span>
              <MenuComponent />
            </div>
            
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
          <div className="ml-4 mr-14 flex items-center gap-5">
            <span>Login</span>
            <SlHeart size={25} />
            <SlBag size={25} />
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] bg-red-100 px-24 py-4 font-sans text-lg font-[350]">
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
