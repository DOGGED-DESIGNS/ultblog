import React from "react";
import { db } from "@/db/connect";
import Make from "./Make";
const page = async () => {
  const category = await db.category.findMany();
  return (
    <>
      <Make category={category} />
    </>
  );
};

export default page;
