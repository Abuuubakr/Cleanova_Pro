import Image from "next/image";
import Contact from "../Contact";
import img from "../../public/images/image 11.png";
import { ChevronRight } from "@mui/icons-material";
import { BsDash } from "react-icons/bs";

const Team2 = () => {
  const cities = ["Washington DC", "Northern Virginia", "Maryland"];
  const cities2 = ["Bethesda", "Bethesda", "Bethesda"];

  return (
    <div className="min-[1000px]:bg-linear-to-r from-[#3C78C9] to-[#FFFFFF] rounded-[40px] p-3 flex justify-between items-stretch max-[1000px]:flex-col w-[85%] m-auto">
      <div className="bg-white p-3 rounded-[27px] space-y-8 min-[1000px]:w-[49%] max-[1000px]:mb-5.5">
        <div className="space-y-3.75">
          <p className="text-[24px] font-extrabold">Service area</p>
          <p className="text-[15px] leading-3.75 font-medium text-[#505050]">
            We cover more than 26 cities and not going to stop making others
            happy.
          </p>
        </div>
        <div>
          <Image src={img} alt="img" />
        </div>
        <div className="mt-6">
          {cities.map((e) => (
            <div className="space-x-4.5 flex items-center text-[18px] font-extrabold">
              <div>
                <ChevronRight />
              </div>
              <div>
                <p>{e}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          {cities2.map((e) => (
            <div className="space-x-4.5 flex items-center text-[18px] font-extrabold">
              <div>
                <BsDash />
              </div>
              <div>
                <p>{e}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-[1000px]:w-[49%] flex self-stretch">
        <Contact />
      </div>
    </div>
  );
};

export default Team2;
