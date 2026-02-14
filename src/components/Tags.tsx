"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Tags = ({
  value,
  add,
  remove,
}: {
  value: string;
  add?: (para: string) => void;
  remove?: (para: string) => void;
}) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle);
    // console.log(toggle);
    // setToggle((prev) => {
    //   const next = !prev;

    //   if (next) {
    //     if (add) {
    //       add("how"); // turned ON → add
    //     }
    //   } else {
    //     if (remove) {
    //       remove("how"); // turned OFF → remove
    //     }
    //   }

    //   return next;
    // });
  };

  useEffect(() => {
    if (toggle) {
      if (add) {
        add(value); // turned ON → add
      }
    } else {
      if (remove) {
        remove(value); // turned OFF → remove
      }
    }
  }, [toggle]);

  return (
    <Button
      type="button"
      onClick={handleClick}
      variant={"outline"}
      className={cn(
        " border p-2 hover:bg-transparent border-BAccent text-BAccent rounded-sm",
        toggle && "  hover:bg-BAccent  bg-BAccent text-white ",
      )}
    >
      {value}{" "}
    </Button>
  );
};

export default Tags;
