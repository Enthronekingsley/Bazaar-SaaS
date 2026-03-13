import { Avatar, AvatarFallback } from "@repo/ui/components/ui/avatar";
import { Progress } from "@repo/ui/components/ui/progress";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import {
  MessageCircle,
  Shield,
  CreditCard,
  Package,
  CheckCircle,
  Clock,
  ArrowRight,
  Plus,
  Minus,
  TrendingUp,
  TrendingDown,
  Store,
  MoreVertical,
  Search,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary-900" />
            <span className="text-xs text-gray-600">Escrow protection</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-primary-900" />
            <span className="text-xs text-gray-600">Dispute resolution</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-primary-900" />
            <span className="text-xs text-gray-600">Chat to commerce</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-primary-900" />
            <span className="text-xs text-gray-600">Secure payments</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Turn social chats into{" "}
            <span className="text-primary-900">secure transactions</span>
          </h1>

          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            The complete commerce infrastructure for social sellers. Accept
            payments, manage inventory, and protect every transaction with
            built-in escrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
            <Button
              size="lg"
              className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-6 py-5 text-sm"
            >
              Create your store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 py-5 text-sm border-2"
            >
              Create Deal
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-8">
          <Card className="p-0 border-2 border-gray-200 shadow-md rounded-xl bg-white overflow-hidden">
            <div className="bg-[#075E54] text-white p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-xs">WhatsApp Business</p>
                  <p className="text-[10px] text-green-200">
                    GadgetHaven Store • Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5" />
                <MoreVertical className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-3 space-y-3 bg-[#ECE5DD]">
              <div className="flex items-start gap-1.5">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-gray-400 text-white text-[10px]">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
                  <p className="text-xs">
                    Hi, interested in iPhone 15 Pro gold?
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    10:24 AM ✓✓
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-1.5 justify-end">
                <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                  <p className="text-xs text-gray-800">Yes, available!</p>

                  <div className="bg-white p-1.5 rounded-lg mt-1.5 border border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg">
                        📱
                      </div>
                      <div>
                        <p className="font-semibold text-xs">iPhone 15 Pro</p>
                        <p className="text-[10px] text-gray-500">
                          Gold • 256GB
                        </p>
                        <p className="text-sm font-bold text-primary-900">
                          $1,299
                        </p>
                        <div className="flex items-center gap-1 mt-0.5 bg-green-50 p-0.5 rounded">
                          <Shield className="w-2.5 h-2.5 text-green-600" />
                          <span className="text-[8px] text-green-700">
                            Escrow
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">10:25 AM ✓✓✓</p>
                </div>
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-[#075E54] text-white text-[10px]">
                    GS
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-start gap-1.5">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-gray-400 text-white text-[10px]">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
                  <p className="text-xs">I'll take it. How to pay securely?</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    10:26 AM ✓✓
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-1.5 justify-end">
                <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                  <p className="text-xs text-gray-800">
                    Perfect! Secure checkout:
                  </p>
                  <div className="bg-primary-50 p-1.5 rounded-lg mt-1.5 border border-primary-200">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-primary-700" />
                      <span className="text-[8px] font-mono text-primary-800">
                        bazaar.com/checkout/123
                      </span>
                    </div>
                    <p className="text-[8px] text-gray-600 mt-0.5">
                      🔒 Escrow until delivery
                    </p>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">10:27 AM ✓✓✓</p>
                </div>
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-[#075E54] text-white text-[10px]">
                    GS
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="p-1.5 border-t border-gray-100 bg-white flex items-center gap-1.5">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
              <span className="text-[10px] text-gray-500">Buyer typing...</span>
            </div>
          </Card>

          <Card className="p-4 border-2 border-gray-200 shadow-md rounded-xl bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-linear-to-br from-primary-900 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-base shadow">
                  G
                </div>
                <div>
                  <p className="font-bold text-sm">GadgetHaven Store</p>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1">
                    <Store className="w-2.5 h-2.5" />
                    gadgethaven.bazaar.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="bg-green-600 text-white text-[10px] px-2 py-0.5">
                  Active
                </Badge>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreVertical className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-1">
              <Badge
                variant="outline"
                className="bg-primary-50 text-primary-700 border-primary-200 text-[10px] px-2 py-0.5"
              >
                Dashboard
              </Badge>
              <Badge
                variant="outline"
                className="hover:bg-gray-50 text-[10px] px-2 py-0.5"
              >
                Add
              </Badge>
              <Badge
                variant="outline"
                className="hover:bg-gray-50 text-[10px] px-2 py-0.5"
              >
                Products
              </Badge>
              <Badge
                variant="outline"
                className="hover:bg-gray-50 text-[10px] px-2 py-0.5"
              >
                Orders
              </Badge>
              <Badge
                variant="outline"
                className="hover:bg-gray-50 text-[10px] px-2 py-0.5"
              >
                Inventory
              </Badge>
              <Badge
                variant="outline"
                className="hover:bg-gray-50 text-[10px] px-2 py-0.5"
              >
                Analytics
              </Badge>
              <Badge
                variant="outline"
                className="hover:bg-gray-50 text-[10px] px-2 py-0.5"
              >
                Customers
              </Badge>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-sm">Inventory Management</h3>
                <p className="text-[9px] text-gray-500">Track stock levels</p>
              </div>

              <div className="grid grid-cols-4 gap-1.5 mb-3">
                <div className="bg-gray-50 p-1.5 rounded">
                  <p className="text-[8px] text-gray-500">Value</p>
                  <p className="text-sm font-bold">$45.8k</p>
                </div>
                <div className="bg-gray-50 p-1.5 rounded">
                  <p className="text-[8px] text-gray-500">Turnover</p>
                  <p className="text-sm font-bold">4.2</p>
                  <p className="text-[6px] text-gray-400">/quarter</p>
                </div>
                <div className="bg-gray-50 p-1.5 rounded">
                  <p className="text-[8px] text-gray-500">Stockout</p>
                  <p className="text-sm font-bold">2.3%</p>
                  <p className="text-[6px] text-gray-400">low is better</p>
                </div>
                <div className="bg-gray-50 p-1.5 rounded">
                  <p className="text-[8px] text-gray-500">Avg Days</p>
                  <p className="text-sm font-bold">45</p>
                  <p className="text-[6px] text-gray-400">in inventory</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 mb-3">
                <div className="flex items-center gap-1 bg-green-50 p-1 rounded">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <div>
                    <p className="text-[9px] font-medium">+12.4%</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-red-50 p-1 rounded">
                  <TrendingDown className="w-3 h-3 text-red-600" />
                  <div>
                    <p className="text-[9px] font-medium">-0.8%</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-red-50 p-1 rounded">
                  <TrendingDown className="w-3 h-3 text-red-600" />
                  <div>
                    <p className="text-[9px] font-medium">-1.2%</p>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-xs font-semibold mb-1">Quick Stock Update</p>
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-xl">
                      🎧
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-xs">
                        Bluetooth Headphones
                      </p>
                      <p className="text-[8px] text-gray-500">WH-2024-BLK</p>
                      <div className="grid grid-cols-3 gap-2 mt-1">
                        <div>
                          <p className="text-[8px] text-gray-500">Current</p>
                          <p className="text-sm font-bold">45</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-gray-500">Adjust</p>
                          <div className="flex items-center gap-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-5 w-5 rounded-full"
                            >
                              <Minus className="h-2.5 w-2.5" />
                            </Button>
                            <span className="text-xs">0</span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-5 w-5 rounded-full"
                            >
                              <Plus className="h-2.5 w-2.5" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <p className="text-[8px] text-gray-500">New</p>
                          <p className="text-sm font-bold text-green-600">
                            +45
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold">Inventory Alerts</p>
                  <Badge className="bg-red-600 text-white text-[8px] px-1.5">
                    3
                  </Badge>
                </div>

                <div className="bg-amber-50 p-2 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-medium">Organic Cotton Tee</p>
                    <Badge variant="outline" className="text-[8px] h-4 px-1">
                      7 days
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px]">
                      Stock: <span className="font-bold">8</span> / 15
                    </p>
                    <Button
                      size="sm"
                      className="bg-amber-600 h-5 text-[8px] px-2 rounded-full"
                    >
                      Reorder
                    </Button>
                  </div>
                  <Progress value={53} className="h-1 mt-1" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-2 border-gray-200 shadow-md rounded-xl bg-white">
            <div className="flex items-center gap-1.5 mb-3">
              <Shield className="w-4 h-4 text-primary-900" />
              <span className="text-sm font-semibold">Escrow Protection</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center text-[8px] font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">Buyer sends payment</p>
                    <Badge className="bg-green-600 text-white text-[8px] px-1.5">
                      $1,299
                    </Badge>
                  </div>
                  <p className="text-[9px] text-gray-500">Funds in escrow</p>
                  <div className="mt-1 bg-primary-50 p-1.5 rounded-lg border border-primary-100">
                    <div className="flex items-center gap-1">
                      <CreditCard className="w-3 h-3 text-primary-700" />
                      <span className="text-[8px]">
                        Confirmed • Awaiting delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-3 h-3 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center text-[8px] font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium">Seller ships product</p>
                  <p className="text-[9px] text-gray-500">
                    USPS 9405 5112 3456
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Package className="w-3 h-3 text-blue-600" />
                    <span className="text-[8px]">Delivery: 3-5 days</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-3 h-3 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center text-[8px] font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">Buyer confirms</p>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      <span className="text-[8px] text-amber-700">48h</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-500">Auto-release timer</p>
                  <div className="mt-1">
                    <Progress value={75} className="h-1" />
                  </div>
                </div>
              </div>

              <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <p className="text-[9px] text-green-700">
                    Payment released after confirmation
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Active escrows</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-600">Total in escrow</span>
                <span className="font-bold text-green-600">$15,820</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          <Card className="p-3 border-0 bg-primary-50">
            <p className="text-[10px] text-primary-700">Total protected</p>
            <p className="text-xl font-bold text-primary-900">$2.4M</p>
          </Card>
          <Card className="p-3 border-0 bg-green-50">
            <p className="text-[10px] text-green-700">Successful escrows</p>
            <p className="text-xl font-bold text-green-700">8,942</p>
          </Card>
          <Card className="p-3 border-0 bg-amber-50">
            <p className="text-[10px] text-amber-700">Active stores</p>
            <p className="text-xl font-bold text-amber-700">1,847</p>
          </Card>
          <Card className="p-3 border-0 bg-purple-50">
            <p className="text-[10px] text-purple-700">Dispute rate</p>
            <p className="text-xl font-bold text-purple-700">0.8%</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
