import React from "react";
import stars from "../../public/images/starts.png";
import Image from "next/image";

const Client_Feedback = () => {
  const feedbacks = [1, 2, 3, 4];

  return (
    <div className="pt-27.25 pb-45 w-[85%] m-auto">
      <div className="text-center max-w-145 m-auto">
        <p className="mb-3.25 text-[24px] font-extrabold">
          <span className="text-[#3C78C9]">Our Satisfied</span> Client Feedback
        </p>
        <p className="text-[15px] text-[#505050] leading-3.75">
          Real feedback from our happy customers who trust our professional
          cleaning services across City1 and the City2.
        </p>
      </div>
      <div className="mt-12.5 grid grid-cols-4 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 gap-7">
        {feedbacks.map((e) => (
          <div key={e} className="p-3 space-y-6 border border-[#EEEEEE] rounded-xl">
            <div>
              <Image src={stars} alt="img" className="" />
            </div>
            <div>
              <p className="text-[15px] text-[#505050] leading-3.75">
                I contacted this company for an end-of-tenancy clean after
                moving out. Jack and Anvas came to do the job, and they cleaned
                everything very thoroughly — I’m really pleased with their work.
              </p>
            </div>
            <div className="text-[15px] text-[#505050] space-y-0.5">
                <p className="font-bold">Will Thomson</p>
                <p>3 month ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client_Feedback;
