import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";
import type { NextAuthConfig } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { type Adapter } from "next-auth/adapters";

import { env } from "@/env";
import { db } from "@/server/db";

export const config = {
  // providers: [Auth0],
  providers: [
    Auth0({
      clientId: env.AUTH0_CLIENT_ID,
      clientSecret: env.AUTH0_CLIENT_SECRET,
      issuer: env.AUTH0_ISSUER,
    }),
  ],
  basePath: "/api/auth",
  adapter: PrismaAdapter(db) as Adapter,
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

// /**
//  * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
//  * object and keep type safety.
//  *
//  * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
//  */
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       // ...other properties
//       // role: UserRole;
//     } & DefaultSession["user"];
//   }

//   // interface User {
//   //   // ...other properties
//   //   // role: UserRole;
//   // }
// }

// /**
//  * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
//  *
//  * @see https://next-auth.js.org/configuration/options
//  */
// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//       },
//     }),
//   },
//   adapter: PrismaAdapter(db) as Adapter,
//   providers: [
//     DiscordProvider({
//       clientId: env.DISCORD_CLIENT_ID,
//       clientSecret: env.DISCORD_CLIENT_SECRET,
//     }),
//     /**
//      * ...add more providers here.
//      *
//      * Most other providers require a bit more work than the Discord provider. For example, the
//      * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
//      * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
//      *
//      * @see https://next-auth.js.org/providers/github
//      */
//   ],
// };

// /**
//  * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
//  *
//  * @see https://next-auth.js.org/configuration/nextjs
//  */
// export const getServerAuthSession = () => getServerSession(authOptions);
