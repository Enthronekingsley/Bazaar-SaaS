import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Store,
  Zap,
  Shield,
  Link2,
  CheckCircle,
  ArrowRight,
  XCircle,
} from "lucide-react";

const TwoWaysSection = () => {
  const storeFeatures = [
    "Professional storefront",
    "Product catalog & inventory",
    "Customizable branding",
    "Analytics & insights",
    "Customer management",
    "Bulk product uploads",
  ];

  const dealFeatures = [
    "No store needed",
    "Instant escrow protection",
    "One-time transaction",
    "Shareable deal link",
    "Email notifications",
    "Works for anyone",
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm bg-primary-100 text-primary-700 border-primary-200 rounded-full">
            Two powerful ways to sell
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Choose how you want to sell
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're a full-time seller or just making a one-time deal,
            Bazaar has you covered. Both options include full escrow protection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-2 border-primary-200 bg-linear-to-br from-white to-primary-50/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-200/20 rounded-full blur-3xl group-hover:scale-150 transition"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Sell with a Store
                    </h3>
                    <p className="text-sm text-gray-600">
                      For regular sellers and businesses
                    </p>
                  </div>
                </div>
                <Badge className="bg-primary-900 text-white px-3 py-1">
                  Professional
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Create a beautiful online store in minutes. Perfect for social
                sellers, small businesses, and anyone selling regularly.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {storeFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
                <p className="text-xs font-medium text-gray-500 mb-2">
                  SAMPLE STORE LINK
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-primary-900" />
                    <span className="text-sm font-mono text-primary-900">
                      gadgethaven.bazaar.com
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs rounded-full"
                  >
                    <Link2 className="w-3 h-3 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-primary-900 hover:bg-primary-800 text-white rounded-full py-6 group">
                Create your store
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-2 border-purple-200 bg-linear-to-br from-white to-purple-50/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl group-hover:scale-150 transition"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Create Instant Deals
                    </h3>
                    <p className="text-sm text-gray-600">
                      For one-time transactions
                    </p>
                  </div>
                </div>
                <Badge className="bg-purple-600 text-white px-3 py-1">
                  Quick & Easy
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                No store needed. Create a secure escrow deal in seconds for any
                transaction between two people.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {dealFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-600 shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
                <p className="text-xs font-medium text-gray-500 mb-2">
                  SAMPLE DEAL LINK
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-mono text-purple-600">
                      bazaar.com/deal/abc123
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs rounded-full"
                  >
                    <Link2 className="w-3 h-3 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6 group">
                Create instant deal
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </Card>
        </div>

        <Card className="p-8 border-2 border-gray-200 bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Compare your options
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <p className="font-semibold text-gray-900 pb-2 border-b border-gray-200">
                Feature
              </p>
              <p className="text-sm">Storefront</p>
              <p className="text-sm">Inventory management</p>
              <p className="text-sm">Product catalog</p>
              <p className="text-sm">Customer database</p>
              <p className="text-sm">Analytics</p>
              <p className="text-sm">Escrow protection</p>
              <p className="text-sm">Shareable link</p>
              <p className="text-sm">Email notifications</p>
              <p className="text-sm">Setup time</p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-primary-900 pb-2 border-b border-primary-200">
                Store Commerce
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm font-medium">60 seconds</p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-purple-600 pb-2 border-b border-purple-200">
                Instant Deals
              </p>
              <p className="text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 text-gray-400" /> Not needed
              </p>
              <p className="text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 text-gray-400" /> Not needed
              </p>
              <p className="text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 text-gray-400" /> Not needed
              </p>
              <p className="text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 text-gray-400" /> Not needed
              </p>
              <p className="text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 text-gray-400" /> Not needed
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Yes
              </p>
              <p className="text-sm font-medium">30 seconds</p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card className="p-4 border border-gray-200 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <Store className="w-5 h-5 text-primary-900" />
              <p className="font-semibold text-sm">Store perfect for:</p>
            </div>
            <p className="text-xs text-gray-600">
              Clothing brands, electronics sellers, artisans, shops, regular
              businesses
            </p>
          </Card>

          <Card className="p-4 border border-gray-200 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <p className="font-semibold text-sm">Deal perfect for:</p>
            </div>
            <p className="text-xs text-gray-600">
              Buying/selling phones, freelance payments, deposits, group buys,
              person-to-person
            </p>
          </Card>

          <Card className="p-4 border border-gray-200 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-green-600" />
              <p className="font-semibold text-sm">Both include:</p>
            </div>
            <p className="text-xs text-gray-600">
              Full escrow protection, dispute resolution, secure payments
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
