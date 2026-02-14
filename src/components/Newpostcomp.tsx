import Image from "next/image";
import React from "react";

export default function Newpostcomp() {
  return (
    <div className="w-full border-t py-5 grid gap-6 grid-cols-2 ">
      <div className=" col-span-1 relative w-full  aspect-video">
        <Image
          fill
          src={"/Chiamaka.jpeg"}
          alt="image"
          className=" w-full h-full object-cover object-top"
        />
      </div>

      <div className=" col-span-1">
        <h6 className=" h8 tracking-wide mb-2 font-bold   uppercase font-outfit text-slate-400">
          inspired
        </h6>
        <h2 className=" p font-bold line-clamp-3 capitalize  ">
          Meet Jeniffer Mairo, the CEO championing African Creators and Gender
          Equitable Stories{" "}
        </h2>

        <p className=" md:block hidden line-clamp-4clamp-4   text-base  font-outfit font-light text-zinc-800">
          {" "}
          Jennifer Mairo leads joy,inc to champion African storytelling and
          gender equitable narratives empowering creatives across film, digital,
          and media setor
        </p>
      </div>
    </div>
  );
}
