import Image from "next/image";
import React from "react";

export default function Smallvideo() {
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
        <h6 className=" line-clamp-4 h7  font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          laboriosam labore dolorem mollitia! Temporibus ut quo corporis vel,
          aut quisquam provident quae ex optio unde iste! Facere voluptatem
          pariatur voluptas odit. Fugiat cum maxime assumenda facilis repellat,
          officia excepturi consequatur impedit velit dolor iste praesentium
          culpa, at officiis quidem odio.
        </h6>
      </div>
    </div>
  );
}
