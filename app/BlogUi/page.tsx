import React from "react";
import Header2 from "../Service_area/Header2";
import Blog from "./Blog";
import Animation_Up from "../Animation_Up";

const page = () => {
  const typography = {
    h1: "Our Blog",
    p: "Home / Blog ",
  };

  return (
    <div>
      <Animation_Up>
        <Header2 typography={typography} />
      </Animation_Up>
      <Animation_Up>
        <Blog />
      </Animation_Up>
    </div>
  );
};

export default page;
