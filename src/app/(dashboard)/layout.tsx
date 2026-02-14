import Adminnav from "@/components/Adminnav";
import Navtoggle from "@/components/Navtoggle";
import Provider from "@/components/Provider";
import MaxWrapper from "@/components/ui/MaxWrapper";
import { Toaster } from "sonner";
import ContextMain from "@/contexts/context";
import NextTopLoader from "nextjs-toploader";
import React from "react";
// import ".globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`  overflow-x-hidden`}>
        <ContextMain>
          <Provider>
            <Adminnav />
            <NextTopLoader showSpinner={false} color="#E63956" />
            {children}
            <Toaster />
          </Provider>
          {/* <MaxWrapper>{children}</MaxWrapper> */}
          {/* <Footertoggle /> */}
        </ContextMain>
      </body>
    </html>
  );
}
