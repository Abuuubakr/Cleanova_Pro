import React from "react";
import Showcase4 from "./Showcase4";
import Making_accurate from "../Making_accurate";
import Our_latestWork from "../About/Our_latestWork";
import Team from "../Service_area/Team";
import Client_Feedback from "../Servicess/Client_Feedback";

const page = () => {
  return (
    <div>
      <Showcase4 />
      <Making_accurate />
      <Our_latestWork />
      <div className="w-[85%] mx-auto mt-25">
        <Team />
      </div>
      <Client_Feedback/>
    </div>
  );
};

export default page;
