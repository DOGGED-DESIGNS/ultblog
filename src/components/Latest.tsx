import Link from "next/link";
import React from "react";

export default function Latest() {
  return (
    <>
      <Link
        className=" block border-t group   border-Binactive/40   text-black hover:text-black/50     capitalize   line-clamp-2   py-5 px-2"
        href={"#"}
      >
        <p className=" group-hover:text-black/50  transition-all  ease-in-out duration-200  h7 text-xs font-semibold line-clamp-2">
          Beyounce pulled up for kelly Rolland and we&apos;r Obsessed with This
          Friendship
        </p>
      </Link>
    </>
  );
}
