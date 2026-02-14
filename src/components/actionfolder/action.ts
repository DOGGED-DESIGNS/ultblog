"use server";
import { db } from "@/db/connect";

export const getCat = async () => {
  try {
    const data = await db.category.findMany();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
