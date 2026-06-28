import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full p-10 max-[800px]:p-3.75 text-white text-[15px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Rectangle 11.png')" }}
    >
      <div className="w-[85%] max-[800px]:w-[90%] m-auto flex flex-wrap justify-between max-[800px]:flex-col max-[800px]:space-y-8.5 items-center pt-11.25 pb-9.5">
        <div className="min-[800px]:hidden max-[800px]:w-full">
          <div className="p-0">
            <p className="text-[14px] font-black italic">CLEANOVA PRO</p>
          </div>
          <div className="-mt-1.5">
            <p className="text-[14px] font-normal italic ">SERVICES</p>
          </div>
        </div>
        <div className="max-[800px]:hidden">
          <ul className="space-y-3">
            <li>
              <div className="p-0">
                <p className="text-[14px] font-black italic">CLEANOVA PRO</p>
              </div>
              <div className="-mt-1.5">
                <p className="text-[14px] font-normal italic ">SERVICES</p>
              </div>
            </li>
            <li>Location: 000 Adress, 4 Something, VA 238957</li>
            <li>sales@clenovaproservices.com</li>
            <li>+(1)234567890</li>
          </ul>
        </div>
        <div className="max-[800px]:w-full">
          <ul className="space-y-3">
            <li>
              <b className="text-[18px] font-extrabold ">Helpful link</b>
            </li>
            <li>About us</li>
            <li>Our blog</li>
            <li>Terms Condition</li>
            <li>Carpet Cleaning</li>
          </ul>
        </div>
        <div className="min-[840px]:w-[30%] w-full space-y-3">
          <div>
            <b className="text-[18px] font-extrabold ">List of our services</b>
          </div>
          <div className="flex justify-between items-center flex-wrap max-[400px]:space-y-5">
            <div>
              <ul className="space-y-3">
                <li>First Cleaning</li>
                <li>Recurring Cleaning</li>
                <li>Move In/Out Cleaning</li>
                <li>Carpet Cleaning</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li>Maid of a Day Service</li>
                <li>Vacation Rental Cleaning</li>
                <li>After Party Cleaning</li>
                <li>Spring Cleaning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="min-[800px]:hidden w-full">
          <ul className="space-y-3">
            <li>Location: 000 Adress, 4 Something, VA 238957</li>
            <li>sales@clenovaproservices.com</li>
            <li>+(1)234567890</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
