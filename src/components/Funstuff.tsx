"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Caret } from "./svgs";

export default function Funstuff() {
  return (
    <div className=" px-5  mt-10 bg-zinc-200 py-10 ">
      <h2 className=" h1 font-outfit font-bold text-center ">
        {" "}
        NEED MORE FUN STUFF{" "}
      </h2>
      <p className=" text-center mb-8 p2 text-BAccent ">
        {" "}
        Checkout these stories from out network{" "}
      </p>

      <div className=" mx-auto grid grid-cols-3 gap-10 mt-8 max-w-screen-lg">
        <div className=" bg-white">
          <div className=" relative w-full aspect-[4/5]">
            <Image
              alt="image"
              src={"/Chiamaka.jpeg"}
              fill
              className=" w-full h-full object-contain object-top"
            />
            <div className=" text-white absolute top-full left-1/2 -translate-y-1/2  -translate-x-1/2 bg-BAccent font-extrabold  p-1 h8 uppercase  ">
              {" "}
              Dogged Style{" "}
            </div>
          </div>
          <div className=" bg-white p-5">
            <p className="   text-slate-800 h7 font-semibold text-center  capitalize ">
              Should you Buy Beauty Dupes? Here&apos;s Our Breakdown
            </p>
            <p className=" flex items-center h8 justify-center  text-center uppercase font-bold mt-5">
              TAKE ME THERE
              <Caret className=" text-xs h-2 w-2 fill-current text-BAccent" />{" "}
            </p>
          </div>
        </div>
        <div className="bg-white"></div>
        <div className=" bg-white">
          <div className=" relative w-full aspect-[4/5]">
            <Image
              alt="image"
              src={"/Chiamaka.jpeg"}
              fill
              className=" w-full h-full object-contain object-top"
            />
            <div className=" text-white absolute top-full left-1/2 -translate-y-1/2  -translate-x-1/2 bg-BAccent font-extrabold  p-1 h8 uppercase  ">
              {" "}
              Dogged Style{" "}
            </div>
          </div>
          <div className=" bg-white p-5">
            <p className="   text-slate-800 h7 font-semibold text-center  capitalize ">
              Should you Buy Beauty Dupes? Here&apos;s Our Breakdown
            </p>
            <p className=" flex items-center h8 justify-center  text-center uppercase font-bold mt-5">
              TAKE ME THERE
              <Caret className=" text-xs h-2 w-2 fill-current text-BAccent" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
