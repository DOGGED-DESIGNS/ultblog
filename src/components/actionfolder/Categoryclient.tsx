"use client";

import React from "react";

import { cn } from "@/lib/tiptap-utils";
import { usePathname } from "next/navigation";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";

const Categoryclient = ({
  subItem,
}: {
  subItem: { title: string; url: string }[];
}) => {
  const pathname = usePathname();
  // const isActive = pathname.endsWith(subItem.title);
  const segments = pathname.split("/").filter(Boolean); // ["dashboard", "category", "Relationship"]
  const lastSegment = segments[segments.length - 1]; // "Relationship"

  return (
    <>
      {subItem.map((item) => (
        <SidebarMenuSubItem key={item.title}>
          <SidebarMenuSubButton asChild>
            <a
              className={cn(
                "",
                lastSegment === item.title &&
                  "bg-primary hover:bg-primary/90 text-white"
              )}
              href={item.url}
            >
              <span>{item.title}</span>
            </a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      ))}
    </>
  );
};

export default Categoryclient;
