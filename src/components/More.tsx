import Image from "next/image";
import React from "react";

export default function More() {
  return (
    <div className=" bg-BAccent">
      <div className=" mx-auto  gap-20 max-w-screen-xl py-10 px-10 grid grid-cols-3 ">
        <div className="">
          <h1 className=" uppercase mb-10 h2 font-outfit font-extrabold text-white text-center">
            {" "}
            Sweep spots{" "}
          </h1>
          <div className=" overflow-hidden relative  w-full aspect-square">
            <Image
              fill
              className="object-cover w-full h-full object-top"
              alt=" image"
              src={"/Chiamaka.jpeg"}
            />
          </div>
          <div className=" bg-white p-4">
            <p className=" p font-semibold text-center line-clamp-2 ">
              {" "}
              Beyounce Pulled Up for Kelly Rowland and Wer&apos;re obsessed with
              thie friendship{" "}
            </p>
          </div>
        </div>
        <div className="">
          <h1 className=" uppercase mb-10 h2 font-outfit font-extrabold text-white text-center">
            {" "}
            Sweep spots{" "}
          </h1>
          <div className=" relative  w-full aspect-square">
            <Image
              fill
              className="object-cover w-full h-full object-top"
              alt=" image"
              src={"/Chiamaka.jpeg"}
            />
          </div>
          <div className=" bg-white p-4">
            <p className=" p font-semibold text-center line-clamp-2 ">
              {" "}
              Beyounce Pulled Up for Kelly Rowland and Wer&apos;re obsessed with
              thie friendship{" "}
            </p>
          </div>
        </div>
        <div className="">
          <h1 className=" uppercase mb-10 h2 font-outfit font-extrabold text-white text-center">
            {" "}
            Sweep spots{" "}
          </h1>
          <div className=" relative w-full aspect-square">
            <Image
              fill
              className=" overflow-hidden object-cover w-full h-full object-top"
              alt=" image"
              src={"/Chiamaka.jpeg"}
            />
          </div>
          <div className=" bg-white p-4">
            <p className=" p font-semibold text-center line-clamp-2 ">
              {" "}
              Beyounce Pulled Up for Kelly Rowland and Wer&apos;re obsessed with
              thie friendship{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
