"use client";
import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const questions = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  const handleClick = (id : number) => {
    if (open == id) setOpen(0);
    else setOpen(id);
  }

  return (
    <div className="mt-37.5 bg-[#F4F8FC] pt-12.5 pb-37.5 ">
      <div className="w-[85%] m-auto bg-white rounded-[22px] p-6 space-y-3.75">
        <div>
          <p className="text-[24px] font-extrabold">
            Frequently asked questions
          </p>
        </div>
        <div className="space-y-1.5">
          {questions.map((e) => (
            <div className="space-y-1.5" key={e.id}>
              <div className="flex justify-between">
                <div>
                  <p className="text-[18px] font-extrabold">
                    How can i book services ?
                  </p>
                </div>
                <div>
                  <button
                    className="cursor-pointer text-[30px]"
                    onClick={() => handleClick(e.id)}
                  >
                    {open == e.id ? <BiChevronDown /> : <BiChevronRight />}
                  </button>
                </div>
              </div>
              <div className={open != e.id ? "hidden" : ""}>
                <p className="text-[15px] text-[#505050] leading-3.75 font-medium">
                  From Offices to Houses we bring comfort to your home and
                  household we bring you better experience with the help of our
                  love. From Offices to Houses we bring comfort to your home and
                  household we bring you better experience with the help of our
                  love.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
