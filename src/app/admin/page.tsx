import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function Page() {
  // TODO: Redirect non-admin users
  //const session = await auth()
  const session = await getSession()
  const user = session?.user
  if (!user) redirect('/api/auth/signin?callbackUrl=/admin')
  if (user.role !== 'admin') {
    return <main className="mx-auto my-10">
      <h1 className="text-center text-xl font-bold">Unauthorized.</h1>
      <p className="text-center">You do not have permission to access this page.</p>
    </main>
  }
  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Welcome, admin!</p>
    </main>
  );
}