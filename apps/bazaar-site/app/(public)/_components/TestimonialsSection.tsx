"use client";

import { useState, useEffect } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import Image from "next/image";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Store,
  Zap,
} from "lucide-react";
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiTelegram,
} from "react-icons/si";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: "Amina Diallo",
      role: "Fashion Seller",
      platform: "WhatsApp & Instagram",
      platformIcon: SiWhatsapp,
      platformColor: "text-green-600",
      avatar: "AD",
      image: "👩🏾",
      content:
        "I used to lose track of orders constantly on WhatsApp. Now with Bazaar, every sale is organized, payments are secure, and my customers trust me more. I've doubled my sales in 3 months!",
      rating: 5,
      stats: {
        sales: "+124%",
        disputes: "0",
        timeframe: "3 months",
      },
      store: "Amina's Fashion",
      deal: null,
    },
    {
      name: "Carlos Mendez",
      role: "Electronics Reseller",
      platform: "Facebook & Telegram",
      platformIcon: SiFacebook,
      platformColor: "text-blue-600",
      avatar: "CM",
      image: "👨🏽",
      content:
        "Bazaar's escrow system changed everything. I was always nervous about selling expensive phones to strangers. Now buyers pay securely, and I only ship when payment is confirmed in escrow. No more scams!",
      rating: 5,
      stats: {
        sales: "+87%",
        disputes: "2 resolved",
        timeframe: "6 months",
      },
      store: "TechHaven",
      deal: null,
    },
    {
      name: "Priya Sharma",
      role: "Jewelry Designer",
      platform: "Instagram",
      platformIcon: SiInstagram,
      platformColor: "text-pink-600",
      avatar: "PS",
      image: "👩🏽",
      content:
        "My Instagram DMs were chaotic. Customers asking prices, me sending bank details, tracking payments manually. Bazaar gave me a professional storefront in minutes. Now I just share my link and get paid securely.",
      rating: 5,
      stats: {
        sales: "+156%",
        disputes: "0",
        timeframe: "4 months",
      },
      store: "Priya's Jewels",
      deal: null,
    },
    {
      name: "John Okafor",
      role: "Freelance Photographer",
      platform: "Instant Deals",
      platformIcon: Zap,
      platformColor: "text-purple-600",
      avatar: "JO",
      image: "👨🏾",
      content:
        "I don't need a full store for my freelance work. I just create an Instant Deal for each client. They pay into escrow, I deliver the photos, they confirm, and I get paid. No more chasing payments!",
      rating: 5,
      stats: {
        sales: "+200%",
        disputes: "0",
        timeframe: "2 months",
      },
      store: null,
      deal: "15+ deals completed",
    },
    {
      name: "Sarah Chen",
      role: "Skincare Brand Owner",
      platform: "TikTok & Instagram",
      platformIcon: SiTiktok,
      platformColor: "text-black",
      avatar: "SC",
      image: "👩🏻",
      content:
        "My products went viral on TikTok and I was overwhelmed with DMs. Bazaar saved me. I added all my products to my store, shared the link in my bio, and now everything is automated. Best decision ever!",
      rating: 5,
      stats: {
        sales: "+312%",
        disputes: "1 resolved",
        timeframe: "2 months",
      },
      store: "Glow by Sarah",
      deal: null,
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Watch Collector",
      platform: "Telegram",
      platformIcon: SiTelegram,
      platformColor: "text-blue-500",
      avatar: "MA",
      image: "👨🏻",
      content:
        "I sell luxury watches to collectors in private Telegram groups. Bazaar's Instant Deals are perfect. I create a deal, share the link in the group, and the transaction is secure. My buyers love the protection.",
      rating: 5,
      stats: {
        sales: "+65%",
        disputes: "0",
        timeframe: "5 months",
      },
      store: null,
      deal: "23 deals completed",
    },
  ];

  const buyers = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  if (!activeTestimonial) return null;

  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary-100 text-primary-700 border-primary-200 rounded-full">
            Trusted by sellers worldwide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Loved by social sellers
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of sellers who've transformed their social commerce
            with Bazaar. Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Card className="p-5 text-center border-0 bg-linear-to-br from-primary-50 to-primary-100/50">
            <p className="text-3xl font-black text-primary-900">10k+</p>
            <p className="text-xs text-gray-600">Active sellers</p>
          </Card>
          <Card className="p-5 text-center border-0 bg-linear-to-br from-green-50 to-green-100/50">
            <p className="text-3xl font-black text-green-700">$2.4M</p>
            <p className="text-xs text-gray-600">Protected sales</p>
          </Card>
          <Card className="p-5 text-center border-0 bg-linear-to-br from-purple-50 to-purple-100/50">
            <p className="text-3xl font-black text-purple-700">0.8%</p>
            <p className="text-xs text-gray-600">Dispute rate</p>
          </Card>
          <Card className="p-5 text-center border-0 bg-linear-to-br from-amber-50 to-amber-100/50">
            <p className="text-3xl font-black text-amber-700">4.9/5</p>
            <p className="text-xs text-gray-600">Seller rating</p>
          </Card>
        </div>

        <div className="relative mb-16">
          <Card className="p-8 md:p-10 border-2 border-gray-200 bg-white shadow-2xl rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl"></div>

            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-100 opacity-50" />

            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary-100 to-purple-100 flex items-center justify-center text-4xl border-4 border-white shadow-xl">
                      {activeTestimonial.image}
                    </div>
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white`}
                    >
                      <activeTestimonial.platformIcon
                        className={`w-4 h-4 ${activeTestimonial.platformColor}`}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {activeTestimonial.role}
                  </p>

                  <div className="flex items-center gap-1 mt-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <Badge
                    className={`${activeTestimonial.platformColor.replace("text", "bg")} bg-opacity-20 ${activeTestimonial.platformColor} border-0 px-3 py-1 text-xs`}
                  >
                    <activeTestimonial.platformIcon className="w-3 h-3 mr-1 inline" />
                    {activeTestimonial.platform}
                  </Badge>

                  {activeTestimonial.store && (
                    <div className="mt-3 flex items-center gap-1 text-xs text-primary-900 bg-primary-50 px-3 py-1 rounded-full">
                      <Store className="w-3 h-3" />
                      <span>{activeTestimonial.store}</span>
                    </div>
                  )}
                  {activeTestimonial.deal && (
                    <div className="mt-3 flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      <Zap className="w-3 h-3" />
                      <span>{activeTestimonial.deal}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                    "{activeTestimonial.content}"
                  </p>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500">Sales growth</p>
                      <p className="text-lg font-bold text-green-600">
                        {activeTestimonial.stats.sales}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500">Disputes</p>
                      <p className="text-lg font-bold text-gray-900">
                        {activeTestimonial.stats.disputes}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500">Timeframe</p>
                      <p className="text-lg font-bold text-gray-900">
                        {activeTestimonial.stats.timeframe}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex -space-x-2">
                      {buyers.map((src, i) => (
                        <Image
                          key={i}
                          src={src}
                          alt="Buyer avatar"
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-gray-900">
                        1,200+
                      </span>{" "}
                      sellers in {activeTestimonial.platform.split("&")[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition border border-gray-200"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoplay(false);
                setActiveIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === activeIndex
                  ? "w-8 bg-primary-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          More success stories
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-6 border-2 border-gray-200 bg-white hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-100 to-purple-100 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <testimonial.platformIcon
                      className={`w-4 h-4 ${testimonial.platformColor}`}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                "{testimonial.content.substring(0, 100)}..."
              </p>

              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-green-600">
                  {testimonial.stats.sales} growth
                </span>
                {testimonial.store ? (
                  <span className="text-xs bg-primary-50 text-primary-900 px-2 py-0.5 rounded-full">
                    Store
                  </span>
                ) : (
                  <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">
                    Deals
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Join{" "}
            <span className="font-bold text-primary-900">10,000+ sellers</span>{" "}
            who've transformed their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-8 py-6 text-base">
              Create your store
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-2"
            >
              Try Instant Deals
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60">
          <SiWhatsapp className="w-8 h-8 text-gray-400" />
          <SiInstagram className="w-8 h-8 text-gray-400" />
          <SiFacebook className="w-8 h-8 text-gray-400" />
          <SiTiktok className="w-8 h-8 text-gray-400" />
          <SiTelegram className="w-8 h-8 text-gray-400" />
          <MessageCircle className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
