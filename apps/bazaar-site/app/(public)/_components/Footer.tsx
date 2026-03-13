import Link from "next/link";
import Image from "next/image";
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiGithub,
  SiX,
} from "react-icons/si";
import { Heart } from "lucide-react";
import { SlSocialGoogle, SlSocialLinkedin } from "react-icons/sl";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Updates", href: "/updates" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Social sellers", href: "/solutions/social-sellers" },
        { label: "Small businesses", href: "/solutions/small-businesses" },
        { label: "Developers", href: "/developers" },
        { label: "API", href: "/api" },
        { label: "Docs", href: "/docs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Help center", href: "/help" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Legal", href: "/legal" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: SlSocialGoogle,
      href: "https://gmail.com/bazaar",
      label: "Gmail",
    },
    {
      icon: SiX,
      href: "https://twitter.com/bazaar",
      label: "X",
    },
    {
      icon: SlSocialLinkedin,
      href: "https://linkedin.com/company/bazaar",
      label: "LinkedIn",
    },
    {
      icon: SiFacebook,
      href: "https://facebook.com/bazaar",
      label: "Facebook",
    },
    {
      icon: SiInstagram,
      href: "https://instagram.com/bazaar",
      label: "Instagram",
    },
    { icon: SiYoutube, href: "https://youtube.com/bazaar", label: "YouTube" },
    { icon: SiGithub, href: "https://github.com/bazaar", label: "GitHub" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/bazaar_logo_black.png"
                  alt="Bazaar"
                  width={120}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-gray-400 mb-4 max-w-xs">
                Turn social chats into secure transactions. The first escrow and
                store infrastructure for social sellers.
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Get updates
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-lg h-9 text-sm"
                  />
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg h-9 px-4 text-sm whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>🔒 SSL Secure</span>
                  <span>•</span>
                  <span>💰 Escrow Protected</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>✓ PCI Compliant</span>
                  <span>•</span>
                  <span>✓ GDPR Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Bazaar. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 hover:text-gray-400"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-400"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-gray-500 hover:text-gray-400"
              >
                Cookies
              </Link>
              <Link
                href="/sitemap"
                className="text-xs text-gray-500 hover:text-gray-400"
              >
                Sitemap
              </Link>
            </div>

            <p className="text-xs text-gray-600 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
              for social sellers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
