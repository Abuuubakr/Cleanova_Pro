import React from "react";
import girl from "../public/images/image 1 (2).png";
import Image from "next/image";
import Contact from "./Contact";

const Showcase = () => {
  return (
    <div className="pt-36.25 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}>
      <div className="w-[85%] m-auto bg-[#FFFFFFA6] rounded-[22px]  p-3 flex justify-between items-center max-[800px]:flex-col space-y-5.5">
        <div className="flex justify-between items-center max-[1200px]:flex-col min-[800px]:w-[50%]">
          <div className="max-[1200px]:m-auto">
            <Image src={girl} alt="img" className="w-46.25" />
          </div>
          <div className="space-y-4 max-[1200px]:text-center max-[1200px]:mt-3">
            <div className="text-[15px] font-medium text-white">
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
            </div>
          </div>
        </div>
        <div className="min-[800px]:w-[40%]">
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
