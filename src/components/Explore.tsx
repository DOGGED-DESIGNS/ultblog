import Image from "next/image";
import React from "react";

export default function Explore() {
  return (
    <div className=" py-10 bg-gray-100">
      <h1 className=" mb-8 text-center uppercase text-BAccent  h2  font-extrabold  ">
        {" "}
        Explore
      </h1>

      <div className=" max-w-screen-lg mx-auto grid grid-cols-1 px-24 lg:grid-cols-4 gap-20">
        <div>
          <div className=" relative w-full aspect-square">
            <Image
              src={"/Chiamaka.jpeg"}
              alt="image"
              fill
              className=" z-[3] w-full h-full object-cover object-top"
            />
            <div className=" absolute  w-16   aspect-square bg-BAccent -left-5 -bottom-5" />
          </div>
          <p className=" mt-1 text-right font-bold p2 font-outfit uppercase">
            Feature
          </p>
        </div>
        <div>
          <div className=" relative w-full aspect-square">
            <Image
              src={"/Chiamaka.jpeg"}
              alt="image"
              fill
              className=" z-[3] w-full h-full object-cover object-top"
            />
            <div className=" absolute  w-16   aspect-square bg-BAccent -left-5 -bottom-5" />
          </div>
          <p className=" mt-1 text-right font-bold p2 font-outfit uppercase">
            Feature
          </p>
        </div>
        <div>
          <div className=" relative w-full aspect-square">
            <Image
              src={"/Chiamaka.jpeg"}
              alt="image"
              fill
              className=" z-[3] w-full h-full object-cover object-top"
            />
            <div className=" absolute  w-16   aspect-square bg-BAccent -left-5 -bottom-5" />
          </div>
          <p className=" mt-1 text-right font-bold p2 font-outfit uppercase">
            Feature
          </p>
        </div>
        <div>
          <div className=" relative w-full aspect-square">
            <Image
              src={"/Chiamaka.jpeg"}
              alt="image"
              fill
              className=" z-[3] w-full h-full object-cover object-top"
            />
            <div className=" absolute  w-16   aspect-square bg-BAccent -left-5 -bottom-5" />
          </div>
          <p className=" mt-1 text-right font-bold p2 font-outfit uppercase">
            Feature
          </p>
        </div>
      </div>
    </div>
  );
}
