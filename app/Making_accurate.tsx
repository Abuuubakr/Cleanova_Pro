"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import girl2 from "../public/images/image 3.png";
import circle from "../public/images/image 10.png";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import card from "../public/images/card.png";   

const Making_accurate = () => {
  const services = [
    { id: 1, title: "Service 1" },
    { id: 2, title: "Service 2" },
    { id: 3, title: "Service 3" },
    { id: 4, title: "Service 4" },
    { id: 5, title: "Service 5" },
  ];

  return (
    <div
      className="pt-10.5 mb-24 bg-cover bg-center bg-no-repeat min-[800px]:h-137.5 max-[800px]:pb-7.5"
      style={{ backgroundImage: "url('/images/Rectangle 11 (1).png')" }}
    >
      <div className="flex max-[800px]:w-[90%] m-auto">
        <div className="w-[25%] flex max-[800px]:hidden">
          <div className="w-full z-1 mt-6.25">
            <Image src={girl2} alt="img" className="w-full h-120.5" />
          </div>
          <div className="w-[75%] -ml-95">
            <Image src={circle} alt="img" className="w-full h-120.5" />
          </div>
        </div>
        <div className="space-y-8.5 min-[800px]:w-[75%] w-full">
          <div className="space-y-3.5 max-w-123 text-white">
            <p className="text-[32px] leading-8 font-extrabold">
              {" "}
              Making accurate your homeis our{" "}
              <span className="text-[#A0C06A]">main priority</span>
            </p>
            <p className="text-[15px] leading-3.75 font-medium">
              From Offices to Houses we bring comfort to your home and household
              we bring you better experience with the help of our love.
            </p>
          </div>
          <div className="min-[800px]:hidden flex flex-col space-y-5.5">
            <div>
              {" "}
              <Image src={card} alt="img" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="img" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="img" className="w-full h-full" />
            </div>
            <div>
              {" "}
              <Image src={card} alt="img" className="w-full h-full" />
            </div>
          </div>
          <div className="flex  items-center justify-between max-[800px]:hidden">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={40}
              navigation={{
                nextEl: ".nextBtn",
                prevEl: ".prevBtn",
              }}
              className="w-[85%]"
            >
              {services.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="h-65 rounded-3xl shadow-lg overflow-hidden">
                    <Image src={card} alt="img" className="w-full h-full" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <button className="prevBtn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow cursor-pointer">
            ←
          </button> */}
            <div className="w-[10%]">
              <button className="nextBtn   w-14 h-14 rounded-full bg-white shadow cursor-pointer">
                →
              </button>
            </div>
          </div>
          <div className="min-[800px]:w-[87%] w-full flex justify-end">
            <button className="min-[800px]:w-47.5 w-full ml-auto text-[15px] bg-white rounded-lg text-[#505050] font-bold py-2.5 cursor-pointer">
              See all services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Making_accurate;
