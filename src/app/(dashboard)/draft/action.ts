"use server";

import { db } from "@/db/connect";

export const getDraft = async () => {
  try {
    const data = await db.post.findMany({
      where: {
        status: "DRAFT",
      },
    });

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
