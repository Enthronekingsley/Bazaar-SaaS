"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, PackageIcon, LayoutDashboard } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

interface DealLayoutProps {
  children: React.ReactNode;
}

export default function DealLayout({ children }: DealLayoutProps) {
  const router = useRouter();
  const { user } = useUser();

  const [hasStore, setHasStore] = useState<boolean | null>(null);
  const [hasDeal, setHasDeal] = useState<boolean | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const storeRes = await fetch("/api/store/me");
        const storeData = storeRes.ok ? await storeRes.json() : null;
        setHasStore(storeData?.hasStore ?? false);

        const dealRes = await fetch("/api/deals/me");
        const dealData = dealRes.ok ? await dealRes.json() : null;
        setHasDeal(dealData?.hasDeal ?? false);
      } catch {
        setHasStore(false);
        setHasDeal(false);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 h-14 border-b bg-white z-50">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <Link href="/">
              <Image
                src="/logos/bazaar_logo_blue.png"
                alt="Bazaar"
                width={80}
                height={24}
              />
            </Link>
          </div>

          <UserButton>
            <UserButton.MenuItems>
              {hasStore === true && (
                <UserButton.Action
                  labelIcon={<PackageIcon size={16} />}
                  label="My Store"
                  onClick={() => router.push("/store")}
                />
              )}

              {hasStore === false && (
                <UserButton.Action
                  labelIcon={<PackageIcon size={16} />}
                  label="Create Store"
                  onClick={() => router.push("/store/create")}
                />
              )}

              {hasDeal === true && (
                <UserButton.Action
                  labelIcon={<LayoutDashboard size={16} />}
                  label="Dashboard"
                  onClick={() => router.push("/")}
                />
              )}
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </header>

      <main className="pt-14 h-full overflow-y-auto px-4 max-w-3xl mx-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
}
