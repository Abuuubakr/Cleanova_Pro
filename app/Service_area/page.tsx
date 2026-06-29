import React from "react";
import Header2 from "./Header2";
import Reliable_affordable from "./Reliable_affordable";
import Get_started from "../Get_started";
import Client_Feedback from "../Servicess/Client_Feedback";
import Animation_Up from "../Animation_Up";

const page = () => {
  const typography = {
    h1: "Commercial",
    p: "Home / Services / Commervial cleaning",
  };

  return (
    <div>
      <Animation_Up>
        <Header2 typography={typography} />
      </Animation_Up>
      <Animation_Up>
        <Reliable_affordable />
      </Animation_Up>
      <Animation_Up>
        <Get_started />
      </Animation_Up>
      <Animation_Up>
        <Client_Feedback />
      </Animation_Up>
    </div>
  );
};

export default page;
