import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
} from "@/routes";
import { url } from "inspector";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  // }
});

// Optionally, don't invoke Proxy on some paths
export const config = {
  // simple a matcher for anything you want to invoke the middle ware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     const role = req.nextauth.token?.role;
//     const pathname = req.nextUrl.pathname;

//     // Block READER from dashboard
//     if (pathname.startsWith("/dashboard") && role === "READER") {
//       return NextResponse.redirect(new URL("/", req.url));
//     }

//     return NextResponse.next();
//   },

//   {
//     callbacks: {
//       // This runs FIRST
//       authorized: ({ token }) => {
//         // Not logged in
//         if (!token) return false;

//         return true;
//       },
//     },
//   },
// );

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
