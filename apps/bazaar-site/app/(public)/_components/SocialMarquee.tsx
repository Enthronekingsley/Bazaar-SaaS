"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiTelegram,
} from "react-icons/si";

const SocialMarquee = () => {
  const platforms = [
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      users: "2B+",
      useCase: "Product catalogs, order updates",
      description: "Chats → structured orders",
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      users: "1.4B+",
      useCase: "Shop posts, DM checkout",
      description: "DMs → trackable sales",
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      users: "2.9B+",
      useCase: "Marketplace, groups",
      description: "Groups → escrow protection",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      color: "text-black",
      bgColor: "bg-gray-50",
      users: "1B+",
      useCase: "Product videos, bio links",
      description: "Viral videos → revenue",
    },
    {
      name: "Telegram",
      icon: SiTelegram,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      users: "700M+",
      useCase: "Channels, broadcast lists",
      description: "Subscribers → checkout",
    },
  ];

  const marqueeItems = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Sell where your customers already are
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto font-medium">
            Bazaar works seamlessly across the world's largest social platforms.
            Turn conversations into sales on the apps your customers use every
            day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          <Card className="p-6 text-center border-0 bg-linear-to-br from-green-50 to-green-100/50 shadow-md">
            <SiWhatsapp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">2B+</p>
            <p className="text-sm font-medium text-gray-600">WhatsApp users</p>
          </Card>
          <Card className="p-6 text-center border-0 bg-linear-to-br from-pink-50 to-pink-100/50 shadow-md">
            <SiInstagram className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">1.4B+</p>
            <p className="text-sm font-medium text-gray-600">Instagram users</p>
          </Card>
          <Card className="p-6 text-center border-0 bg-linear-to-br from-blue-50 to-blue-100/50 shadow-md">
            <SiFacebook className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">2.9B+</p>
            <p className="text-sm font-medium text-gray-600">Facebook users</p>
          </Card>
          <Card className="p-6 text-center border-0 bg-linear-to-br from-gray-50 to-gray-100/50 shadow-md">
            <SiTiktok className="w-8 h-8 text-black mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">1B+</p>
            <p className="text-sm font-medium text-gray-600">TikTok users</p>
          </Card>
          <Card className="p-6 text-center border-0 bg-linear-to-br from-blue-50 to-blue-100/50 shadow-md">
            <SiTelegram className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">700M+</p>
            <p className="text-sm font-medium text-gray-600">Telegram users</p>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white to-transparent z-10"></div>

          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-6 py-4">
              {marqueeItems.map((platform, index) => (
                <Card
                  key={index}
                  className={`inline-block w-80 p-6 border-2 hover:shadow-xl transition-all duration-300 ${platform.bgColor} border-gray-200 hover:border-gray-300 group-hover:animate-pause`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-white shadow-md ${platform.color}`}
                    >
                      <platform.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-extrabold text-gray-900 text-lg">
                          {platform.name}
                        </p>
                        <span className="text-sm font-black text-gray-700 bg-white px-2 py-0.5 rounded-full shadow-sm">
                          {platform.users}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        {platform.useCase}
                      </p>
                      <p className="text-xs text-gray-600">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-base font-semibold text-gray-700 mb-6">
            Join{" "}
            <span className="font-black text-primary-900">10,000+ sellers</span>{" "}
            already using Bazaar
          </p>
          <Button className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-10 py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300">
            Start selling across all platforms
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialMarquee;
