import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  ArrowRight,
  MessageCircle,
  Store,
  CreditCard,
  Shield,
  Package,
  CheckCircle,
  Clock,
  Sparkles,
  Users,
  ShoppingBag,
  Truck,
  Repeat,
  ArrowLeftRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const SolutionSection = () => {
  const transformations = [
    {
      from: {
        icon: MessageCircle,
        label: "Chat",
        color: "text-orange-500",
        bg: "bg-orange-100",
      },
      to: {
        icon: Store,
        label: "Store",
        color: "text-primary-900",
        bg: "bg-primary-100",
      },
      description: "Scattered DMs become a beautiful online store",
    },
    {
      from: {
        icon: CreditCard,
        label: "Transfer",
        color: "text-red-500",
        bg: "bg-red-100",
      },
      to: {
        icon: Shield,
        label: "Escrow",
        color: "text-green-600",
        bg: "bg-green-100",
      },
      description: "Risky bank transfers become protected escrow payments",
    },
    {
      from: {
        icon: MessageCircle,
        label: "Conversation",
        color: "text-yellow-500",
        bg: "bg-yellow-100",
      },
      to: {
        icon: Package,
        label: "Order",
        color: "text-blue-600",
        bg: "bg-blue-100",
      },
      description: "Chaotic messages become structured trackable orders",
    },
    {
      from: {
        icon: Clock,
        label: "Promise",
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      to: {
        icon: Truck,
        label: "Verified delivery",
        color: "text-indigo-600",
        bg: "bg-indigo-100",
      },
      description: "Empty promises become verified delivery confirmation",
    },
  ];

  const features = [
    {
      icon: Store,
      title: "Instant online store",
      description:
        "Create a professional store in 60 seconds. No coding needed.",
      color: "text-primary-900",
      bg: "bg-primary-50",
    },
    {
      icon: Shield,
      title: "Escrow protection",
      description: "Funds held securely until buyer confirms delivery.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Package,
      title: "Order management",
      description: "Track every order from payment to delivery.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: CheckCircle,
      title: "Dispute resolution",
      description: "Fair resolution process for both buyers and sellers.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white via-primary-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary-100 text-primary-700 border-primary-200 rounded-full">
            The Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            From chaos to structured commerce
          </h2>
          <p className="text-xl text-gray-600">
            Bazaar transforms informal social selling into a professional,
            secure, and trackable commerce experience. No more DMs, no more
            manual transfers, no more uncertainty.
          </p>
        </div>

        <Card className="p-8 mb-16 border-2 border-primary-100 bg-linear-to-br from-white to-primary-50/30 shadow-xl rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300/20 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                The Bazaar transformation
              </h3>
              <p className="text-gray-600">
                We turn every painful part of social selling into something
                beautiful
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">❌</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Before: Chaos
                  </h4>
                </div>

                {transformations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-red-100 shadow-sm"
                  >
                    <div className={`p-2.5 rounded-full ${item.from.bg}`}>
                      <item.from.icon
                        className={`w-5 h-5 ${item.from.color}`}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.from.label}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.description.split(" become")[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden flex justify-center my-2">
                <ArrowLeftRight className="w-8 h-8 text-primary-900 rotate-90" />
              </div>

              <div className="space-y-6 relative">
                <div className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center">
                    <ArrowRight className="w-8 h-8 text-primary-900" />
                    <ArrowRight className="w-8 h-8 text-primary-700 -ml-2" />
                    <ArrowRight className="w-8 h-8 text-primary-500 -ml-2" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    After: Bazaar
                  </h4>
                </div>

                {transformations.map((item, idx) => (
                  <Card
                    key={idx}
                    className="p-4 border-2 border-green-100 bg-linear-to-r from-white to-green-50/30 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-full ${item.to.bg}`}>
                        <item.to.icon className={`w-5 h-5 ${item.to.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {item.to.label}
                        </p>
                        <p className="text-xs text-gray-600">
                          {item.description}
                        </p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            How Bazaar transforms a sale
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-primary-100 via-primary-300 to-primary-100" />

            <div className="grid md:grid-cols-5 gap-4 relative">
              <Card className="p-5 border-2 border-gray-200 bg-white relative z-10">
                <div className="absolute top-0 left-0 w-8 h-8 bg-primary-900 text-white rounded-br-2xl flex items-start justify-start shadow-inner">
                  <span className="text-xs font-bold ml-3 mt-2">1</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SiWhatsapp className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Share link</h4>
                  <p className="text-xs text-gray-600">
                    Seller shares store link on WhatsApp/Instagram
                  </p>
                </div>
              </Card>

              <Card className="p-5 border-2 border-gray-200 bg-white relative z-10 md:mt-8">
                <div className="absolute top-0 left-0 w-8 h-8 bg-primary-900 text-white rounded-br-2xl flex items-start justify-start shadow-inner">
                  <span className="text-xs font-bold ml-3 mt-2">2</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShoppingBag className="w-8 h-8 text-primary-900" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Buyer checks out
                  </h4>
                  <p className="text-xs text-gray-600">
                    Buyer clicks and pays securely
                  </p>
                </div>
              </Card>

              <Card className="p-5 border-2 border-gray-200 bg-white relative z-10">
                <div className="absolute top-0 left-0 w-8 h-8 bg-primary-900 text-white rounded-br-2xl flex items-start justify-start shadow-inner">
                  <span className="text-xs font-bold ml-3 mt-2">3</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Funds in escrow
                  </h4>
                  <p className="text-xs text-gray-600">
                    Money held until delivery confirmed
                  </p>
                </div>
              </Card>

              <Card className="p-5 border-2 border-gray-200 bg-white relative z-10 md:mt-8">
                <div className="absolute top-0 left-0 w-8 h-8 bg-primary-900 text-white rounded-br-2xl flex items-start justify-start shadow-inner">
                  <span className="text-xs font-bold ml-3 mt-2">4</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Seller ships</h4>
                  <p className="text-xs text-gray-600">
                    Order fulfilled, tracking added
                  </p>
                </div>
              </Card>

              <Card className="p-5 border-2 border-gray-200 bg-white relative z-10">
                <div className="absolute top-0 left-0 w-8 h-8 bg-primary-900 text-white rounded-br-2xl flex items-start justify-start shadow-inner">
                  <span className="text-xs font-bold ml-3 mt-2">5</span>
                </div>
                <div className="mt-2 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Payment released
                  </h4>
                  <p className="text-xs text-gray-600">
                    Buyer confirms, seller gets paid
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 border-2 border-gray-200 bg-white hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Built for the way people actually sell
            </h3>
            <p className="text-gray-600 mb-6">
              We don't ask sellers to leave WhatsApp or Instagram. We enhance
              their existing workflow with a powerful commerce layer that makes
              every transaction safe and professional.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">
                  Works inside WhatsApp, Instagram, Facebook, Telegram
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">
                  No coding, no website needed - store created in 60 seconds
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">
                  Automatic order tracking and inventory management
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5 bg-linear-to-br from-primary-900 to-primary-700 text-white border-0">
              <Sparkles className="w-8 h-8 mb-2 text-yellow-300" />
              <p className="text-3xl font-black">60s</p>
              <p className="text-sm text-white/80">to create your store</p>
            </Card>
            <Card className="p-5 bg-linear-to-br from-green-600 to-green-500 text-white border-0">
              <Shield className="w-8 h-8 mb-2 text-white/90" />
              <p className="text-3xl font-black">100%</p>
              <p className="text-sm text-white/80">protected payments</p>
            </Card>
            <Card className="p-5 bg-linear-to-br from-blue-600 to-blue-500 text-white border-0">
              <Users className="w-8 h-8 mb-2 text-white/90" />
              <p className="text-3xl font-black">10k+</p>
              <p className="text-sm text-white/80">active sellers</p>
            </Card>
            <Card className="p-5 bg-linear-to-br from-purple-600 to-purple-500 text-white border-0">
              <Repeat className="w-8 h-8 mb-2 text-white/90" />
              <p className="text-3xl font-black">0.8%</p>
              <p className="text-sm text-white/80">dispute rate</p>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
            Start transforming your social sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
