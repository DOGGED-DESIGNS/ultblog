import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Latest from "./Latest";

function Hero() {
  return (
    <div className="    py-10 mt-10 px-5 justify-center max-w-screen-xl  mx-auto gap-10 grid grid-cols-1 lg:grid-cols-4   md:grid-cols-3  ">
      <div className=" col-span-1 md:order-3 lg:order-1 order-2  ">
        <div className="">
          <h2 className=" justify-center flex items-center  gap-2 h2  uppercase font-outfit  font-extrabold mb-10  text-center">
            <span className=" h-1 block  w-10 bg-BAccent" />
            <TrendingUp className=" h-10 w-10 text-BAccent font-extrabold" />
            Trending
            <span className=" h-1 block  w-10 bg-BAccent" />
          </h2>

          <div className=" flex">
            <div className="  mx-auto gap-2   items-center flex  sm:flex-row md:flex-col ">
              <div className=" md:mx-auto   mt-5 aspect-square  w-[100px] border  md:w-[200px] rounded-full overflow-hidden  relative ">
                <Image
                  alt="image"
                  fill
                  src={"/Chiamaka.jpeg"}
                  className="  w-full h-full object-top   object-cover  "
                />
              </div>
              {/* writeup */}
              <p className="  md:mx-auto    capitalize text-black p text-center line-clamp-2 max-w-[30ch]   mt-4 ">
                Hover around the wourd and see this ugo a sdlasd this is what
                how sould i have to this
              </p>
            </div>
          </div>
          <div className=" flex">
            <div className="  mx-auto gap-2   items-center flex  sm:flex-row md:flex-col ">
              <div className=" md:mx-auto   mt-5 aspect-square  w-[100px] border  md:w-[200px] rounded-full overflow-hidden  relative ">
                <Image
                  alt="image"
                  fill
                  src={"/Chiamaka.jpeg"}
                  className="  w-full h-full object-top   object-cover  "
                />
              </div>
              {/* writeup */}
              <p className="  md:mx-auto    capitalize text-black p text-center line-clamp-2 max-w-[30ch]   mt-4 ">
                Hover around the wourd and see this ugo a sdlasd this is what
                how sould i have to this
              </p>
            </div>
          </div>
          <div className=" flex">
            <div className="  mx-auto gap-2   items-center flex  sm:flex-row md:flex-col ">
              <div className=" md:mx-auto   mt-5 aspect-square  w-[100px] border  md:w-[200px] rounded-full overflow-hidden  relative ">
                <Image
                  alt="image"
                  fill
                  src={"/Chiamaka.jpeg"}
                  className="  w-full h-full object-top   object-cover  "
                />
              </div>
              {/* writeup */}
              <p className="  md:mx-auto    capitalize text-black p text-center line-clamp-2 max-w-[30ch]   mt-4 ">
                Hover around the wourd and see this ugo a sdlasd this is what
                how sould i have to this
              </p>
            </div>
          </div>

          {/* second post */}
        </div>
      </div>
      <div className=" md:col-span-2 md:order-1 col-span-1 order-1 lg:col-span-2 lg:order-2    ">
        <div className=" overflow-hidden relative w-full h-[600px]  ">
          <Image
            fill
            className=" w-full object-top  object-cover h-full"
            src={"/Chiamaka.jpeg"}
            alt="image"
          />
          <div className=" flex from absolute h-1/2 bottom-0 left-0 inset-x-0 p-4 bg-gradient-to-t  from-slate-900  ">
            <h1 className=" mt-auto  h1 text-white line-clamp-2 ">
              {" "}
              Chiamaka Nnadozie Wins 2025 CAF Women&apos;s Goalkeeper of the
              Year Again!
            </h1>
          </div>
        </div>
        {/* this is hakimi post section */}
        <div>
          <div className=" overflow-hidden relative  h-[374px] w-full">
            <Image
              alt="image"
              fill
              className="object-cover object-top mt-10 w-full h-full"
              src={"/Achraf.jpeg"}
            />
          </div>
          <h1 className=" mt-5 h3 text-xl font-bold capitalize">
            {" "}
            Achraf Hakimi Wins 2025 CAF Men&apos;s African Player of the year
          </h1>
        </div>
      </div>
      <div className=" self-start  sticky top-0   col-span-1 order-3 md:order-2 ">
        <div>
          <h2 className="  justify-center flex items-center gap-2 h1  uppercase font-outfit  font-extrabold mb-10  text-center">
            <span className=" h-1 block  w-10 bg-BAccent" />
            Latest <span className=" h-1 block  w-10 bg-BAccent" />
          </h2>
        </div>
        <div>
          <Latest />
        </div>
      </div>
    </div>
  );
}

export default Hero;
