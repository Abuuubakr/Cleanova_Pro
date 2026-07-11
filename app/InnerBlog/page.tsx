import React from "react";
import img from "../../public/images/card (2).png";
import img1 from "../../public/images/card (1).png";
import Image from "next/image";
import Animation_Up from "../Animation_Up";

const page = () => {
  const Blogs = [1, 2, 3];

  return (
    <div className="bg-linear-to-b from-[#D2E3F8] to-[#FFFFFF] ">
      <div>
        <div className="w-[85%] mx-auto mt-32.5 ">
          <div>
            <div>
              <p className="mt-3.75 text-[15px]  font-medium text-[#505050]">
                Home / Services / Commervial cleaning
              </p>
            </div>
          </div>
          <div className="mt-7.5 flex justify-between max-[1000px]:flex-col max-[1000px]:space-y-5">
            <div className="min-[1000px]:w-[75%] w-full">
              <Animation_Up>
                <div>
                  <Image src={img} alt="card_2" className="w-full" />
                </div>
                <div className="mt-7.5">
                  <p className="text-[32px] font-extrabold">
                    Best advice for your cleaning
                  </p>
                  <div className="mt-3.75 text-[15px] leading-3.75 font-medium text-[#505050] space-y-5">
                    <p className="font-bold">
                      1. Clean one room, or thing, at a time.
                    </p>
                    <p>
                      f you struggle to stay on track while doing chores,
                      redditor mrsbono2u has a simple suggestion: “Clean one
                      room at a time; otherwise you’ll get too distracted.”
                      This one room rule is a favorite with professional
                      cleaners, as it’s one of the most efficient ways to tackle
                      a home. Speaking of efficiency, this user added, “Don’t
                      put things down; put them away!” Also called the OHIO
                      method (which stands for “only handle it once”), this tip
                      is a game changer that can save tons of time and make for
                      a less cluttered, more orderly space. 
                    </p>
                    <p>
                      2. Let cleaning products sit and work their magic. Nobody
                      wants to work harder than they have to, especially when it
                      comes to scrubbing out the tub, oven, and other grimy
                      areas. Helpful_Corgi5716 dropped a handy hint into the
                      thread, saying “Let the cleaning products sit for a while
                      to actually do their work.” So next time you’re busting
                      buildup, spray your cleaner of choice ahead of time and
                      tackle one or two 10-minute cleaning tasks to save
                      yourself some elbow grease. 
                    </p>
                    <p>
                      3. Use rags instead of paper towels. If you’re new to the
                      debate on whether to use rags versus paper towels for
                      cleaning, let’s preface this by saying that there isn’t a
                      “right” method, and there are times when you may want to
                      reach for a paper towel.
                      However, GlitteringGrocery605 raised a valuable point when
                      they advised redditors to opt for rags over paper towels,
                      observing that they simply work better. The primary reason
                      for this is that rags and cleaning cloths are sturdier,
                      which enables you to press harder.
                    </p>
                    <p>
                      4. Save your old toothbrushes for scrubbing grime from
                      grooves. Northern_Owl_Who chimed in with an upcycling tip,
                      saying, “Save your old toothbrush; they make good
                      scrubbers for those tiny cracks around your faucets.” If
                      you have particularly finicky crannies to clean, you can
                      even bend old toothbrushes using hot water and some pliers
                      into an ergonomically angled tool that makes scrubbing
                      grime from awkward areas even easier. 
                    </p>
                    <p>
                      5. Set a timer for 15 minutes and tackle a cleaning task.
                      Sometimes cleaning tasks require a couple of hours, but
                      oftentimes they can be broken down into bite-size chunks.
                      If you struggle with getting started or feel
                      overwhelmed, time-boxing your cleaning checklist might be
                      the solution. SageBrush83 says, “You can do anything for
                      15 minutes.” This technique isn’t just for small chores,
                      either. “It’s helped me get big jobs done, in lots of
                      little jobs,” they added. Before you know it, this
                      approach could naturally turn into a 20-minute daily
                      cleaning routine that ensures you don’t have to tackle the
                      entire house on a Saturday (yes please). 
                    </p>
                    <p>
                      6. Work your way from top to bottom. To make sure you
                      don’t dirty surfaces you’ve just cleaned, another
                      Reddit user advises starting at the top of rooms and
                      working your way down. This could look like dusting the
                      ceiling corners and fan blades, then moving on to shelves,
                      bookcases, and surfaces, and ending things off with the
                      floor. 
                    </p>
                  </div>
                </div>
              </Animation_Up>
            </div>
            <div className="min-[1000px]:w-[20%] w-full">
              <Animation_Up>
                <div className="mb-3">
                  <p className="text-[24px] font-extrabold">Related blog</p>
                </div>
                <div className="flex flex-col space-y-6.5">
                  {Blogs.map((e) => (
                    <div
                      key={e}
                      className="p-3 rounded-xl bg-[#F4F8FC] space-y-2.5 max-[800px]:space-y-5"
                    >
                      <div>
                        <Image src={img1} alt="card_1" className="w-full" />
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
                  ))}
                </div>
              </Animation_Up>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
