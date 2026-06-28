import React from "react";

type textType  = {
    h1 : string,
    p : string
}

type typographyType =  {
    typography : textType
}

const Header2 = ({ typography } : typographyType) => {
  return (
    <div
      className="pt-40 pb-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Rectangle 11.png')" }}
    >
      <div className="w-[85%] m-auto">
        <div className="text-white">
          <p className="text-[32px] font-extrabold">{typography.h1}</p>
          <p className="text-[15px] font-medium">
            {typography.p}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header2;
