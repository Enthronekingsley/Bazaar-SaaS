import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Progress } from "@repo/ui/components/ui/progress";
import Image from "next/image";
import {
  AlertCircle,
  MessageCircle,
  CreditCard,
  Package,
  Ban,
  AlertTriangle,
  ArrowRight,
  Shield,
} from "lucide-react";
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiTelegram,
} from "react-icons/si";

const ProblemSection = () => {
  const problems = [
    {
      icon: MessageCircle,
      title: "Chat-based selling",
      description: "Endless DMs, missed messages, scattered conversations",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
    },
    {
      icon: CreditCard,
      title: "Manual bank transfers",
      description: "Chasing payments, typing bank details, no payment records",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
    },
    {
      icon: Package,
      title: "No order tracking",
      description: "Customers asking 'where's my order?' constantly",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
    },
    {
      icon: Shield,
      title: "No buyer protection",
      description: "Buyers fear being scammed, sellers fear chargebacks",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
    },
    {
      icon: AlertTriangle,
      title: "Scams & fraud",
      description: "Fake payments, disappearing sellers, stolen goods",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
    },
    {
      icon: Ban,
      title: "Payment disputes",
      description: "No resolution process, lost money, bad blood",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-100",
    },
  ];

  const platforms = [
    {
      icon: SiWhatsapp,
      name: "WhatsApp",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: SiInstagram,
      name: "Instagram",
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      icon: SiFacebook,
      name: "Facebook",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: SiTelegram,
      name: "Telegram",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
  ];

  const buyers = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-red-50 text-red-600 border-red-200 rounded-full">
            The Problem
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Social commerce is broken
          </h2>
          <p className="text-xl text-gray-600">
            Millions of sales happen through chaotic DMs, manual bank transfers,
            and zero protection. Every day, buyers and sellers lose money to a
            system that wasn't built for commerce.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 border-2 border-gray-200 shadow-xl bg-white rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  The reality of social selling
                </h3>
              </div>
              <Badge
                variant="outline"
                className="bg-red-50 text-red-600 border-red-200"
              >
                Live chaos
              </Badge>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex gap-2 pb-2 border-b border-gray-200">
                {platforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${platform.bg}`}
                  >
                    <platform.icon
                      className={`w-3.5 h-3.5 ${platform.color}`}
                    />
                    <span className="text-xs font-medium text-gray-700">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    B
                  </div>
                  <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      Hi, is this still available? I'll pay via bank transfer
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 min ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 justify-end">
                  <div className="bg-blue-50 p-3 rounded-xl rounded-tr-none max-w-[80%]">
                    <p className="text-sm">
                      Yes! Send to: GTBank 0123456789, Name: John Store
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 min ago</p>
                  </div>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    S
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    B
                  </div>
                  <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">Sent! Here's my screenshot</p>
                    <div className="mt-2 p-2 bg-white rounded border border-gray-200">
                      <p className="text-xs font-mono">Ref: GTB-230419-001</p>
                      <p className="text-xs text-gray-500">Amount: ₦45,000</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Just now</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-xs text-red-700 font-medium">
                    Payment not reflecting • Buyer anxious • No order record
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-gray-900">67%</p>
                <p className="text-xs text-gray-500">
                  of sellers lost money to scams
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$45B</p>
                <p className="text-xs text-gray-500">
                  lost to payment disputes yearly
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3.2M</p>
                <p className="text-xs text-gray-500">
                  reported social scams in 2024
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <Card
                key={idx}
                className={`p-5 border-2 ${problem.borderColor} hover:shadow-lg transition-all duration-300 bg-white`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl ${problem.bgColor}`}>
                    <problem.icon className={`w-5 h-5 ${problem.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {problem.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <Card className="p-5 border-2 border-gray-200 bg-white col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-red-500" />
              <h4 className="font-semibold text-sm">
                Manual transfer nightmare
              </h4>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                <span className="text-xs">Account number</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded">
                  0123456789
                </span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                <span className="text-xs">Bank</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded">
                  GTBank
                </span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                <span className="text-xs">Amount</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded">
                  ₦45,000
                </span>
              </div>
              <div className="mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-[10px] text-yellow-700">
                  ⚠️ Buyer typed wrong account number • Money lost
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-2 border-gray-200 bg-white col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-yellow-500" />
              <h4 className="font-semibold text-sm">Where's my order?</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-xs font-medium">
                    Customer: "Hello? Any update?"
                  </p>
                  <p className="text-[10px] text-gray-500">
                    12 messages • 3 days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-xs font-medium">
                    Seller: "I sent it, trust me"
                  </p>
                  <p className="text-[10px] text-gray-500">
                    No tracking number
                  </p>
                </div>
              </div>
              <Progress value={30} className="h-1" />
              <p className="text-[10px] text-red-500">Order status: Unknown</p>
            </div>
          </Card>

          <Card className="p-5 border-2 border-gray-200 bg-white col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Ban className="w-4 h-4 text-purple-500" />
              <h4 className="font-semibold text-sm">Dispute dead end</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Buyer says:</span>
                <span className="text-xs bg-red-50 px-2 py-1 rounded">
                  Never received
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Seller says:</span>
                <span className="text-xs bg-blue-50 px-2 py-1 rounded">
                  Delivered
                </span>
              </div>
              <div className="mt-2 p-2 bg-gray-100 rounded text-center">
                <p className="text-xs text-gray-500">No resolution system</p>
                <p className="text-[8px] text-gray-400">
                  Both parties lose trust and money
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-red-500/5 via-transparent to-red-500/5 rounded-3xl"></div>
          <Card className="p-8 border-2 border-red-100 bg-white/80 backdrop-blur-sm relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  The hidden cost of trust
                </h3>
                <p className="text-gray-600 mb-4">
                  Every day, millions of dollars are lost because social
                  platforms weren't built for commerce. Buyers hesitate, sellers
                  struggle, and the entire economy suffers.
                </p>
                <div className="flex items-center gap-4">
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
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">1 in 3</span>{" "}
                    buyers have been scammed
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <p className="text-3xl font-black text-red-600">67%</p>
                  <p className="text-xs text-gray-600">of sellers lost money</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <p className="text-3xl font-black text-orange-600">82%</p>
                  <p className="text-xs text-gray-600">
                    want payment protection
                  </p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <p className="text-3xl font-black text-yellow-600">91%</p>
                  <p className="text-xs text-gray-600">
                    prefer escrow services
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <p className="text-3xl font-black text-purple-600">$2.1B</p>
                  <p className="text-xs text-gray-600">
                    lost to disputes yearly
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-4">
            There's a better way. Bazaar brings structure, security, and trust
            to social commerce.
          </p>
          <Button className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-8 py-6 text-base font-semibold">
            See how we solve this
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
