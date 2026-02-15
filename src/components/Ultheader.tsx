"use client";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import SignOutbutton from "./SignOutbutton";
import { SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { boolean } from "zod";

const Ultheader = () => {
  const pathName = usePathname();

  const segment = pathName
    .split("/")
    .filter(Boolean)
    .filter((item) => item !== "dashboard")
    .filter((item) => item !== "home");
  return (
    <header className="flex h-16  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex  w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className=" md:block">
              <BreadcrumbLink href="/dashboard">Blog Analytics</BreadcrumbLink>
            </BreadcrumbItem>
            {segment.map((item, index) => (
              <>
                <BreadcrumbSeparator className="" />

                <BreadcrumbItem key={index} className=" md:block">
                  <BreadcrumbLink href="#"> {item} </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="   ml-auto">
          <SignOutbutton />
          <Button variant={"ghost"} size={"icon"}>
            <SunIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Ultheader;
