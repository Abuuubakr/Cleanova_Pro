import React from "react";
import Line from "./Line";

const Professional_Cleaning = () => {
  const text = [
    {
      h1: "10K+",
      h2: "Happy customers",
    },
    {
      h1: "5+",
      h2: "Happy customers",
    },
    {
      h1: "99%",
      h2: "Customer satisfaction",
    },
  ];

  return (
    <div className="mb-20">
      <Line/>
      <div className="mt-20 w-[85%] m-auto">
        <div className="max-w-198.75">
          <div>
            <p className="text-[24px] font-extrabold leading-8">
              <span className="text-[#3C78C9]">
                Professional Cleaning Services in DMV
              </span>{" "}
              – Trusted Residential & Commercial Cleaning Company |{" "}
              <span className="text-[#3C78C9]">CLEANOVA PRO SERVICES</span>
            </p>
          </div>
          <div className="mt-3.75">
            <p className="text-[15px] font-medium text-[#505050] leading-3.75">
              From Offices to Houses we bring comfort to your home and household
              we bring you better experience with the help of our love. From
              Offices to Houses we bring comfort to your home and household we
              bring you better experience with the help of our love.
            </p>
          </div>
        </div>
        <div className="mt-15  flex justify-between items-center  space-x-5.5 max-[1000px]:space-y-5.5 max-[1000px]:flex-col">
          {text.map((e, i) => (
            <div
              className="bg-[#F4F8FC] p-1.75 flex items-center space-x-3"
              key={i}
            >
              <div className="py-12">
                <p className="w-30 text-center text-[32px] font-extrabold">
                  {e.h1}
                </p>
              </div>
              <div className="bg-white px-2.5 py-5">
                <p className="text-[18px] font-extrabold">{e.h2}</p>
                <p className="text-[15px] text-[#505050] leading-3.75 font-medium">
                  From Offices to Houses we bring comfort to your home and
                  household.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional_Cleaning;
