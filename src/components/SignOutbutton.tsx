"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const SignOutbutton = () => {
  return (
    <Button
      onClick={async () => await signOut({ callbackUrl: "/login" })}
      className=" mx-2 "
      size={"icon"}
      variant={"outline"}
    >
      {" "}
      <LogOut />{" "}
    </Button>
  );
};

export default SignOutbutton;
