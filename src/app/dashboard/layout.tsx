import { AppSidebar } from "@/components/app-sidebar";
import React from "react";
import { auth } from "@/auth";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ContextMain from "@/contexts/context";
import Provider from "@/components/Provider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";
import Ultheader from "@/components/Ultheader";
import { db } from "@/db/connect";
import { Role } from "@/generated/prisma/enums";
// import ".globals.css";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  const author = await db.user.findMany({
    where: {
      role: "AUTHOR",
    },
    select: {
      email: true,
      name: true,
    },
  });
  const admin = await db.user.findMany({
    where: {
      role: "ADMIN",
    },
    select: {
      email: true,
      name: true,
    },
  });
  const superAdmin = await db.user.findMany({
    where: {
      role: "SUPER_ADMIN",
    },
    select: {
      email: true,
      name: true,
    },
  });

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const category = await db.category.findMany();
  const upgradeCategory = category.map((item) => ({
    title: item.name,
    url: `${BASE_URL}/dashboard/category/${item.name}`,
  }));

  return (
    <html lang="en">
      <body className={`  overflow-x-hidden`}>
        <SidebarProvider>
          <AppSidebar
            admin={admin}
            superadmin={superAdmin}
            category={upgradeCategory}
            writers={author}
            role={session.user.role}
          />

          {/* <AppSidebar /> */}
          <SidebarInset>
            <ContextMain>
              <Provider>
                <NextTopLoader showSpinner={false} color="#E63956" />
                <Ultheader />
                {children}
              </Provider>
            </ContextMain>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
