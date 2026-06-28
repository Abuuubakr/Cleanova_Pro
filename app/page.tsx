import Image from "next/image";
import Showcase from "./Showcase";
import Professional_Cleaning from "./Professional_Cleaning";
import Making_accurate from "./Making_accurate";
import Get_started from "./Get_started";
import Faq from "./Faq";

export default function Home() {
  return (
    <div className="font-[Inter]">
      <Showcase/>
      <Professional_Cleaning/>
      <Making_accurate/>
      <Get_started/>
      <Faq/>
    </div>
  );
}
