import { auth, signIn } from "@/auth";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import getSession from "@/lib/getSession";



export default async function NavBarServer() {
  // TODO: Show the currently logged-in user
  //const session = await auth()
  const session = await getSession()
  const user = session?.user

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link>
        {
          user
            ? <UserButton user={user} />
            : <SignInButton />
        }
        {/* PARTIAL PRERENDERING (BETA) IT FIX THE RELOAD OF THE DATA FROM DATABASE EVERYTIME THE PAGE IS REFRESHED. SERVE THE PAGE IMMEDIATELY LIKE A CLIENTSIDE COMPONENT*/}
        {/*
        <Suspense>
          <UserMenu />
        </Suspense>
        */}
      </nav>
    </header>
  );
}

function SignInButton() {
  return <form action={async () => {
    "use server";
    await signIn()
  }} >
    <Button type="submit">Sign in</Button>
  </form>
}