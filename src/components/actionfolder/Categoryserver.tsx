import React from "react";
import Categoryclient from "./Categoryclient";
import { db } from "@/db/connect";
// import { getCat } from "./action";

export const getCat = async () => {
  try {
    const data = await db.category.findMany();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const Categoryserver = async () => {
  const data = await getCat();

  const upgradeData = data.map((item) => ({
    title: item.name,
    url: `http://localhost:3000/dashboard/category/${item.name}`,
  }));

  return (
    <>
      <Categoryclient subItem={upgradeData} />
    </>
  );
};

export default Categoryserver;
