import { Role } from "@/generated/prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  role: Role;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// // src/types/next-auth.d.ts
// import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
// import { JWT as DefaultJWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface User extends DefaultUser {
//     id: string;
//     role: "READER" | "AUTHOR" | "ADMIN" | "SUPER_ADMIN";
//   }

//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       role: "READER" | "AUTHOR" | "ADMIN" | "SUPER_ADMIN";
//     } & DefaultSession["user"];
//   }
// }

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: Role;
  }
}
