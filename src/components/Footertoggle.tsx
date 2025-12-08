"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";

import { ContextProvider } from "@/contexts/context";
import Footer from "./Footer";

export default function Footertoggle() {
  const isAdmin = usePathname().startsWith("/admin");
  const { nav } = useContext(ContextProvider);

  if (isAdmin) {
    return;
  } else {
    return <Footer />;
  }
}
