import React from "react";
import frame from "../../public/images/Frame.png";
import img from "../../public/images/image 4.png";
import Image from "next/image";
import Line from "../Line";
import Team from "./Team";
import Animation_Up from "../Animation_Up";

const Reliable_affordable = () => {
  return (
    <div className="mt-10 mb-15.5">
      <Animation_Up>
        <div className="flex justify-between items-center max-[1000px]:flex-col-reverse  w-[85%] m-auto">
          <div className="space-y-3 min-[1000px]:w-[45%]">
            <div>
              <p className="text-[24px] font-extrabold leading-8">
                <span className="text-[#3C78C9]">
                  Reliable, Affordable & Professional
                </span>{" "}
                Commercial Cleaning
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#505050] font-medium leading-3.75">
                Our commercial cleaning service is designed to keep business
                spaces clean, hygienic, and presentable. We help maintain
                professional environments that support daily operations and
                create a positive impression.
              </p>
            </div>
            <div className="text-[15px] text-[#505050] font-bold space-y-[9.5px]">
              <div className="space-x-2.5 flex">
                <div>
                  <Image src={frame} alt="frame" />
                </div>
                <div>
                  <p>Professional cleaners for commercial environments</p>
                </div>
              </div>
              <div className="space-x-2.5 flex">
                <div>
                  <Image src={frame} alt="frame" />
                </div>
                <div>
                  <p>Flexible cleaning schedules to suit business hours</p>
                </div>
              </div>
              <div className="space-x-2.5 flex">
                <div>
                  <Image src={frame} alt="frame" />
                </div>
                <div>
                  <p>High hygiene standards for shared and public areas</p>
                </div>
              </div>
              <div className="space-x-2.5 flex">
                <div>
                  <Image src={frame} alt="frame" />
                </div>
                <div>
                  <p>Reliable service with consistent quality results</p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-[1000px]:w-[45%] w-full max-[1000px]:mb-10">
            <Image src={img} alt="frame" className="w-full" />
          </div>
        </div>
      </Animation_Up>
      <div className="my-10">
        <Line />
      </div>
      <div className="min-[800px]:w-[85%]  m-auto">
        <Animation_Up>
          <Team />
        </Animation_Up>
      </div>
    </div>
  );
};

export default Reliable_affordable;
