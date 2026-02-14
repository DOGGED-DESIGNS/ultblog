import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function More() {
  return (
    <div className=" bg-BAccent">
      <div className=" mx-auto  gap-20 max-w-screen-xl py-10 px-10 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 ">
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
          <div className=" flex">
            <Link
              href={"#"}
              className=" gap-2 text-center  mt-3 mx-auto flex items-center text-white font-bold uppercase h8"
            >
              {" "}
              MORE EVENTS <ArrowRight />{" "}
            </Link>
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
          <div className=" flex">
            <Link
              href={"#"}
              className=" gap-2 text-center  mt-3 mx-auto flex items-center text-white font-bold uppercase h8"
            >
              {" "}
              MORE EVENTS <ArrowRight />{" "}
            </Link>
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
          <div className=" flex">
            <Link
              href={"#"}
              className=" gap-2 text-center  mt-3 mx-auto flex items-center text-white font-bold uppercase h8"
            >
              {" "}
              MORE EVENTS <ArrowRight />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
