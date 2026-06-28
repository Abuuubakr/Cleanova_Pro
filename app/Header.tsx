"use client";
import { Drawer } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full absolute">
      <div className="max-[800px]:w-[90%] w-[85%] m-auto max-[800px]:mt-6 max-[800px]:mb-3.75 mt-7.5 mb-15">
        <div className=" py-3.75 px-3 flex justify-between items-center bg-white rounded-2xl max-[800px]:hidden">
          <Link href={"/"}>
            <div className="font-[Inter]">
              <div className="p-0">
                <p className="text-[18px] font-black italic">CLEANOVA PRO</p>
              </div>
              <div className="-mt-1.5">
                <p className="text-[18px] font-normal italic  text-[#A0C06A]">
                  SERVICES
                </p>
              </div>
            </div>
          </Link>
          <div className="min-[1200px]:w-[50%] w-[70%] text-[14px]">
            <ul className="flex justify-between items-center w-full">
              <li>
                <Link href={"./"}>Home</Link>
              </li>
              <li>
                <Link href={"./Servicess"}>Services</Link>
              </li>
              <li>
                <Link href={"./Service_area"}>Service area</Link>
              </li>
              <li>
                <Link href={"./About"}>About us</Link>
              </li>
              <li>
                <Link href={"./BlogUi"}>Blog</Link>
              </li>
              <li>
                <button className="bg-black py-1.25 px-5.5 text-white rounded-lg">
                  Free quote
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="min-[800px]:hidden w-full flex items-center">
          <div>
            <button
              className="p-2.5  rounded-[9px] cursor-pointer bg-white"
              onClick={showDrawer}
            >
              <FaBars />
            </button>
          </div>
          <div className="font-[Inter] m-auto max-w-40 text-center">
            <div className="p-0">
              <p className="text-[18px] font-black italic">CLEANOVA PRO</p>
            </div>
            <div className="-mt-1.5">
              <p className="text-[18px] font-normal italic  text-[#A0C06A]">
                SERVICES
              </p>
            </div>
          </div>
          <div className="w-9.25 h-9.25">
            {/* <button className="p-2.5 border rounded-[9px] cursor-pointer">
            <FaBars/>
          </button> */}
          </div>
        </div>
      </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        className="bg-[#3C78C9]"
      >
        <div className="flex flex-col justify-between h-full font-[Inter]">
          <div>
            <div className="p-0">
              <p className="text-[14px] font-black italic">CLEANOVA PRO</p>
            </div>
            <div className="-mt-1.5">
              <p className="text-[14px] font-normal italic ">SERVICES</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[24px] font-extrabold">Menu pages</p>
            </div>
            <ul className="mt-5 font-extrabold space-y-2">
              <li className="">
                <Link href={"./"}>
                  <p className="text-black">Home</p>
                </Link>
              </li>
              <li>
                <Link href={"./Servicess"}>
                  <p className="text-black">Services</p>
                </Link>
              </li>
              <li>
                <Link href={"./Service_area"}>
                  <p className="text-black">Service area</p>
                </Link>
              </li>
              <li>
                <Link href={"./About"}>
                  <p className="text-black">About us</p>
                </Link>
              </li>
              <li>
                <Link href={"./BlogUi"}>
                  <p className="text-black">Blog</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <p className="text-[24px] font-extrabold leading-5.5">
                Making accurate your home is our main priority
              </p>
            </div>
            <ul className="mt-5 space-y-2.5">
              <li>
                <p className="text-[13px] font-medium">
                  Location: 000 Adress, 4 Something, VA 238957
                </p>
              </li>
              <li>
                <p className="text-[13px] font-medium">
                  sales@clenovaproservices.com
                </p>
              </li>
              <li>
                <p className="text-[13px] font-medium">+(1)234567890</p>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
