import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "@/db/connect";
import z from "zod";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(z.object({ hash: z.string() }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      const existing = await db.image.findUnique({
        where: { hash: input.hash },
      });

      if (existing) {
        return {
          alreadyExists: true,
          url: existing.url,
          key: existing.key, // 👈 keep key too
          hash: input.hash,
        };
      }

      return { alreadyExists: false, hash: input.hash };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (metadata.alreadyExists) {
        return {
          url: metadata.url,
          key: metadata.key,
          reused: true,
        };
      }

      const image = await db.image.create({
        data: {
          url: file.ufsUrl,
          key: file.key, // 👈 STORE KEY HERE
          hash: metadata.hash,
        },
      });

      return {
        url: image.url,
        key: image.key,
        reused: false,
      };
    }),
  // const { user } = metadata.input;
  // const fileKey = file.key;
  // const fileurl = file.ufsUrl;
  // return { user, fileKey, fileurl };
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
