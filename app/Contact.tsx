import React from "react";

type ContactProps = {
  className?: String;
};


const Contact = ({ className } : ContactProps) => {
  return (
    <div className="w-full h-full flex p-1.25 bg-linear-to-b from-[#3C78C9] to-[#F4F8FC] rounded-[11px]">
      <div className={`bg-white p-3 rounded-[11px] flex flex-col flex-1  ${className} justify-center`}>
        <div className="mb-6.5">
          <p className="text-[18px] font-extrabold ">Contact us</p>
          <p className="text-[15px] text-[#505050] font-medium">
            Leave your contact details and we will call you back.
          </p>
        </div>
        <div className="">
          <div className="space-y-2 flex flex-col w-full">
            <input
              className="p-3 border border-[#F4F8FC] rounded-[11px]"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-3 border border-[#F4F8FC] rounded-[11px]"
              type="text"
              placeholder="Last name"
            />
            <input
              className="p-3 border border-[#F4F8FC] rounded-[11px]"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="p-3 border border-[#F4F8FC] rounded-[11px]"
              type="text"
              placeholder="Service details"
              required
            />
          </div>
          <div className="my-3">
            <button className="w-full py-2.5 px-3.74 bg-[#3C78C9] rounded-lg cursor-pointer text-white">
              Contact us
            </button>
          </div>
          <div className="flex justify-between space-x-1.5">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <p className="text-[9px] leading-2.5 text-[#505050]">
                By checking this box, I consent to receive marketing and
                promotional text messages from Cleanova Pro services at the
                phone number I have provided above. Message and data rates may
                apply. Message frequency varies. Reply HELP for help and STOP to
                unsubscribe. I agree to the Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
