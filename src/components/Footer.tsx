"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Ticktok,
  Twitter,
  Whatsapp,
  Youtube,
} from "./svgs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" flex  px-5 border   flex-col  pt-20 pb-12 bg-white ">
      <div className=" mx-auto mb-8 flex gap-5 ">
        <Link
          href={"#"}
          className=" group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#1877F2]"
        >
          <Facebook className=" group-hover:text-white transition-all duration-300 ease-in-ou fill-current h-5 w-5" />
        </Link>
        {/* twiter */}
        <Link
          href={"#"}
          className=" group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#1DA1F2]"
        >
          <Twitter className=" group-hover:text-white transition-all duration-300 ease-in-ou fill-current h-5 w-5" />
        </Link>
        {/* pinterstes */}
        <Link
          href={"#"}
          className=" group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#E60023]"
        >
          <Pinterest className=" group-hover:text-white transition-all duration-300 ease-in-ou fill-current h-5 w-5" />
        </Link>
        {/* instagram */}
        <Link
          href={"#"}
          className=" p-2 rounded-full transition-all duration-300 ease-in-out group bg-gradient-to-tr  hover:from-[#F58529]  hover:via-[#DD2A7B] hover:to-[#515BD4] "
        >
          <Instagram className=" group-hover:text-white transition-all duration-300 ease-in-out fill-current h-5 w-5" />
        </Link>

        <Link
          href={"#"}
          className=" group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#FF0000]"
        >
          <Youtube className=" group-hover:text-white transition-all duration-300 ease-in-out fill-current h-5 w-5" />
        </Link>
        {/* whatsapp */}
        <Link
          href={"#"}
          className=" group p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#25D366]"
        >
          <Whatsapp className=" group-hover:text-white transition-all duration-300 ease-in-out fill-current h-5 w-5" />
        </Link>

        <Link
          href={"#"}
          className=" group p-2 rounded-full transition-all duration-300 ease-in-out  bg-gradient-to-r hover:from-[#25F4EE] hover:via-black hover:to-[#FF0050]"
        >
          <Ticktok className=" group-hover:text-white transition-all duration-300 ease-in-out fill-current h-5 w-5" />
        </Link>
      </div>

      {/* links */}
      <div className=" mt-5 mx-auto flex-wrap justify-center  space-x-5 flex gap-1 ">
        <Link href={"#"} className="h6  uppercase">
          {" "}
          HOME
        </Link>
        <Link href={"#"} className="h6  whitespace-nowrap  uppercase">
          {" "}
          ABOUT US
        </Link>
        <Link href={"#"} className="h6    uppercase">
          TEAM
        </Link>
        <Link href={"#"} className="h6 whitespace-nowrap       uppercase">
          TERMS AND CONDITIONS
        </Link>
        <Link href={"#"} className="h6 whitespace-nowrap uppercase">
          PRIVACY POLICY
        </Link>
        <Link href={"#"} className="h6 whitespace-nowrap  uppercase">
          COPYRIGHT
        </Link>
      </div>

      <div className=" max-w-screen-xl mx-auto w-full h-[1px] mt-3 bg-slate-500 " />

      <div className="    mt-8 w-full   max-w-screen-xl mx-auto">
        <div className="  items-center gap-10 flex">
          <p className=" h8  uppercase font-extrabold  ">
            &copy;2025 all right reserved{" "}
          </p>
          <p className=" mx-auto flex-1 text-center max-w-[50ch] line-clamp-2 h6 font-light">
            DoggedNaija is not responsible for the content of external sites and
            news culled therefrom
          </p>
          <div className=" ml-auto">Logo</div>
        </div>
      </div>
    </div>
  );
}
