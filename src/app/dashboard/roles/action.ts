"use server";
import { Role } from "@/generated/prisma/client";
import { db } from "@/db/connect";

export const getRoles = async () => {
  try {
    const data = await db.user.findMany({
      where: {
        role: {
          not: "READER",
        },
      },
    });

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const addUsers = async ({
  email,
  Roles,
}: {
  email: string;
  Roles: Role;
}) => {
  try {
    await db.user.create({
      data: {
        email: email,
        role: Roles,
      },
    });

    return { message: "email created" };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
