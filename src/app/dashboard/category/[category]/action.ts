"use server";

import { db } from "@/db/connect";

export const getCat = async (category: string) => {
  try {
    const data = await db.category.findUnique({
      where: {
        name: category,
      },
      select: {
        id: true,
        name: true,
        posts: {
          select: {
            id: true,
            title: true,
            status: true,
            author: {
              select: {
                email: true, // 👈 this replaces authorId
              },
            },
            _count: {
              select: {
                views: true,
              },
            },
          },
        },
      },
    });

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

// export const createCategory = async (text: string) => {
//   const generateslug = (name: string) =>
//     name
//       .toLowerCase() // convert to lowercase
//       .trim() // remove extra spaces at start/end
//       .replace(/[\s\W-]+/g, "-") // replace spaces & non-word chars with dash
//       .replace(/^-+|-+$/g, ""); // remove leading & trailing dashes

//   try {
//     const data = await db.category.create({
//       data: {
//         name: text,
//         slug: generateslug(text),
//       },
//     });

//     return { message: "category created" };
//   } catch (error) {
//     throw new Error(`${error}`);
//   }
// };
