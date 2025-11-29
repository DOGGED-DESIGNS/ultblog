"use client";
import { Facebook, Mail, Pinterest, Twitter } from "@/components/svgs";
import TrendingandVideo from "@/components/TrendingandVideo";
import MaxWrapper from "@/components/ui/MaxWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <MaxWrapper>
      <div className=" max-w-screen-xl  gap-10  grid grid-cols-3 py-12 px-5 w-full mx-auto">
        <div className=" col-span-2">
          <div className="  inline-block -skew-x-12 bg-BAccent p-1 px-5 mr-auto ">
            <p className=" font-bold p2 uppercase text-white  "> career </p>
          </div>
          <h1 className="mt-2 capitalize  h1extra ">
            {" "}
            Bella Disu Ignites a Bold New Message at TEDx Ikoyi with{" "}
            {`"Say Yes Now"`}{" "}
          </h1>
          {/* author and publish data */}
          <div className=" mt-10 flex gap-4 items-center ">
            <div className=" relative  w-12 aspect-square rounded-full overflow-hidden">
              {" "}
              <Image
                src={"/Chiamaka.jpeg"}
                alt="img"
                fill
                className=" w-full h-full object-cover object-top"
              />{" "}
            </div>

            {/* write up
             */}
            <div>
              <p className=" capitalize p2  text-slate-400">
                Published 6 days ago on Nobember 22,2025 <br /> by{" "}
                <span className=" font-extrabold text-black ">
                  {" "}
                  DoggedBlog.com{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          {/* socals */}

          <div className=" mt-12 w-full mx-auto gap-4 flex  max-w-screen-sm ">
            <Link
              className=" text-center bg-facebook rounded-md py-1 flex-1"
              href={"#"}
            >
              <Facebook className=" fill-current mx-auto text-white w-5 h-5" />
            </Link>
            <Link className=" rounded-md py-1  bg-twitter flex-1" href={"#"}>
              <Twitter className=" mx-auto w-5 h-5 fill-current text-white " />
            </Link>
            <Link className=" rounded-md py-1  bg-pinterest flex-1" href={"#"}>
              <Pinterest className=" mx-auto w-5 h-5 fill-current text-white " />
            </Link>
            <Link className=" rounded-md py-1   bg-gray-800 flex-1" href={"#"}>
              <Mail className=" mx-auto w-5 h-5 fill-current text-white " />
            </Link>
          </div>

          {/* note section
           */}

          <div className=" py-4">
            this is where the main contentes cones dynamic contents
          </div>
          <div>
            <hr className="   border-1 border-gray-300   mt-5" />
            <h2 className=" h2 font-extrabold italic ">
              This content has been published for free as part of
              BellaNaija.com‘s commitment to youth, education, healthcare, and
              community development as part of our corporate social
              responsibility program
            </h2>
          </div>
          {/* end of note */}
          {/* beginning of socials */}

          <div className=" mt-12 w-full mx-auto gap-4 flex  max-w-screen-sm ">
            <Link
              className=" text-center bg-facebook rounded-md py-1 flex-1"
              href={"#"}
            >
              <Facebook className=" fill-current mx-auto text-white w-5 h-5" />
            </Link>
            <Link className=" rounded-md py-1  bg-twitter flex-1" href={"#"}>
              <Twitter className=" mx-auto w-5 h-5 fill-current text-white " />
            </Link>
            <Link className=" rounded-md py-1  bg-pinterest flex-1" href={"#"}>
              <Pinterest className=" mx-auto w-5 h-5 fill-current text-white " />
            </Link>
            <Link className=" rounded-md py-1   bg-gray-800 flex-1" href={"#"}>
              <Mail className=" mx-auto w-5 h-5 fill-current text-white " />
            </Link>
          </div>

          {/* related topics */}
          <p className=" mt-8  flex-wrap flex gap-2 h8 uppercase  font-extrabold ">
            RELATED TOPICS:
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #nigerian bottling company (nbc) ltd{" "}
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #premium spirit brands.
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #women in management
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #coke zero
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #fanta
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #women in management
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #coke zero
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #fanta
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #women in management
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #coke zero
            </Link>
            <Link
              href={"#"}
              className=" hover:text-gray-800 transition-all duration-300  text-gray-400"
            >
              #fanta
            </Link>
          </p>

          {/* dont miss and upnext section
          
          */}
          {/* dont miss */}
          <div className=" mt-5 gap-10 flex">
            <Link href={"#"} className=" group flex-1">
              <div className="h3 line-clamp-3 items-center gap-2 flex ">
                <ChevronLeft className=" shrink-0 h-10 text-gray-400 w-10 " />
                <div>
                  <p className=" h6 font-bold  uppercase text-BAccent">
                    dont miss
                  </p>

                  <h2 className=" group-hover:text-gray-400 transition-all duration-300 capitalize font-bold text-gray-700 p mt-2 line-clamp-3 flex-1">
                    Nigerian Bottling company reinforces commitment to
                    women&apos;s empowerment at 2025 WIMBIC Annual Conference
                  </h2>
                </div>
              </div>
            </Link>
            {/* up next */}

            <Link href={"#"} className=" group flex-1">
              <div className="h3 line-clamp-3 items-center gap-2 flex ">
                <div>
                  <p className=" h6 font-bold  uppercase text-BAccent">
                    UP NEXT
                  </p>

                  <h2 className=" group-hover:text-gray-400 transition-all duration-300 capitalize font-bold text-gray-700 p mt-2 line-clamp-3 flex-1">
                    Nigerian Bottling company reinforces commitment to
                    women&apos;s empowerment at 2025 WIMBIC Annual Conference
                  </h2>
                </div>
                <ChevronRight className=" shrink-0 h-10 text-gray-400 w-10 " />
              </div>
            </Link>
          </div>
        </div>
        <div className=" col-span-1">
          <TrendingandVideo />
        </div>
      </div>
    </MaxWrapper>
  );
}
