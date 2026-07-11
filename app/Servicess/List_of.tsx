import React from "react";
import Line from "../Line";
import Image from "next/image";
import card from "../../public/images/card.png";
import Animation_Up from "../Animation_Up";

const List_of = () => {
  return (
    <div className="mb-22.5">
      <Line />
      <div className="w-[85%] mt-10 m-auto">
        <div className="max-w-xl">
          <p className="mb-3.25 text-[24px] font-extrabold">
            List of our <span className="text-[#A0C06A]">PRO</span> services
          </p>
          <p className="text-[15px] text-[#505050] leading-3.75">
            From Offices to Houses we bring comfort to your home and household
            we bring you better experience with the help of our love. From
            Offices to Houses we bring comfort to your home and household we
            bring you better experience with the help of our love.
          </p>
        </div>
        <Animation_Up>
          <div className="mt-8.75 grid grid-cols-4 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 gap-6">
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="card" className="w-full h-full" />
            </div>
          </div>
        </Animation_Up>
      </div>
    </div>
  );
};

export default List_of;
