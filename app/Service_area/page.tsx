import React from "react";
import Header2 from "./Header2";
import Reliable_affordable from "./Reliable_affordable";
import Get_started from "../Get_started";
import Client_Feedback from "../Servicess/Client_Feedback";

const page = () => {

    const typography = {
        h1  : "Commercial",
        p : "Home / Services / Commervial cleaning"
    }

  return (
    <div>
        <Header2 typography={typography}/>
        <Reliable_affordable/>
        <Get_started/>
        <Client_Feedback/>
    </div>
  );
};

export default page;
