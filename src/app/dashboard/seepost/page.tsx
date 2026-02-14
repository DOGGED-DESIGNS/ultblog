// import { Seeall } from "@/components/Seeall";

import { Seeall } from "@/components/Seeall";
// import Allposts from "@/components/tables/Allposts";
import MaxWrapper from "@/components/ui/MaxWrapper";
import React from "react";
import Poststable from "./Poststable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className=" max-w-screen-xl mt-10 w-full px-5 mx-auto ">
        <Poststable />
        <Link href={"/makeposts"} className=" mt-5 flex">
          {" "}
          <Button className="mx-auto"> Make Post</Button>{" "}
        </Link>
        {/* <Seeall /> */}
      </div>
    </div>
  );
}
