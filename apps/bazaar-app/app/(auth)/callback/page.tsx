import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import prisma from "@/lib/prisma";

export default async function AuthCallback() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // const store = await prisma.store.findFirst({
  //   where: {
  //     userId,
  //   },
  // });

  // if (store) {
  //   redirect("/store");
  // }

  redirect("/onboarding");
}
