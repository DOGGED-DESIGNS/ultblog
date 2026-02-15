"use client";

import {
  BookAIcon,
  ChevronRight,
  Folder,
  Forward,
  MoreHorizontal,
  SquareTerminal,
  Trash2,
  UserCircle,
  type LucideIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Category } from "@/generated/prisma/client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const items = {
  title: "Category",
  url: "#",
  icon: SquareTerminal,
  isActive: true,
};

export function NavProjects({
  category,
  writers,
  admin,
  superadmin,
}: {
  category: { title: string; url: string }[];
  writers: { name: string | null; email: string }[];
  admin: { name: string | null; email: string }[];
  superadmin: { name: string | null; email: string }[];
}) {
  const { isMobile } = useSidebar();

  const pathname = usePathname();
  // const isActive = pathname.endsWith(subItem.title);
  const segments = pathname.split("/").filter(Boolean); // ["dashboard", "category", "Relationship"]
  const lastSegment = segments[segments.length - 1]; // "Relationship"

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Explore Categories & Roles</SidebarGroupLabel>
      <SidebarMenu>
        {/* <Collapsible
          asChild
          defaultOpen={items.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={items.title}>
                {items.icon && <items.icon />}
                <span>{items.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
               
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>

        </Collapsible> */}

        {/* category */}
        <Collapsible
          // key={projects.name}
          asChild
          defaultOpen={items.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={"Category"}>
                <BookAIcon />
                <span>Category</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {category.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild>
                      <Link
                        className={cn(
                          "",
                          lastSegment === item.title &&
                            "bg-primary hover:bg-primary/90 text-white",
                        )}
                        href={item.url}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>

          {/* This is the second */}
        </Collapsible>

        {/* Roles */}
        <Collapsible
          // key={projects.name}
          asChild
          defaultOpen={items.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={"Roles"}>
                <UserCircle />
                <span>Roles</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {/* inner collapsible */}

                <Collapsible
                  key={"cow"}
                  asChild
                  defaultOpen={false}
                  className="group/inner-collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={"Roles"}>
                        <UserCircle />
                        <span>Admin</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/inner-collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {admin.length !== 0 && (
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              {admin?.map((item, index) => (
                                <>
                                  <Link key={index} href={"#"}>
                                    {item.name}
                                  </Link>
                                </>
                              ))}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>

                {/* inner collapsible 2 */}

                <Collapsible
                  key={"cow"}
                  asChild
                  defaultOpen={false}
                  className="group/inner-collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={"Roles"}>
                        <UserCircle />
                        <span>Super_Admin</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/inner-collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {superadmin.length !== 0 && (
                          <SidebarMenuItem>
                            <SidebarMenuButton className=" bg-red-600 text-white">
                              {superadmin?.map((item, index) => (
                                <>
                                  <Link key={index} href={"#"}>
                                    {item.name}
                                  </Link>
                                </>
                              ))}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>

                {/* inner collapsible 3 */}
                <Collapsible
                  key={"cow"}
                  asChild
                  defaultOpen={false}
                  className="group/inner-collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={"Roles"}>
                        <UserCircle />
                        <span>Author</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/inner-collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {writers.length !== 0 && (
                          <SidebarMenuItem>
                            <SidebarMenuButton className=" bg-red-600 text-white">
                              {writers?.map((item, index) => (
                                <>
                                  <Link key={index} href={"#"}>
                                    {item.name}
                                  </Link>
                                </>
                              ))}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>

          {/* This is the second */}
        </Collapsible>
        {/* {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))} */}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
