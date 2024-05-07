import { Metadata } from "next";
import SettingsPage from "./SettingsPage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  // TODO: Protect this page via authentication
  //const session = await auth()
  const session = await getSession()
  if (!session?.user) redirect('/api/auth/signin?callbackUrl=/settings') // * Redirect to sign in if not authenticated but after sign in redirect to settings page
  return <SettingsPage user={session.user} />;
}