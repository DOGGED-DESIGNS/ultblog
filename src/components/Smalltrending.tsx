import Image from "next/image";
import React from "react";

export default function Smalltrending() {
  return (
    <div className=" py-4 grid grid-cols-3 gap-5">
      <div className=" col-span-1 relative w-full aspect-square">
        <Image
          fill
          className=" object-cover object-top w-full h-full"
          alt="image"
          src={"/Chiamaka.jpeg"}
        />
      </div>
      <div className=" col-span-2">
        <h6 className=" line-clamp-4 h7  font-semibold">Trending me and</h6>
      </div>
    </div>
  );
}
