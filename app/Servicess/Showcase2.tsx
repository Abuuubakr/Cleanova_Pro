import React from "react";

const Showcase2 = () => {
  return (
    <div
      className="pt-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/image0.png')" }}
    >
      <div className="m-auto  pt-15.75 pb-11.75  rounded-[22px] bg-white max-w-167.5 min-[800px]:mt-15">
        <div className="text-center space-y-4.5 w-[80%] max-[800px]:w-[90%] m-auto ">
          <p className="text-[32px] font-extrabold leading-8">
            Making accurate your home is our{" "}
            <span className="text-[#3C78C9]">main priority</span>{" "}
          </p>
          <p className="text-[15px] text-[#505050] leading-3.75">
            From Offices to Houses we bring comfort to your home and household
            we bring you better experience with the help of our love.
          </p>
          <div>
            <button className="bg-[#3C78C9] rounded-lg w-47 py-2.5 text-white">
              Free quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase2;
