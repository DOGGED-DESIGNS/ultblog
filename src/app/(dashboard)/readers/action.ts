"use server";

import { db } from "@/db/connect";

export const getReaders = async () => {
  try {
    const data = await db.user.findMany({
      where: {
        role: "READER",
      },
    });

    return data;
  } catch (error) {
    const err = new Error();
    err.name = "error";
    err.message = `${error}`;
    throw err;
  }
};
