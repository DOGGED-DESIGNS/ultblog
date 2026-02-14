"use client";
import React, { useReducer, createContext, useState } from "react";

export const ContextProvider = createContext<{
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  nav: false,
  setNav: () => {},
});

export default function ContextMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nav, setNav] = useState(false);

  return (
    <ContextProvider.Provider value={{ nav, setNav }}>
      {children}
    </ContextProvider.Provider>
  );
}
