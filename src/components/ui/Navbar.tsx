"use client";
import React, { useState } from "react";
import {
  ArrowBigDown,
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
  Search,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Caret, Ticktok } from "../svgs";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const [hover, setHover] = useState(false);
  return (
    <nav className=" flex shadow-sm   relative  justify-between  px-6 bg-white  py-6 border-b-2 border-Binactive/60">
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
            href={"#"}
            className=" h2 px-2 py-4  font-medium uppercase border-b "
          >
            {" "}
            NEWS{" "}
          </Link>
          <Link
            href={"#"}
            className=" h2 px-2 py-4  font-medium uppercase border-b "
          >
            {" "}
            NEWS{" "}
          </Link>
          <Link
            href={"#"}
            className=" h2 px-2 py-4  font-medium uppercase border-b "
          >
            {" "}
            NEWS{" "}
          </Link>

          {/*  */}
          <div className=" mt-auto flex flex-col">
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
          </div>
        </div>
      </motion.div>
      <Menu
        onClick={() => setToggle(true)}
        className=" cursor-pointer w-11 text-BAccent font-bold  "
      />

      <div className=" md:flex hidden gap-4  ">
        <Link
          className=" relative  after:contents-[''] after:left-0 after:w-[100%] after:top-[100%]  hover:after:bg-BAccent after:h-1 after:absolute p2  font-bold  uppercase "
          href={"#"}
        >
          {" "}
          Relationships
        </Link>
        <Link
          className=" relative  after:contents-[''] after:left-0 after:w-[100%] after:top-[100%]  hover:after:bg-BAccent after:h-1 after:absolute p2  font-bold  uppercase "
          href={"#"}
        >
          {" "}
          Weddings
        </Link>
        <Link
          className=" relative  after:contents-[''] after:left-0 after:w-[100%] after:top-[100%]  hover:after:bg-BAccent after:h-1 after:absolute p2  font-bold  uppercase "
          href={"#"}
        >
          {" "}
          Style
        </Link>
        <Link
          className=" relative  after:contents-[''] after:left-0 after:w-[100%] after:top-[100%]  hover:after:bg-BAccent after:h-1 after:absolute p2  font-bold  uppercase "
          href={"#"}
        >
          {" "}
          Music
        </Link>
        <Link
          className=" relative  after:contents-[''] after:left-0 after:w-[100%] after:top-[100%]  hover:after:bg-BAccent after:h-1 after:absolute p2  font-bold  uppercase "
          href={"#"}
        >
          {" "}
          Nollywood
        </Link>
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className=" gap-1 flex flex-start items-center relative after:contents-[''] after:left-0 after:w-[100%] after:top-[100%]  hover:after:bg-BAccent after:h-1 after:absolute p2 font-bold  uppercase   "
        >
          {" "}
          more
          <Caret className="    rotate-90 fill-current text-BAccent h-2 w-2" />
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  y: 10,
                  opacity: 0,
                }}
                className=" z-[9] bg-white top-[140%] left-0 absolute "
              >
                <Link
                  href={"#"}
                  className=" block truncate   line-clamp-1  max-w-[20ch]  py-3  hover:bg-Binactive/20 px-3  font-medium uppercases border-b border-b-Binactive/50 "
                >
                  HOW TO DO THIS and how ti si shwt i wanted
                  sdsfsdfsdfsdfsdssafd
                </Link>
                <Link
                  href={"#"}
                  className=" block truncate   line-clamp-1  max-w-[20ch]  py-3  hover:bg-Binactive/20 px-3 h3 font-medium uppercases border-b border-b-Binactive/50 "
                >
                  HOW TO DO THIS and how ti si shwt i wanted
                  sdsfsdfsdfsdfsdssafd
                </Link>
                <Link
                  href={"#"}
                  className=" block truncate   line-clamp-1  max-w-[20ch]  py-3  hover:bg-Binactive/20 px-3 h3 font-medium uppercases border-b border-b-Binactive/50 "
                >
                  HOW TO DO THIS and how ti si shwt i wanted
                  sdsfsdfsdfsdfsdssafd
                </Link>
                <Link
                  href={"#"}
                  className=" block truncate   line-clamp-1  max-w-[20ch]  py-3  hover:bg-Binactive/20 px-3 h3 font-medium uppercases border-b border-b-Binactive/50 "
                >
                  HOW TO DO THIS and how ti si shwt i wanted
                  sdsfsdfsdfsdfsdssafd
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className=" md:hidden">
        <h1>logo</h1>
      </div>

      <div className=" flex gap-6">
        <Search className=" h-5 w-5" />
        <Facebook className=" h-5 w-5" fill="#000" />
        <Twitter className=" h-5 w-5" fill="#000" />
        <Instagram className=" h-5 w-5" />
        <Youtube className=" h-5 w-5" />
      </div>
    </nav>
  );
}
