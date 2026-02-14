"use server";
import { db } from "@/db/connect";

export const getPosts = async () => {
  try {
    const data = await db.post.findMany({
      include: {
        category: true,
      },
    });

    return data;
  } catch (error) {
    const err = new Error(`${error}`);
    err.name = "error";
    throw err;
  }
};

export const getCategory = async (id: string) => {
  try {
    const data = await db.category.findUnique({
      where: { id: id },
    });

    return data;
  } catch (error) {
    const err = new Error(`${error}`);
    err.name = "error";
    throw err;
  }
};
