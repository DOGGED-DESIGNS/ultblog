"use client";
import React, { useState } from "react";
import Smallvideo from "./Smallvideo";
import { AnimatePresence, motion } from "motion/react";
import Smalltrending from "./Smalltrending";

export default function TrendingandVideo() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className=" relative flex  w-full">
        <div
          onClick={() => setToggle(false)}
          className=" cursor-pointer h2 flex-1 font-bold   text-center"
        >
          {" "}
          Trending{" "}
        </div>
        <div
          onClick={() => setToggle(true)}
          className=" cursor-pointer  h2 flex-1 font-bold text-center "
        >
          {" "}
          Videos{" "}
        </div>

        {/* mover */}

        <motion.div
          initial={{
            left: 0,
          }}
          animate={
            toggle
              ? {
                  left: "50%",
                }
              : {
                  left: 0,
                }
          }
          className=" left-[0%] px-12 w-1/2 top-[70%]  absolute "
        >
          <span className=" block h-1 bg-BAccent " />
        </motion.div>
      </div>

      {/* togging */}

      <AnimatePresence mode="wait">
        {toggle ? (
          <motion.div
            key={"samll"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <Smallvideo />
            <Smallvideo />
            <Smallvideo />
            <Smallvideo />
          </motion.div>
        ) : (
          <motion.div
            key={"trending"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <Smalltrending />
            <Smalltrending />
            <Smalltrending />
            <Smalltrending />
            <Smalltrending />
            <Smalltrending />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
