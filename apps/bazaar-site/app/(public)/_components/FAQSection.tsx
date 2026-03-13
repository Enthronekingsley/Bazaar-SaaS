"use client";

import { useState } from "react";
import { Badge } from "@repo/ui/components/ui/badge";
import { Input } from "@repo/ui/components/ui/input";
import { Card } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";
import {
  Shield,
  MessageCircle,
  Clock,
  HelpCircle,
  Mail,
  Search,
  Users,
  Store,
  Lock,
  Truck,
  Scale,
  Globe,
  CheckCircle,
  Package,
  Zap,
  Link2,
} from "lucide-react";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      icon: Store,
      color: "text-primary-900",
      bg: "bg-primary-100",
      questions: [
        {
          q: "How do I create a store?",
          a: "Creating a store takes less than 60 seconds. Sign up with your email, add your store name, and you're ready to start adding products. No technical skills needed.",
        },
        {
          q: "Can I sell on WhatsApp and Instagram?",
          a: "Yes! Bazaar is built specifically for social sellers. You get shareable links for your store and products that you can post on WhatsApp, Instagram, Facebook, Telegram, or any other platform.",
        },
        {
          q: "Do I need a website to use Bazaar?",
          a: "Not at all. Bazaar gives you a beautiful storefront that works on every device. Just share your store link and start selling immediately.",
        },
        {
          q: "How much does it cost?",
          a: "Bazaar offers a free plan to get started. Paid plans start at $9/month and include additional features like advanced analytics, priority support, and lower transaction fees.",
        },
      ],
    },
    {
      category: "Instant Deals",
      icon: Zap,
      color: "text-purple-600",
      bg: "bg-purple-100",
      questions: [
        {
          q: "What are Instant Deals?",
          a: "Instant Deals allow any two people to create a secure escrow transaction without a store. Perfect for one-time purchases, freelancing, or buying from strangers online.",
        },
        {
          q: "How do I create a deal?",
          a: "Click 'Create Instant Deal', enter item details, price, delivery terms, and the buyer's email. A unique deal link is generated instantly. Share it with the buyer and they can pay securely.",
        },
        {
          q: "Does the buyer need a Bazaar account?",
          a: "No! Buyers can join a deal using the link and pay without creating an account. They'll receive email notifications with deal status updates and a secure token.",
        },
        {
          q: "What's the deal token for?",
          a: "The token is a unique code sent to the buyer's email. It validates their identity and gives them access to the deal. This adds an extra layer of security.",
        },
        {
          q: "How is this different from a store?",
          a: "Stores are for regular sellers with inventory and products. Instant Deals are for one-off transactions between individuals — no store setup, no catalog, no commitment.",
        },
        {
          q: "Can I create a deal if I'm not a seller?",
          a: "Absolutely! Anyone can create a deal — whether you're selling one item, collecting group payments, or securing a freelance deposit.",
        },
      ],
    },
    {
      category: "Escrow & Payments",
      icon: Shield,
      color: "text-green-600",
      bg: "bg-green-100",
      questions: [
        {
          q: "How does escrow work?",
          a: "When a buyer pays, funds are held securely by Bazaar. The seller ships the product, and once the buyer confirms delivery, we release the payment to the seller. This protects both parties.",
        },
        {
          q: "When does the seller receive payment?",
          a: "Sellers receive payment immediately after the buyer confirms delivery. If the buyer doesn't confirm within 48 hours of delivery, funds are automatically released to the seller.",
        },
        {
          q: "What payment methods are accepted?",
          a: "Buyers can pay via bank transfers, mobile money, and popular local payment methods depending on their region. All payments go through escrow.",
        },
        {
          q: "Are there any transaction fees?",
          a: "Bazaar charges a small transaction fee (5%) on successful sales. There are no fees for listing products, creating stores, or creating deals.",
        },
      ],
    },
    {
      category: "Disputes & Protection",
      icon: Scale,
      color: "text-purple-600",
      bg: "bg-purple-100",
      questions: [
        {
          q: "What happens if there is a dispute?",
          a: "If a buyer and seller can't resolve an issue, either party can open a dispute. Our team reviews the case, including messages, tracking info, and evidence, and makes a fair decision.",
        },
        {
          q: "How are buyers protected?",
          a: "Buyers are protected because payment is only released when they confirm delivery. If an item never arrives or isn't as described, they can open a dispute and get a refund.",
        },
        {
          q: "How are sellers protected?",
          a: "Sellers are protected from fraudulent chargebacks and false claims. Once tracking shows delivery and the confirmation period passes, payment is guaranteed.",
        },
        {
          q: "What if an item is lost in shipping?",
          a: "If tracking shows the item is lost, both buyer and seller are protected. The buyer gets a refund, and the seller is compensated through our seller protection program.",
        },
      ],
    },
    {
      category: "Selling & Products",
      icon: Package,
      color: "text-blue-600",
      bg: "bg-blue-100",
      questions: [
        {
          q: "How do I add products to my store?",
          a: "From your dashboard, click 'Add Product'. Upload photos, set a price, write a description, and add inventory. Your product is live instantly with a shareable link.",
        },
        {
          q: "Can I manage inventory?",
          a: "Yes! Bazaar tracks stock levels automatically. You'll get alerts when items are low, and products will show as 'out of stock' when inventory reaches zero.",
        },
        {
          q: "How do I share my products?",
          a: "Every product has its own unique link. Copy it and paste it anywhere — WhatsApp, Instagram Stories, Facebook posts, Telegram channels, or even SMS.",
        },
        {
          q: "Can I customize my store?",
          a: "Absolutely. You can upload your logo, choose colors, arrange products, and customize your store URL. Paid plans offer even more customization options.",
        },
      ],
    },
    {
      category: "Orders & Shipping",
      icon: Truck,
      color: "text-amber-600",
      bg: "bg-amber-100",
      questions: [
        {
          q: "How do I manage orders?",
          a: "Your dashboard shows all orders with status updates. Mark orders as shipped, add tracking numbers, and communicate with buyers — all in one place.",
        },
        {
          q: "Do I need to add tracking?",
          a: "While not required, adding tracking protects you as a seller. Orders with tracking are eligible for automatic payment release and seller protection.",
        },
        {
          q: "What if a buyer doesn't confirm delivery?",
          a: "After tracking shows delivered, buyers have 48 hours to confirm. If they don't, funds are automatically released to you. No action needed.",
        },
        {
          q: "Can I sell internationally?",
          a: "Yes! Bazaar supports global selling. Buyers see prices in their local currency, and you can ship anywhere. Just set your international shipping rates.",
        },
      ],
    },
  ];

  const allQuestions = faqCategories.flatMap((cat) => cat.questions);
  const popularQuestions = [
    allQuestions.find((q) => q.q.includes("Instant Deals")) || allQuestions[0],
    allQuestions.find((q) => q.q.includes("escrow work")) || allQuestions[1],
    allQuestions.find((q) => q.q.includes("dispute")) || allQuestions[2],
    allQuestions.find((q) => q.q.includes("buyer needs")) || allQuestions[3],
  ].filter(Boolean);

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary-100 text-primary-700 border-primary-200 rounded-full">
            Got questions?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about selling with Bazaar and creating
            Instant Deals. Can't find what you're looking for? We're here to
            help.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for answers..."
              className="pl-12 pr-4 py-6 rounded-full border-2 border-gray-200 focus:border-primary-900 focus:ring-0 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {popularQuestions.map((item, idx) => (
            <Card
              key={idx}
              className="p-4 border-2 border-gray-200 bg-white hover:border-purple-200 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-purple-600 mt-0.5 group-hover:scale-110 transition" />
                <p className="text-sm font-medium text-gray-900">{item?.q}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-all ${category.bg} bg-opacity-30`}
            >
              <category.icon className={`w-4 h-4 ${category.color}`} />
              <span className="text-sm font-medium text-gray-700">
                {category.category}
              </span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {faqCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 border-2 border-gray-200 bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center`}
                >
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                    <AccordionTrigger className="text-sm font-medium text-gray-900 hover:text-primary-900 py-3">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600 pb-3">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        <Card className="p-8 border-2 border-primary-100 bg-linear-to-r from-primary-50 to-white rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Can't find the answer you're looking for? Our team is here to
                help you get started with stores or Instant Deals.
              </p>
              <div className="flex gap-3">
                <Button className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact support
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-2"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live chat
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                <Clock className="w-4 h-4 text-primary-900" />
                <div>
                  <p className="text-xs font-medium">Response time</p>
                  <p className="text-xs text-gray-500">&lt; 2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                <Users className="w-4 h-4 text-primary-900" />
                <div>
                  <p className="text-xs font-medium">24/7 support</p>
                  <p className="text-xs text-gray-500">Live agents</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                <Globe className="w-4 h-4 text-primary-900" />
                <div>
                  <p className="text-xs font-medium">Multi-language</p>
                  <p className="text-xs text-gray-500">8 languages</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                <CheckCircle className="w-4 h-4 text-primary-900" />
                <div>
                  <p className="text-xs font-medium">Help center</p>
                  <p className="text-xs text-gray-500">Guides & tutorials</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Card className="p-4 border border-purple-200 bg-purple-50/30">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-purple-600" />
              <p className="font-semibold text-sm">Instant Deals tip</p>
            </div>
            <p className="text-xs text-gray-600">
              No store? No problem. Create a deal in 30 seconds and share the
              link anywhere.
            </p>
          </Card>

          <Card className="p-4 border border-green-200 bg-green-50/30">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-600" />
              <p className="font-semibold text-sm">Escrow tip</p>
            </div>
            <p className="text-xs text-gray-600">
              Funds only release when buyer confirms delivery. Both parties
              protected.
            </p>
          </Card>

          <Card className="p-4 border border-blue-200 bg-blue-50/30">
            <div className="flex items-center gap-2 mb-2">
              <Link2 className="w-4 h-4 text-blue-600" />
              <p className="font-semibold text-sm">Sharing tip</p>
            </div>
            <p className="text-xs text-gray-600">
              Deal links work everywhere — WhatsApp, Instagram, Telegram, email,
              or SMS.
            </p>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-900" />
            <span className="text-sm text-gray-600">Secure payments</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary-900" />
            <span className="text-sm text-gray-600">Data protected</span>
          </div>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary-900" />
            <span className="text-sm text-gray-600">Fair disputes</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Instant Deals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
