import React from "react";

interface maxType {
  children: React.ReactNode;
}

const MaxWrapper: React.FC<maxType> = ({ children }) => {
  return (
    <div className="  flex flex-col flex-1 h-full   min-h-lvh  bg-white  ">
      {children}
    </div>
  );
};

export default MaxWrapper;
