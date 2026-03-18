"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@repo/ui/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Scale,
  Lock,
  Zap,
  BookOpen,
  DollarSign,
  LogIn,
  Store,
  CreditCard,
  ArrowRight,
  Layers,
  Workflow,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Product",
      href: "/product",
      icon: <Layers className="h-4 w-4" />,
      dropdown: [
        {
          label: "Escrow Payments",
          href: "/product/escrow",
          icon: <CreditCard className="h-3 w-3" />,
        },
        {
          label: "Dispute Protection",
          href: "/product/dispute",
          icon: <Scale className="h-3 w-3" />,
        },
        {
          label: "Order Verification",
          href: "/product/verification",
          icon: <Shield className="h-3 w-3" />,
        },
        {
          label: "Buyer Protection",
          href: "/product/buyer-protection",
          icon: <Lock className="h-3 w-3" />,
        },
        {
          label: "Seller Protection",
          href: "/product/seller-protection",
          icon: <Shield className="h-3 w-3" />,
        },
        {
          label: "Transaction Tracking",
          href: "/product/tracking",
          icon: <ArrowRight className="h-3 w-3" />,
        },
      ],
    },
    {
      label: "How it works",
      href: "/how-it-works",
      icon: <Workflow className="h-4 w-4" />,
      dropdown: null,
    },
    {
      label: "Trust",
      href: "/trust",
      icon: <Shield className="h-4 w-4" />,
      dropdown: [
        {
          label: "Security",
          href: "/trust/security",
          icon: <Lock className="h-3 w-3" />,
        },
        {
          label: "Escrow process",
          href: "/trust/escrow-process",
          icon: <ArrowRight className="h-3 w-3" />,
        },
        {
          label: "Fraud prevention",
          href: "/trust/fraud-prevention",
          icon: <Shield className="h-3 w-3" />,
        },
        {
          label: "Dispute resolution",
          href: "/trust/dispute-resolution",
          icon: <Scale className="h-3 w-3" />,
        },
        {
          label: "Compliance",
          href: "/trust/compliance",
          icon: <BookOpen className="h-3 w-3" />,
        },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <DollarSign className="h-4 w-4" />,
      dropdown: null,
    },
    {
      label: "Resources",
      href: "/resources",
      icon: <BookOpen className="h-4 w-4" />,
      dropdown: null,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="shrink-0 group">
              <div className="relative">
                <Image
                  src="/logos/bazaar_logo_blue.png"
                  alt="Bazaar"
                  width={100}
                  height={40}
                  className="h-5 w-auto md:h-7 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => {
                const isParentActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 rounded-lg group ${
                        isParentActive ? "text-primary" : ""
                      }`}
                      onMouseEnter={() => setHoveredLink(item.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="text-sm font-medium text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-1.5">
                        {item.icon}
                        {item.label}
                        {item.dropdown && (
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-all duration-300 ${
                              activeDropdown === item.label
                                ? "rotate-180 text-primary"
                                : ""
                            }`}
                          />
                        )}
                      </span>

                      <span
                        className={`absolute inset-0 bg-gray-50 rounded-lg transition-all duration-300 -z-10 ${
                          hoveredLink === item.label
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      />

                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300 -translate-x-1/2 ${
                          hoveredLink === item.label ? "w-8" : "w-0"
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 to-primary-400" />

                          {/* {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={dropItem.label}
                            href={dropItem.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-all group relative"
                          >
                            <span className="text-gray-400 group-hover:text-primary transition-colors">
                              {dropItem.icon}
                            </span>
                            <span className="flex-1">{dropItem.label}</span>
                            <ArrowRight className="h-3.5 w-3.5 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />

                            {idx === 0 && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                            )}
                          </Link>
                        ))} */}

                          {item.dropdown.map((dropItem) => {
                            const isActive = pathname === dropItem.href;

                            return (
                              <Link
                                key={dropItem.label}
                                href={dropItem.href}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all group relative
        ${
          isActive
            ? "text-primary bg-primary/5"
            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
        }
      `}
                              >
                                <span
                                  className={`transition-colors ${
                                    isActive
                                      ? "text-primary"
                                      : "text-gray-400 group-hover:text-primary"
                                  }`}
                                >
                                  {dropItem.icon}
                                </span>

                                <span className="flex-1">{dropItem.label}</span>

                                <ArrowRight
                                  className={`h-3.5 w-3.5 transition-all ${
                                    isActive
                                      ? "text-primary opacity-100 translate-x-0"
                                      : "text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                  }`}
                                />

                                {isActive && (
                                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                                )}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors relative py-2 px-3 rounded-lg group"
                onMouseEnter={() => setHoveredLink("signin")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <LogIn className="h-4 w-4" />
                Sign In
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300 -translate-x-1/2 ${
                    hoveredLink === "signin" ? "w-8" : "w-0"
                  }`}
                />
              </Link>

              <Button
                variant="outline"
                className="hidden sm:inline-flex text-black border-gray-200 hover:border-primary-500 hover:bg-primary-50 rounded-lg px-4 py-2 text-sm font-medium h-9 gap-1.5 transition-all"
              >
                <Zap className="h-4 w-4" />
                Create Deal
              </Button>

              <Button className="bg-primary hover:bg-primary-600 text-white rounded-lg px-4 py-2 text-sm font-medium h-9 gap-1.5 shadow-md hover:shadow-lg transition-all hidden sm:inline-flex">
                <Store className="h-4 w-4" />
                Create Store
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-lg h-9 w-9"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/logos/bazaar_logo_blue.png"
                    alt="Bazaar"
                    width={100}
                    height={40}
                    className="h-5 w-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg h-9 w-9"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            {item.label}
                          </div>
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all ml-4"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-gray-400">
                                {dropItem.icon}
                              </span>
                              <span>{dropItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-gray-400">{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2 h-11"
                    >
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 h-11"
                  >
                    <Zap className="h-4 w-4" />
                    Create Deal
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary-600 text-white justify-center gap-2 h-11 shadow-md">
                    <Store className="h-4 w-4" />
                    Create Store
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">
                    © 2026 Bazaar. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
