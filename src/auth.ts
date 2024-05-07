import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import clientPromise from "./lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  //trustHost: true,
  theme: {
    logo: '/next.svg'
  },
  adapter: MongoDBAdapter(clientPromise) as Adapter, // Change the type of clientPromise
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role
      return session
    }
  },
  providers: [Google, Github]
})