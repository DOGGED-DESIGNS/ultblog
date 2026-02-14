"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Icons } from "./Icon";
import { NavProjects } from "./nav-projects";
import { BookDashed } from "lucide-react";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "Dogged_Designs",
      email: "Doggeddesigns@doggeddesigns.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: Icons.GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: Icons.AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Icons.Command,
        plan: "Free",
      },
    ],
    projects: [
      {
        name: "",
        url: "",
        icon: BookDashed,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <a href="/dashboard/home">
          <TeamSwitcher teams={data.teams} />
        </a>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
