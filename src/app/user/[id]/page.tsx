
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";

import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: { id: string };
}

connectDB()

const getUser = cache(async (id: string) => {
  const user = await User.findById(id)
  return user
})

export async function generateStaticParams() {
  const users = await User.find({})
  return users.map(({ _id }) => ({ _id: _id }))
}

export async function generateMetadata({ params: { id } }: PageProps) {
  const user = await getUser(id);

  return {
    title: user?.name || `User ${id}`,
  };
}

export default async function Page({ params: { id } }: PageProps) {
  // Artificial delay to showcase static caching
  //await new Promise((resolve) => setTimeout(resolve, 1500));

  const user = await getUser(id);

  if (!user) notFound();

  return (
    <div className="mx-3 my-10 flex flex-col items-center gap-3">
      {user.image && (
        <Image
          src={user.image}
          width={100}
          alt="User profile picture"
          height={100}
          className="rounded-full"
          priority={true}
        />
      )}
      <h1 className="text-center text-xl font-bold">
        {user?.name || `User ${id}`}
      </h1>
      <p className="text-muted-foreground">
        User since {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}