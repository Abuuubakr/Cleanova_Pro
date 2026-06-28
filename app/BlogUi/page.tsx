import React from "react";
import Header2 from "../Service_area/Header2";
import Blog from "./Blog";

const page = () => {
  const typography = {
    h1: "Our Blog",
    p: "Home / Blog ",
  };

  return (
    <div>
      <Header2 typography={typography}/>
      <Blog/>
    </div>
  );
};

export default page;
