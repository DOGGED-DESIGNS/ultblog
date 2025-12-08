"use client";
import React, { useEffect, useContext, useState } from "react";
import {
  AppWindow,
  ArrowBigDown,
  Book,
  Car,
  ChevronDown,
  Facebook,
  Instagram,
  LibraryBig,
  LogOut,
  Menu,
  Search,
  StickyNote,
  TextQuote,
  Twitter,
  UsersRound,
  WandIcon,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Caret } from "./svgs";
import { Caret, Ticktok } from "./svgs";
import { Button } from "./ui/button";
import { ContextProvider } from "@/contexts/context";

export default function Adminnav() {
  const { nav, setNav } = useContext(ContextProvider);

  useEffect(() => {
    console.log(nav);
  }, [nav]);

  const [toggle, setToggle] = useState(false);

  const [hover, setHover] = useState(false);
  return (
    <nav className=" flex shadow-sm   relative  justify-between  px-6 bg-white  py-4 border-b-2 border-Binactive/60">
      <div
        onClick={() => setToggle(false)}
        className={cn(
          "fixed block  z-[9] bg-black/40 w-lvw h-lvh top-0 left-0 ",
          {
            "-z-[9]  ": !toggle,
          }
        )}
      />
      <motion.div
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
        }}
        initial={{
          x: "-100%",
        }}
        animate={
          toggle
            ? {
                x: 0,
                position: "fixed",
              }
            : { x: "-100%" }
        }
        className=" absolute z-10 pb-10  top-0 left-0  flex  flex-col  bg-white  w-[300px] pt-10 px-5 h-lvh "
      >
        {/*  mobile nav header */}
        <div className=" mb-10 flex    justify-center   items-center ">
          <div className=" flex-1">
            <h2 className=" text-center"> Logo</h2>
          </div>
          <div className="">
            <X
              onClick={() => setToggle(false)}
              className=" cursor-pointer h-10 w-10 text-BAccent font-bold"
            />
          </div>
        </div>

        {/*  link section */}

        <div className="  flex-1 flex flex-col">
          <Link
            href={"/home"}
            className=" flex gap-2 hover:bg-slate-200 rounded-lg h6 px-2 py-2  font-semibold capitalize border-b "
          >
            <AppWindow className="text-BAccent h-5 w-5" />
            Home
          </Link>
          <Link
            href={"/draft"}
            className=" flex gap-2 hover:bg-slate-200 rounded-lg h6 px-2 py-2  font-semibold capitalize border-b "
          >
            <StickyNote className="text-BAccent h-5 w-5" />
            Draft
          </Link>
          <Link
            href={"/seepost"}
            className=" flex gap-2 hover:bg-slate-200 rounded-lg h6 px-2 py-2  font-semibold capitalize border-b "
          >
            <TextQuote className="text-BAccent h-5 w-5" />
            All Posts
          </Link>
          <Link
            href={"/category"}
            className=" flex gap-2 hover:bg-slate-200 rounded-lg h6 px-2 py-2  font-semibold capitalize border-b "
          >
            <LibraryBig className="text-BAccent h-5 w-5" />
            All Categories
          </Link>
          <Link
            href={"/readers"}
            className=" flex gap-2 hover:bg-slate-200 rounded-lg h6 px-2 py-2  font-semibold capitalize border-b "
          >
            <Book className="text-BAccent h-5 w-5" />
            Readers
          </Link>
          <Link
            href={"/roles"}
            className=" flex gap-2 hover:bg-slate-200 rounded-lg h6 px-2 py-2  font-semibold capitalize border-b "
          >
            <UsersRound className="text-BAccent h-5 w-5" />
            Set Roles
          </Link>

          {/*  */}
          {/* <div className=" mt-auto flex flex-col">
            <h5 className=" h6 uppercase text-center mb-5  ">
              {" "}
              CONNECT WITH US
            </h5>
            <div className="  justify-center  flex gap-6">
              <Facebook className="  h-4 w-4  " fill="#000" />
              <Twitter className="  h-4 w-4  " fill="#000" />
              <Instagram className="  h-4 w-4  " />
              <Youtube className="  h-4 w-4  " />
            </div>
          </div> */}
        </div>
      </motion.div>
      <Menu
        onClick={() => setToggle(true)}
        className=" cursor-pointer w-11 text-BAccent font-bold  "
      />

      <div className=" md:hidden">
        <h1> Logo </h1>
      </div>

      <div className=" flex gap-6">
        <Button>
          {" "}
          <LogOut /> Log_Out{" "}
        </Button>
      </div>
    </nav>
  );
}
