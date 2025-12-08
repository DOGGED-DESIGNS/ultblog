"use client";
import React, { useContext } from "react";
import { ContextProvider } from "@/contexts/context";
import Navbar from "./ui/Navbar";
import Adminnav from "./Adminnav";
import { usePathname } from "next/navigation";

export default function Navtoggle() {
  const { nav } = useContext(ContextProvider);
  const isAdmin = usePathname().startsWith("/admin");
  if (isAdmin) {
    return;
  } else {
    return <Navbar />;
  }
}
