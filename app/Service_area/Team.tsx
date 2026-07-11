import Image from "next/image";
import React from "react";
import Contact from "../Contact";
import img1 from "../../public/images/vector.png";
import img2 from "../../public/images/vector2.png";
import img3 from "../../public/images/vector3.png";
import img4 from "../../public/images/vector4.png";

const Team = () => {
  const services = [
    {
      img: img1,
      h1: "Experienced Team",
      p: "Our trained professionals deliver dependable, high-quality cleaning for all commercial environments.",
    },
    {
      img: img2,
      h1: "Timely Services",
      p: "We clean efficiently and on schedule to avoid disruption to your business operations.",
    },
    {
      img: img3,
      h1: "Transparent Pricing",
      p: "Our trained professionals deliver dependable, high-quality cleaning for all commercial environments.",
    },
    {
      img: img4,
      h1: "Tailored Approach",
      p: "We customize our house cleaning services to match your lifestyle, schedule, and household needs.",
    },
  ];

  return (
    <div className="min-[1000px]:bg-linear-to-r from-[#3C78C9] to-[#FFFFFF] rounded-[40px] p-3 flex justify-between items-stretch max-[1000px]:flex-col">
      <div className="bg-white p-3 rounded-[27px] space-y-8 min-[1000px]:w-[49%] max-[1000px]:mb-5.5">
        {services.map((e, i) => (
          <div
            className="rounded-[20px] border-6 border-[#3C78C9] flex items-center"
            key={i}
          >
            <div className="bg-[#3C78C9] p-8 self-stretch flex items-center rounded-l-[13px]">
              <Image src={e.img} alt="vector_id" className="w-10 h-10" />
            </div>
            <div className="py-5.75 px-5">
              <p className="text-[18px] font-extrabold">{e.h1}</p>
              <p className="text-[15px] text-[#505050] font-medium leading-3.75">
                {e.p}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="min-[1000px]:w-[49%] flex self-stretch">
        <Contact />
      </div>
    </div>
  );
};

export default Team;
