import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";

console.log("ID exists:", !!process.env.GOOGLE_CLIENT_ID);
console.log("SECRET exists:", !!process.env.GOOGLE_CLIENT_SECRET);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
} satisfies NextAuthConfig;
