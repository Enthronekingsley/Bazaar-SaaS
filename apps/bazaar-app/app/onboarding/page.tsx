import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, Sparkles, Shield, Zap, ArrowRight } from "lucide-react";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/" className="inline-block">
          <Image
            src="/logos/bazaar_logo_blue.png"
            alt="Bazaar"
            width={120}
            height={48}
            className="h-6 w-auto md:h-8"
            priority
          />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-900 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Welcome to Bazaar</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose your path to success
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're starting fresh or already have a store, we've got you
            covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all duration-500" />

            <div className="relative p-8 md:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                  <Store className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Create Store
                </h2>
                <p className="text-gray-600 mb-6">
                  Start your journey as a seller. Set up your store in minutes
                  and start selling with confidence.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-primary-500" />
                  <span>Secure escrow payments</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Zap className="h-4 w-4 text-primary-500" />
                  <span>Instant setup, no technical skills needed</span>
                </div>
              </div>

              <Link href="/create-store">
                <Button className="w-full bg-primary hover:bg-primary-500 text-white rounded-xl py-6 text-base font-medium group/btn">
                  Create Your Store
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary-500 to-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>

          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl group-hover:bg-secondary-500/10 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl group-hover:bg-secondary-500/10 transition-all duration-500" />

            <div className="relative p-8 md:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-50 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-secondary-100 transition-all duration-300">
                  <Zap className="h-8 w-8 text-secondary-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Create Deal
                </h2>
                <p className="text-gray-600 mb-6">
                  Create protected deals for any transaction. Use Bazaar escrow
                  to safely exchange goods, services, or payments.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-secondary-500" />
                  <span>Protected transactions</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Zap className="h-4 w-4 text-secondary-500" />
                  <span>Quick deal creation flow</span>
                </div>
              </div>

              <Link href="/create-deal">
                <Button
                  variant="outline"
                  className="w-full bg-secondary hover:bg-secondary-600 text-black rounded-xl py-6 text-base font-medium group/btn"
                >
                  Create Your Deal
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-secondary-500 to-secondary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Powered by trusted payment infrastructure
          </p>

          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center h-10 sm:h-12">
                <Image
                  src="/logos/stripe.svg"
                  alt="Stripe"
                  width={120}
                  height={40}
                  className="h-6 sm:h-8 w-auto object-contain opacity-90"
                />
              </div>

              <div className="flex items-center justify-center h-10 sm:h-12">
                <Image
                  src="/logos/paystack.svg"
                  alt="Paystack"
                  width={120}
                  height={40}
                  className="h-5 sm:h-6 w-auto object-contain opacity-90"
                />
              </div>

              <div className="flex items-center justify-center h-10 sm:h-12">
                <Image
                  src="/logos/flutterwave.png"
                  alt="Flutterwave"
                  width={140}
                  height={50}
                  className="h-5 sm:h-6 w-auto object-contain opacity-90"
                />
              </div>

              <div className="flex items-center justify-center h-10 sm:h-12">
                <Image
                  src="/logos/opay.png"
                  alt="OPay"
                  width={120}
                  height={40}
                  className="h-6 sm:h-8 w-auto object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need help deciding?{" "}
            <Link
              href=""
              className="text-primary hover:text-primary-600 font-medium underline underline-offset-4"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
