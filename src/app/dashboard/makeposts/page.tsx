import React from "react";
import { auth } from "@/auth";
import { db } from "@/db/connect";
import Make from "./Make";
const page = async () => {
  const session = await auth();

  const user = session?.user.email!!;
  const category = await db.category.findMany();
  return (
    <>
      <Make user={user} category={category} />
    </>
  );
};

export default page;
