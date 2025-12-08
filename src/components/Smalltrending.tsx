import Image from "next/image";
import React from "react";

export default function Smalltrending() {
  return (
    <div className=" py-4  grid grid-cols-3 gap-5">
      <div>
        <div className=" col-span-1 relative w-full aspect-video">
          <Image
            fill
            className=" object-cover object-top w-full h-full"
            alt="image"
            src={"/Chiamaka.jpeg"}
          />
        </div>
      </div>
      <div className=" col-span-2">
        <h6 className=" line-clamp-3 h7 font-semibold">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos
          provident nostrum, numquam neque quaerat eos omnis quis earum optio
          itaque amet saepe et laborum quia animi similique distinctio
          recusandae sit ab hic voluptatibus vero. Deserunt eius ad totam
          consequuntur?{" "}
        </h6>
      </div>
    </div>
  );
}
