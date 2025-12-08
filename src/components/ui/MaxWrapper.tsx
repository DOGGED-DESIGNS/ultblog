import { cn } from "@/lib/utils";
import React from "react";

interface maxType {
  children: React.ReactNode;
  newClass?: String;
}

const MaxWrapper: React.FC<maxType> = ({ children, newClass }) => {
  return (
    <div
      className={cn(
        "  flex flex-col flex-1 h-full   min-h-lvh  bg-white  ",
        newClass
      )}
    >
      {children}
    </div>
  );
};

export default MaxWrapper;
