// src/lib/role-nav.ts
import {
  BadgePlus,
  Newspaper,
  Signature,
  StickyNote,
  type LucideIcon,
} from "lucide-react";

export type SidebarLink = {
  title: string;
  href: string;
  icon?: LucideIcon; // optional, for icons
};

export const ROLE_NAV: Record<
  "AUTHOR" | "ADMIN" | "SUPER_ADMIN" | "READER",
  SidebarLink[]
> = {
  READER: [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/dashboard/content/posts" },
    { title: "Categories", href: "/dashboard/content/categories" },
  ],
  AUTHOR: [
    { title: "Dashboard", href: "/dashboard/author" },
    { title: "My Posts", href: "/dashboard/content/posts" },
    { title: "Categories", href: "/dashboard/content/categories" },
  ],
  ADMIN: [
    { title: "Dashboard", href: "/dashboard/admin" },
    { title: "All Posts", href: "/dashboard/content/posts" },
    { title: "Writers", href: "/dashboard/content/writers" },
    { title: "Categories", href: "/dashboard/content/categories" },
  ],
  SUPER_ADMIN: [
    { title: "Add Category", href: "/dashboard/category", icon: BadgePlus },
    { title: "OnBoard Writers", href: "/dashboard/authors", icon: Signature },
    { title: "Send News_Letter", href: "/dashboard/", icon: Newspaper },
    { title: "Make Posts", href: "/dashboard/makeposts", icon: StickyNote },
    // { title: "Analytics", href: "/dashboard/analytics" },
  ],
};
