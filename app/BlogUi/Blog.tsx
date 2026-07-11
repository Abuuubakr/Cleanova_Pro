import React from "react";
import img from "../../public/images/card (1).png";
import Image from "next/image";
import Link from "next/link";
import Animation_Up from "../Animation_Up";

const Blog = () => {
  const Blogs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <Animation_Up>
        <div className="w-[85%] m-auto mt-13.75 pb-31.25 grid grid-cols-4 max-[1000px]:grid-cols-2 max-[800px]:grid-cols-1 gap-9">
          {Blogs.map((e) => (
            <Link key={e} href={"./InnerBlog"} className="cursor-pointer">
              <div className="p-3 rounded-xl bg-[#F4F8FC] space-y-2.5 max-[800px]:space-y-5">
                <div>
                  <Image src={img} alt="card_1" className="w-full" />
                </div>
                <div>
                  <p className="text-[18px] font-extrabold leading-5">
                    Best advice for your cleaning
                  </p>
                  <p className="mt-3.75 text-[15px] leading-4.5 font-medium text-[#505050]">
                    Short label or description of service. Short label or
                    description of service.Short label or description of
                    service.
                  </p>
                </div>
                <div>
                  <button className="w-full bg-white text-[18px] font-extrabold py-0.5 cursor-pointer">
                    Read more
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Animation_Up>
    </div>
  );
};

export default Blog;
