import React from "react";
import Showcase3 from "./Showcase3";
import Professional_Cleaning from "../Professional_Cleaning";
import Our_latestWork from "./Our_latestWork";
import Team2 from "./Team2";
import Client_Feedback from "../Servicess/Client_Feedback";
import Animation_Up from "../Animation_Up";

const page = () => {
  return (
    <div>
      <Animation_Up>
        <Showcase3 />
      </Animation_Up>
      <Animation_Up>
        <Professional_Cleaning />
      </Animation_Up>
      <Animation_Up>
        <Our_latestWork />
      </Animation_Up>
      <Animation_Up>
        <Team2 />
      </Animation_Up>
      <Animation_Up>
        <Client_Feedback />
      </Animation_Up>
    </div>
  );
};

export default page;
