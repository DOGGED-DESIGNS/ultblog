import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Maylike() {
  return (
    <div className=" w-full mt-10">
      <h1 className=" gap-2 font-extrabold  flex items-center h2">
        YOU MAY LIKE
        <span className=" block flex-1 h-[2px]  bg-BAccent" />
      </h1>

      <div className=" gap-5 mt-10 grid grid-cols-1  lg:grid-cols-3  ">
        <Link className=" flex lg:block gap-2 group" href={"#"}>
          <div className="    after:z-10 after:contents-[''] after:absolute after:inset-0  after:transition-all after:duration-300 relative min-w-24 lg:aspect-video aspect-square after:group-hover:bg-black/20 ">
            <Image
              fill
              alt="image"
              src={"/Chiamaka.jpeg"}
              className=" w-full h-full object-cover object-top "
            />
          </div>
          <p className=" group-hover:text-slate-400 transition-all duration-300 font-bold mt-2 h7">
            Twenty Years On Stage: Yvonne Jegede on Fame, Purpose and Giving
            Back
          </p>
        </Link>
        <Link className=" flex lg:block gap-2 group" href={"#"}>
          <div className="    after:z-10 after:contents-[''] after:absolute after:inset-0  after:transition-all after:duration-300 relative min-w-24 lg:aspect-video aspect-square after:group-hover:bg-black/20 ">
            <Image
              fill
              alt="image"
              src={"/Chiamaka.jpeg"}
              className=" w-full h-full object-cover object-top "
            />
          </div>
          <p className=" group-hover:text-slate-400 transition-all duration-300 font-bold mt-2 h7">
            Twenty Years On Stage: Yvonne Jegede on Fame, Purpose and Giving
            Back
          </p>
        </Link>
        <Link className=" flex lg:block gap-2 group" href={"#"}>
          <div className="    after:z-10 after:contents-[''] after:absolute after:inset-0  after:transition-all after:duration-300 relative min-w-24 lg:aspect-video aspect-square after:group-hover:bg-black/20 ">
            <Image
              fill
              alt="image"
              src={"/Chiamaka.jpeg"}
              className=" w-full h-full object-cover object-top "
            />
          </div>
          <p className=" group-hover:text-slate-400 transition-all duration-300 font-bold mt-2 h7">
            Twenty Years On Stage: Yvonne Jegede on Fame, Purpose and Giving
            Back
          </p>
        </Link>
      </div>
    </div>
  );
}
