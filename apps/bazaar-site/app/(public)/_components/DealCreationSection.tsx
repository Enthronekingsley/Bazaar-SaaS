import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Label } from "@repo/ui/components/ui/label";
import {
  Zap,
  Shield,
  Link2,
  Mail,
  Copy,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  FileText,
  Share2,
  Smartphone,
  Users,
} from "lucide-react";
import { SiWhatsapp, SiTelegram, SiGmail } from "react-icons/si";

const DealCreationSection = () => {
  const steps = [
    {
      number: 1,
      title: "Create deal",
      description: "Enter item details, price, and terms",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      number: 2,
      title: "Share link",
      description: "Get a unique deal link to share anywhere",
      icon: Link2,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      number: 3,
      title: "Buyer pays",
      description: "Funds held securely in escrow",
      icon: Shield,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      number: 4,
      title: "Complete transaction",
      description: "Delivery confirmed, funds released",
      icon: CheckCircle,
      color: "text-primary-900",
      bg: "bg-primary-100",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-purple-100 text-purple-700 border-purple-200 rounded-full">
            ✨ Unique to Bazaar
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Secure deals without a store
          </h2>
          <p className="text-xl text-gray-600">
            Create an instant escrow deal between any two people. No store
            needed. Perfect for buying from strangers, freelancing, or any
            person-to-person transaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 border-2 border-gray-200 bg-white shadow-xl rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Create new deal
                </h3>
              </div>
              <Badge className="bg-purple-600 text-white">Instant escrow</Badge>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-sm font-medium">
                  Item title
                </Label>
                <Input
                  id="title"
                  readOnly
                  placeholder="e.g., iPhone 15 Pro - 256GB Gold"
                  className="mt-1 border-gray-300 focus-visible:ring-0 cursor-default"
                  defaultValue="iPhone 15 Pro - 256GB Gold"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  readOnly
                  placeholder="Describe the item..."
                  className="mt-1 border-gray-300 focus-visible:ring-0 cursor-default h-20"
                  defaultValue="Like new condition, bought 2 months ago. Includes original box and charger."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-sm font-medium">
                    Price ($)
                  </Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="price"
                      readOnly
                      type="number"
                      className="pl-8 border-gray-300 focus-visible:ring-0 cursor-default"
                      defaultValue="899"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="delivery" className="text-sm font-medium">
                    Delivery terms
                  </Label>
                  <Input
                    id="delivery"
                    readOnly
                    placeholder="e.g., 3-5 days"
                    className="mt-1 border-gray-300 focus-visible:ring-0 cursor-default"
                    defaultValue="3-5 business days"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="terms" className="text-sm font-medium">
                  Terms & conditions
                </Label>
                <Textarea
                  id="terms"
                  readOnly
                  placeholder="Any special terms..."
                  className="mt-1 border-gray-300 focus-visible:ring-0 cursor-default h-16"
                  defaultValue="Item sold as described. Buyer has 48h to inspect after delivery."
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Buyer email
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    readOnly
                    type="email"
                    placeholder="buyer@example.com"
                    className="pl-8 border-gray-300 focus-visible:ring-0 cursor-default"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Buyer will receive deal details via email
                </p>
              </div>

              <Button
                disabled
                className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6 mt-4 group"
              >
                <Zap className="w-5 h-5 mr-2" />
                Create instant deal
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 border-2 border-purple-200 bg-linear-to-br from-purple-50 to-white shadow-xl rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-gray-900">
                  Your deal is ready!
                </h4>
              </div>

              <div className="bg-white p-4 rounded-xl border border-purple-100 mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">
                  DEAL LINK
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-mono text-purple-700 font-medium">
                      bazaar.com/deal/ip15-abc123
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full h-8 px-3 text-xs"
                  >
                    <Copy className="w-3 h-3 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <p className="text-xs font-medium text-gray-600 mb-3">
                Share via
              </p>
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-green-200 hover:bg-green-50 text-green-700"
                >
                  <SiWhatsapp className="w-4 h-4 mr-1" /> WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-blue-200 hover:bg-blue-50 text-blue-700"
                >
                  <SiTelegram className="w-4 h-4 mr-1" /> Telegram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-red-200 hover:bg-red-50 text-red-700"
                >
                  <SiGmail className="w-4 h-4 mr-1" /> Gmail
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-gray-200"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <p className="text-xs font-medium">
                    Email sent to john.doe@example.com
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                  <p className="font-medium text-gray-800">
                    🔐 Deal token: BZR-8294-7F2D
                  </p>
                  <p className="mt-1">
                    Click to join secure deal: bazaar.com/deal/ip15-abc123
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-200 bg-white shadow-lg rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-3">Deal preview</h4>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-gray-900">
                      iPhone 15 Pro - 256GB Gold
                    </p>
                    <p className="text-sm text-gray-600">Like new, with box</p>
                  </div>
                  <Badge className="bg-green-600 text-white">Active</Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-bold text-purple-600">$899</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Delivery</p>
                    <p>3-5 business days</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-green-600" />
                      <span className="text-gray-600">Escrow protected</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      <span className="text-gray-600">48h inspection</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            How instant deals work
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="p-5 border-2 border-gray-200 bg-white relative"
              >
                <div className="absolute top-0 left-0 w-8 h-8 bg-purple-600 text-white rounded-br-2xl flex items-start justify-start shadow-inner">
                  <span className="text-xs font-bold ml-3 mt-2">
                    {step.number}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <div
                    className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 border-2 border-gray-200 bg-white hover:border-purple-200 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold">Buying from a stranger</h4>
            </div>
            <p className="text-sm text-gray-600">
              Found a great deal on Facebook Marketplace? Create a deal instead
              of sending cash. Money held until you receive the item.
            </p>
          </Card>

          <Card className="p-6 border-2 border-gray-200 bg-white hover:border-purple-200 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-semibold">Freelance deposits</h4>
            </div>
            <p className="text-sm text-gray-600">
              Client wants to secure your services? Create a deal for the
              deposit. Funds release when you deliver the work.
            </p>
          </Card>

          <Card className="p-6 border-2 border-gray-200 bg-white hover:border-purple-200 transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-semibold">Group purchases</h4>
            </div>
            <p className="text-sm text-gray-600">
              Collecting money for a group gift? Create a deal so everyone's
              contribution is protected until the purchase is complete.
            </p>
          </Card>
        </div>

        <Card className="p-8 border-2 border-purple-100 bg-linear-to-r from-purple-50 to-white rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No store? No problem.
              </h3>
              <p className="text-gray-600 mb-4">
                Bazaar Instant Deals bring escrow protection to any transaction
                between two people. No store setup, no inventory, no commitment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">
                    Create a deal in under 30 seconds
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">
                    Share a single link - no signup needed for buyer
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">
                    Email notifications and deal tokens for security
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">
                    Same escrow protection as our full stores
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-black text-purple-600">30s</p>
                <p className="text-xs text-gray-600">to create a deal</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-black text-purple-600">100%</p>
                <p className="text-xs text-gray-600">protection</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-black text-purple-600">✓</p>
                <p className="text-xs text-gray-600">No store needed</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-black text-purple-600">🔒</p>
                <p className="text-xs text-gray-600">Escrow included</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-16">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
            Create your first instant deal
            <Zap className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Free to create • Only pay when deal succeeds
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealCreationSection;
