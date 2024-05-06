import NextAuth from "next-auth"

import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/db"
//import { MongoClient } from "mongodb" // Add this import
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise), // Change the type of clientPromise
  providers: [Google]
})