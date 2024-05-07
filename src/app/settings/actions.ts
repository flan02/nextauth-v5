"use server";

//import { auth } from "@/auth";
import getSession from "@/lib/getSession";
import { connectDB } from "@/lib/mongodb";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import User from "@/models/user";
import { revalidatePath } from "next/cache";




export async function updateProfile(values: UpdateProfileValues) {
  // TODO: Get the currently authenticated user
  //const session = await auth();
  const session = await getSession()
  const userId = session?.user?.id;
  if (!userId) throw new Error("Unauthorized");
  const { name } = updateProfileSchema.parse(values);

  // TODO: Update user
  connectDB();
  await User.updateOne({ _id: userId }, { name })
  revalidatePath('/') // * Revalidate the current page with the new data
}