import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { db } from "@/lib/db";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  //   const store = await db.store.findFirst({
  //     where: {
  //       userId: userId,
  //     },
  //   });

  //   if (!store) {
  //     redirect("/onboarding");
  //   }

  return <>{children}</>;
}
