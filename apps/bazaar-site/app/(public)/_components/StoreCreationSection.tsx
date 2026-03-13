import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Store,
  Plus,
  Package,
  Share2,
  Clock,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  MoreVertical,
  Camera,
  Link2,
  Copy,
  Smartphone,
  Sparkles,
} from "lucide-react";

const StoreCreationSection = () => {
  const steps = [
    {
      icon: Store,
      title: "Create store",
      description: "Sign up and get your store in 60 seconds",
      color: "text-primary-900",
      bg: "bg-primary-100",
    },
    {
      icon: Package,
      title: "Add products",
      description: "Upload photos, set prices, add descriptions",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: TrendingUp,
      title: "Manage inventory",
      description: "Track stock levels in real-time",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: Share2,
      title: "Share & sell",
      description: "Get links to share anywhere",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  const products = [
    {
      name: "iPhone 15 Pro",
      price: "$1,299",
      stock: 12,
      image: "📱",
      sales: 45,
    },
    {
      name: "Bluetooth Headphones",
      price: "$89",
      stock: 45,
      image: "🎧",
      sales: 128,
    },
    {
      name: "Smart Watch Series 7",
      price: "$399",
      stock: 8,
      image: "⌚",
      sales: 67,
    },
    {
      name: "Wireless Charger",
      price: "$49",
      stock: 32,
      image: "⚡",
      sales: 203,
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary-100 text-primary-700 border-primary-200 rounded-full">
            Get started in minutes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Your store, your way — in 60 seconds
          </h2>
          <p className="text-xl text-gray-600">
            No coding, no design skills, no complex setup. Just a beautiful
            store that works everywhere your customers are.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-16">
          <Card className="lg:col-span-2 p-6 border-2 border-gray-200 bg-white shadow-xl rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-900" />
              Quick setup wizard
            </h3>

            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${step.bg} flex items-center justify-center shrink-0`}
                  >
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">
                        {step.title}
                      </h4>
                      {idx < 2 ? (
                        <Badge className="bg-green-600 text-white text-[10px] px-2">
                          Done
                        </Badge>
                      ) : idx === 2 ? (
                        <Badge variant="outline" className="text-[10px]">
                          In progress
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="text-[10px] text-gray-400"
                        >
                          Pending
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {step.description}
                    </p>

                    {idx === 2 && (
                      <div className="mt-2">
                        <div className="flex justify-between text-[10px] mb-1">
                          <span>3 of 12 products added</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/4 bg-primary-900 rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  🚀
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary-900">
                    Your store is live!
                  </p>
                  <p className="text-xs text-primary-700">
                    gadgethaven.bazaar.com
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-primary-900 text-white rounded-full h-8 px-3 text-xs"
                >
                  <Copy className="w-3 h-3 mr-1" /> Copy
                </Button>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-3 p-0 border-2 border-gray-200 bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-linear-to-r from-primary-900 to-primary-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
                    G
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">GadgetHaven Store</h3>
                    <p className="text-xs text-white/80">
                      gadgethaven.bazaar.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 text-white border-0">
                    Active
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20 h-8 w-8"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4">
                <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                  <p className="text-[10px] text-white/70">Products</p>
                  <p className="text-lg font-bold">24</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                  <p className="text-[10px] text-white/70">Orders</p>
                  <p className="text-lg font-bold">142</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                  <p className="text-[10px] text-white/70">Revenue</p>
                  <p className="text-lg font-bold">$45.2k</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                  <p className="text-[10px] text-white/70">Customers</p>
                  <p className="text-lg font-bold">89</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 px-4">
              <div className="flex gap-6">
                <button className="py-3 px-1 border-b-2 border-primary-900 font-medium text-sm text-primary-900">
                  Products
                </button>
                <button className="py-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
                  Orders
                </button>
                <button className="py-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
                  Inventory
                </button>
                <button className="py-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
                  Analytics
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Your products</h4>
                <Button
                  size="sm"
                  className="bg-primary-900 hover:bg-primary-800 text-white rounded-full h-8 px-3 text-xs"
                >
                  <Plus className="w-3 h-3 mr-1" /> Add product
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {products.map((product, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                  >
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {product.image}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">
                          Stock: {product.stock}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-bold text-sm">
                            {product.price}
                          </span>
                          <span className="text-[10px] text-green-600">
                            {product.sales} sold
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="link"
                className="text-primary-900 text-sm mt-3 w-full"
              >
                View all products (24)
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <Card className="p-4 border-2 border-gray-200 bg-white hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-900" />
              </div>
              <div>
                <p className="font-bold text-gray-900">60-second setup</p>
                <p className="text-xs text-gray-500">
                  No technical skills needed
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-2 border-gray-200 bg-white hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Add products</p>
                <p className="text-xs text-gray-500">
                  Photos, prices, descriptions
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-2 border-gray-200 bg-white hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Track inventory</p>
                <p className="text-xs text-gray-500">Real-time stock updates</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-2 border-gray-200 bg-white hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Share2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Share links</p>
                <p className="text-xs text-gray-500">Works on all platforms</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Works everywhere your customers are
            </h3>
            <p className="text-gray-600 mb-6">
              Your store looks beautiful on every device. Share links on
              WhatsApp, Instagram, Facebook, or anywhere else — customers get a
              seamless shopping experience.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm">Mobile optimized storefront</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Link2 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">
                  Shareable product and store links
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm">
                  Instant updates across all platforms
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-6 py-5">
                Create your store now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full px-6 py-5">
                See examples
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="p-4 border-2 border-gray-200 bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  gadgethaven.bazaar.com/products/iphone15
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex gap-3">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
                    📱
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">iPhone 15 Pro</p>
                    <p className="text-xs text-gray-500">Gold • 256GB</p>
                    <p className="text-lg font-bold text-primary-900 mt-1">
                      $1,299
                    </p>
                    <Badge className="bg-green-600 text-white text-[10px] mt-1">
                      In stock
                    </Badge>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Share this product:</span>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-300 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreCreationSection;
