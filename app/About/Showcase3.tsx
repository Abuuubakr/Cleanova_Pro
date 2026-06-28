import React from "react";
import Contact from "../Contact";
import Image from "next/image";
import van from "../../public/images/image 5.png";
import circle from "../../public/images/image 9.png";

const Showcase3 = () => {
  return (
    <div
      className="pt-36.25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}
    >
      <div className="w-[85%] m-auto  rounded-[22px]  p-3 flex justify-between items-center max-[800px]:flex-col-reverse space-y-5.5">
        <div className="flex justify-between items-center max-[1200px]:flex-col min-[800px]:w-[50%]">
          <div className="space-y-4 max-[1200px]:text-center max-[1200px]:mt-3">
            <div className="text-[15px] font-medium text-white min-[800px]:hidden mt-4">
              <button className="w-50 bg-[#A0C06A] rounded-xl py-2 ">
                Get 10% Discount{" "}
              </button>
            </div>
            <div className="space-y-3.5 max-w-113.5">
              <p className="text-[32px] font-extrabold leading-8">
                Making accurate your home is our{" "}
                <span className="text-[#3C78C9]">main priority</span>
              </p>
              <p className="text-[15px] leading-3.75 font-medium text-[#505050]">
                From Offices to Houses we bring comfort to your home and
                household we bring you better experience with the help of our
                love.
              </p>
              <div className="max-[800px]:hidden">
                <button className="bg-[#3C78C9] rounded-lg w-47 py-2.5 text-white">
                  Free quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="min-[800px]:w-[40%]">
          <div className="">
            <Image src={circle} alt="img" />
          </div>
          <div className="-mt-100">
            <Image src={van} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase3;
