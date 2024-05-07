//import { auth } from "@/auth";

import getSession from "@/lib/getSession";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import Link from "next/link";



export default async function Home() {
  const session = await getSession()

  connectDB()
  const users = await User.find()



  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">Next-Auth V5 Tutorial</h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      {/* TODO: Display users here */}
      <ul className="list-inside list-disc">
        {
          session ? users?.map((user) => (
            <li key={user._id} className="flex gap-2">
              <Link href={`user/${(user._id)}`} className="hover:underline">
                {user.name || `User ${user._id}`}
              </Link>
            </li>
          ))
            : <li className="text-muted-foreground">You must be logged in to see users</li>
        }
      </ul>
    </main>
  );
}