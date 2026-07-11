import React from "react";
import img from "../public/images/Rectangle 7.png";
import Image from "next/image";

const Get_started = () => {
  const cards = [
    {
      id: 1,
      h1: "Book in seconds",
    },
    {
      id: 2,
      h1: "Meet a team",
    },
    {
      id: 3,
      h1: "Enjoy",
    },
    {
      id: 4,
      h1: "Love or suggest",
    },
  ];

  return (
    <div className="w-[85%] m-auto">
      <div className="space-y-3.75 max-w-xl mb-15">
        <p className="text-[24px] font-extrabold">Get started in minutes.</p>
        <p className="text-[15px] text-[#505050] leading-3.75">
          From Offices to Houses we bring comfort to your home and household we
          bring you better experience with the help of our love. From Offices to
          Houses we bring comfort to your home and household we bring you better
          experience with the help of our love.
        </p>
      </div>
      <div className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[800px]:grid-cols-1 gap-5.5">
        {cards.map((e) => (
          <div key={e.id} className="rounded-3.75 flex flex-col pb-6.25">
            <div>
              <Image src={img} alt="couch" className="w-full" />
            </div>
            <div className="w-full -mt-7.5">
              <div className="w-16.25 py-2 m-auto border-6 rounded-tr-[20px] border-white bg-[#A0C06A] text-center">
                <p className="text-[32px] text-white font-extrabold">{e.id}</p>
              </div>
            </div>
            <div className="mt-3.75 text-center">
              <p className="text-[18px] font-extrabold">{e.h1}</p>
              <p className="text-[15px] text-[#505050] leading-3.75">
                From Offices to Houses we bring comfort to your home and
                household.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Get_started;
