// src/lib/role-nav.ts

export type SidebarLink = {
  title: string;
  href: string;
  icon?: React.ReactNode; // optional, for icons
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
    { title: "Dashboard", href: "/dashboard/super-admin" },
    { title: "All Posts", href: "/dashboard/content/posts" },
    { title: "Writers", href: "/dashboard/content/writers" },
    { title: "Categories", href: "/dashboard/content/categories" },
    { title: "Analytics", href: "/dashboard/analytics" },
  ],
};
