"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MaxWrapper from "@/components/ui/MaxWrapper";
import { Google } from "@/components/svgs";
import Link from "next/link";

export default function page() {
  return (
    <MaxWrapper newClass=" bg-slate-100 justify-center items-center  py-10 px-5">
      <Card className="  w-full max-w-sm">
        <CardHeader>
          <CardTitle className=" text-center h2 font-bold">
            Login to your admin dashboard
          </CardTitle>
          <CardDescription className=" text-center mt-3 ">
            Make a post, Edit and view realtime analytics on blog website
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form> */}
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Link
            href={"/seepost"}
            className={buttonVariants({
              variant: "default",
              className: "w-full",
            })}
          >
            <Google clasName=" fill-current text-white" /> Login with Google
          </Link>
        </CardFooter>
      </Card>
    </MaxWrapper>
  );
}
