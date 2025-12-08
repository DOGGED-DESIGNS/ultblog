import Adminnav from "@/components/Adminnav";
import Navtoggle from "@/components/Navtoggle";
import Provider from "@/components/Provider";
import MaxWrapper from "@/components/ui/MaxWrapper";
import { Toaster } from "@/components/ui/toaster";
import ContextMain from "@/contexts/context";
import React from "react";
// import ".globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`  text-black overflow-x-hidden`}>
        <ContextMain>
          <Provider>
            <Adminnav />
            <MaxWrapper>
              {children}
              <Toaster />
            </MaxWrapper>
          </Provider>
          {/* <MaxWrapper>{children}</MaxWrapper> */}
          {/* <Footertoggle /> */}
        </ContextMain>
      </body>
    </html>
  );
}
