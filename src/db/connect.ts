import { PrismaClient } from "../../prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  var cachePrisma: PrismaClient;
}
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter });
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient({ adapter });
  }
  prisma = global.cachePrisma;
}

export const db = prisma;
