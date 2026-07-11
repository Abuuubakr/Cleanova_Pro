import Image from "next/image";
import React from "react";
import img from "../../public/images/image 5 (1).png"

const Our_latestWork = () => {
  return (
    <div className="w-[85%] m-auto mb-9">
      <div className="max-w-145">
        <p className="text-[24px] font-extrabold">Our latest work</p>
        <p className="mt-3.75 text-[15px] leading-3.75 font-medium text-[#505050]">
          From Offices to Houses we bring comfort to your home and household we
          bring you better experience with the help of our love. From Offices to
          Houses we bring comfort to your home and household we bring you better
          experience with the help of our love.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-4 max-[1000px]:grid-cols-2 max-[800px]:grid-cols-1 gap-5.5">
        <div className="max-[800px]:w-full">
            <Image className="w-full" src={img} alt="image 5" />
        </div>
        <div className="max-[800px]:w-full">
            <Image className="w-full" src={img} alt="image 5" />
        </div>
        <div className="max-[800px]:w-full">
            <Image className="w-full" src={img} alt="image 5" />
        </div>
        <div className="max-[800px]:w-full">
            <Image className="w-full" src={img} alt="image 5" />
        </div>
      </div>
    </div>
  );
};

export default Our_latestWork;
