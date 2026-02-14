"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { CardFooter } from "./ui/card";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Google } from "./svgs";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const GoogleSinin = () => {
  const onClick = (provider: "Google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <CardFooter className="flex-col gap-2">
      <Button
        onClick={() => onClick("Google")}
        variant={"default"}
        className="w-full"
      >
        <Google className=" fill-current text-white" /> Login
      </Button>
    </CardFooter>
  );
};

export default GoogleSinin;
