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
// import ".globals.css";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <html lang="en">
      <body className={`  overflow-x-hidden`}>
        <SidebarProvider>
          <AppSidebar role={session.user.role} />

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
