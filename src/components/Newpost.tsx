import React from "react";
import Newpostcomp from "./Newpostcomp";
import Smalltrending from "./Smalltrending";
import TrendingandVideo from "./TrendingandVideo";
import Latest from "./Latest";
import { Button } from "./ui/button";
import { Loader, Loader2 } from "lucide-react";

export default function Newpost() {
  return (
    <div className=" max-w-screen-xl px-10 mx-auto py-10">
      <h1 className=" mt-16 uppercase mb-16 gap-4 text-center flex items-center h1 font-outfit font-extrabold">
        <span className=" h-1 bg-BAccent flex-1" />
        New Posts
        <span className=" h-1 bg-BAccent flex-1" />
      </h1>

      <div className=" gap-20 grid grid-cols-1  lg:grid-cols-3">
        <div className="  lg:col-span-2">
          <Newpostcomp />
          <Newpostcomp />
          <Newpostcomp />
          <Newpostcomp />
          <Newpostcomp />
          <div className="  flex mt-4">
            <Button
              className=" mx-auto p2 font-bold"
              variant={"default"}
              size={"lg"}
            >
              <Loader className=" animate-spin" />
              MORE POSTS
            </Button>
          </div>
        </div>
        <div className=" w-full lg:grid-cols-1  ">
          <div>
            <TrendingandVideo />

            {/* new post */}

            <h1 className=" mt-5 uppercase mb-10 gap-4 text-center flex items-center h2 font-outfit font-extrabold">
              <span className=" h-1 bg-BAccent flex-1" />
              Recent Posts
              <span className=" h-1 bg-BAccent flex-1" />
            </h1>

            {/* this the latest post */}
            <Latest />
            <Latest />
            <Latest />
            <Latest />
            <Latest />
            <Latest />
          </div>
        </div>
      </div>
    </div>
  );
}
