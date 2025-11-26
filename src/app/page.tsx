import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Funstuff from "@/components/Funstuff";
import Hero from "@/components/Hero";
import More from "@/components/More";
import Newpost from "@/components/Newpost";
import { Button } from "@/components/ui/button";
import MaxWrapper from "@/components/ui/MaxWrapper";
import Navbar from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";
import React from "react";

export default function page() {
  return (
    <MaxWrapper>
      <Navbar />
      <Hero />
      <More />
      <Newpost />
      <Explore />
      <Funstuff />
      <Footer />
    </MaxWrapper>
  );
}
