import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./actions";
import User from "@/models/users";
import dbConnect from "./db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      const isUser = auth?.user ? true : false;
      return isUser;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await createUser({ email: user.email, name: user.name });
        }
        return true;
      } catch (error) {
        return false;
      }
    },

    async session({ session, user }) {
      try {
        await dbConnect();
        const user = await User.findOne({ email: session.user.email });
        session.user.id = user.id;
        return session;
      } catch (error) {
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});
