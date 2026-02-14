import { db } from "@/db/connect";

export const findRole = async (id: string) => {
  const data = await db.user.findFirst({
    where: {
      id: id,
    },
    select: {
      role: true,
    },
  });

  return data?.role;
};
