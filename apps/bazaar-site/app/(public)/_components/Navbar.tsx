"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Product",
      href: "/product",
      dropdown: [
        { label: "Escrow Payments", href: "/product/escrow" },
        { label: "Dispute Protection", href: "/product/dispute" },
        { label: "Order Verification", href: "/product/verification" },
        { label: "Buyer Protection", href: "/product/buyer-protection" },
        { label: "Seller Protection", href: "/product/seller-protection" },
        { label: "Transaction Tracking", href: "/product/tracking" },
      ],
    },
    {
      label: "How it works",
      href: "/how-it-works",
      dropdown: null,
    },
    {
      label: "Trust",
      href: "/trust",
      dropdown: [
        { label: "Security", href: "/trust/security" },
        { label: "Escrow process", href: "/trust/escrow-process" },
        { label: "Fraud prevention", href: "/trust/fraud-prevention" },
        { label: "Dispute resolution", href: "/trust/dispute-resolution" },
        { label: "Compliance", href: "/trust/compliance" },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
      dropdown: null,
    },
    {
      label: "Resources",
      href: "/resources",
      dropdown: null,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/bazaar_logo_blue.png"
              alt="Bazaar"
              width={100}
              height={40}
              className="h-4 w-auto md:h-6"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative py-2 group"
                  onMouseEnter={() => setHoveredLink(item.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-1">
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                      hoveredLink === item.label ? "w-full" : "w-0"
                    }`}
                  />
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors relative group"
                      >
                        <span className="relative inline-block">
                          {dropItem.label}
                          <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors hidden sm:block relative py-2 group"
              onMouseEnter={() => setHoveredLink("signin")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Sign In
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                  hoveredLink === "signin" ? "w-full" : "w-0"
                }`}
              />
            </Link>
            <Button
              variant="outline"
              className="text-black rounded-md px-4 py-2 text-sm font-medium h-auto"
            >
              Create Deal
            </Button>
            <Button className="bg-primary hover:bg-primary-400 text-white rounded-md px-4 py-2 text-sm font-medium h-auto">
              Create Store
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
