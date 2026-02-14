import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "@/db/connect";
import { findRole } from "./lib/data/findrole";
import { Role } from "./generated/prisma/enums";
// import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token }) {
      console.log(token);
      if (!token.sub) return token;
      const existedUser = await findRole(token.sub);
      if (!existedUser) return token;
      token.role = existedUser;

      return token;
    },
    async session({ token, session }) {
      console.log(token);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { db } from "@/db/connect";

// export const { auth } = NextAuth({
//   adapter: PrismaAdapter(db),

//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//     error: "/error",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role ?? "READER";
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id;
//         session.user.role = token.role;
//       }
//       return session;
//     },

//     async signIn({ user }) {
//       if (!user.email) return false;

//       const adminEmails = ["uzoecijerry@gmail.com"];
//       const newRole = adminEmails.includes(user.email)
//         ? "SUPER_ADMIN"
//         : "READER";

//       // Only update if the role has changed
//       if (user.role !== newRole) {
//         await db.user.update({
//           where: { email: user.email },
//           data: { role: newRole },
//         });
//       }

//       return true;
//     },
//   },
// });
