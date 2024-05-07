'use client'
//import { auth, signIn } from "@/auth";
//import getSession from "@/lib/getSession";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";



export default function NavBarClient() {
  // TODO: Show the currently logged-in user
  //const session = await auth()
  //const session = await getSession()
  //const user = session?.user
  const session = useSession()
  const user = session?.data?.user

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link>
        {user && <UserButton user={user} />}
        {!user && session.status !== 'loading' && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>
}