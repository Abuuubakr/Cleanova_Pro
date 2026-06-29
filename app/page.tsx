import Image from "next/image";
import Showcase from "./Showcase";
import Professional_Cleaning from "./Professional_Cleaning";
import Making_accurate from "./Making_accurate";
import Get_started from "./Get_started";
import Faq from "./Faq";
import Animation_Up from "./Animation_Up";

export default function Home() {
  return (
    <div className="font-[Inter]">
      <Animation_Up>
        <Showcase />
      </Animation_Up>
      <Animation_Up>
        <Professional_Cleaning />
      </Animation_Up>
      <Animation_Up>
        <Making_accurate />
      </Animation_Up>
      <Animation_Up>
        <Get_started />
      </Animation_Up>
      <Animation_Up>
        <Faq />
      </Animation_Up>
    </div>
  );
}
