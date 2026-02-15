"use client";
import {
  BadgePlus,
  ChevronRight,
  LayoutDashboardIcon,
  Newspaper,
  Signature,
  SquareTerminal,
  StickyNote,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/tiptap-utils";
import Categoryserver from "./actionfolder/Categoryserver";
import { SidebarLink } from "@/lib/role-nav";
import Link from "next/link";
type NavMainProps = {
  links: SidebarLink[];
};
export function NavMain({ links }: NavMainProps) {
  // const navMain2 = {
  //     title: "Roles",
  //     url: "#",
  //     icon: Icons.Bot,
  //     items: [
  //       {
  //         title: "Reader",
  //         url: "#",
  //       },
  //       {
  //         title: "Author",
  //         url: "#",
  //       },
  //       {
  //         title: "Admin",
  //         url: "#",
  //       },
  //     ],
  //   },

  const items = {
    title: "Category",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {/* this is the button section */}

        <SidebarMenuItem>
          {links.map((items, index) => (
            <>
              <Link href={items.href} className=" flex gap-1">
                <SidebarMenuButton tooltip={items.title}>
                  {items.icon && <items.icon />}
                  <span> {items.title} </span>
                </SidebarMenuButton>
              </Link>
            </>
          ))}
        </SidebarMenuItem>

        {/* {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))} */}
      </SidebarMenu>
    </SidebarGroup>
  );
}
