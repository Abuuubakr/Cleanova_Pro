import React from "react";
import bg1 from "../../public/images/Vector 1.png";
import bg2 from "../../public/images/Group 12.png";
import Image from "next/image";

const Showcase4 = () => {
  return (
    <div className="pt-25 bg-linear-to-b from-[#D2E3F8] to-[#D2E3F8]">
      <div className="relative top-30">
        <Image src={bg1} alt="background_1" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center -top-16">
          <Image src={bg2} alt="background_2" className="w-full max-w-180" />
        </div>
      </div>
      <div className="mx-auto  pb-11.75  rounded-[22px]  max-w-167.5 min-[800px]:mt-40">
        <div className="text-center space-y-4.5 w-[80%] max-[800px]:w-[90%] m-auto ">
          <div className="text-[15px] font-medium text-white">
            <button className="w-50 bg-[#A0C06A] rounded-xl py-2 ">
              Get 10% Discount{" "}
            </button>
          </div>
          <p className="text-[32px] font-extrabold leading-8">
            Our services in{" "}
            <span className="text-[#3C78C9]">Washington DC</span>{" "}
          </p>
          <p className="text-[15px] text-[#505050] leading-3.75">
            From Offices to Houses we bring comfort to your home and household
            we bring you better experience with the help of our love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase4;
