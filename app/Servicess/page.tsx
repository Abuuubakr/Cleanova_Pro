import React from "react";
import Showcase2 from "./Showcase2";
import List_of from "./List_of";
import Get_started from "../Get_started";
import Client_Feedback from "./Client_Feedback";
import Animation_Up from "../Animation_Up";

const page = () => {
  return (
    <div>
      <Animation_Up>
        <Showcase2 />
      </Animation_Up>
      <Animation_Up>
        <List_of />
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
