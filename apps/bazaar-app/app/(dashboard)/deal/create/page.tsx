"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/ui/popover";
import { cn } from "@/lib/utils";
import CurrencyInput from "react-currency-input-field";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const currencies = [
  { code: "NGN", symbol: "₦" },
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

export default function CreateDealPage() {
  const [date, setDate] = useState<Date | undefined>();

  const [form, setForm] = useState({
    title: "",
    buyerEmail: "",
    description: "",
    amountTotal: "",
    currency: "NGN",
    terms: "",
    visibility: "PRIVATE",
    autoExpire: "",
  });

  const update = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const selectedCurrency = currencies.find((c) => c.code === form.currency);

  const { platformFee, sellerReceives } = useMemo(() => {
    const amount = Number(form.amountTotal) || 0;
    const fee = amount * 0.05;

    return {
      platformFee: fee,
      sellerReceives: amount - fee,
    };
  }, [form.amountTotal]);

  const isValid =
    form.title &&
    form.buyerEmail &&
    Number(form.amountTotal) > 0 &&
    form.terms &&
    form.visibility &&
    form.autoExpire;

  const visibilityOptions = [
    { label: "Private", value: "PRIVATE" },
    { label: "Link", value: "LINK_ONLY" },
    { label: "Public", value: "PUBLIC" },
  ];

  return (
    <div className="px-3 py-6 flex flex-col items-center">
      <Card className="w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-xl border shadow-xl">
        <CardContent className="p-5 space-y-5">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Create Deal</h1>
            <p className="text-xs text-gray-500">Secure escrow transaction</p>
          </div>

          <Input
            placeholder="Deal title"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="h-12 rounded-xl px-4"
          />

          <Input
            placeholder="Buyer email"
            value={form.buyerEmail}
            onChange={(e) => update("buyerEmail", e.target.value)}
            className="h-12 rounded-xl px-4"
          />

          <div className="space-y-2">
            <div className="flex items-center gap-2 border rounded-xl px-3 h-12">
              <select
                value={form.currency}
                onChange={(e) => update("currency", e.target.value)}
                className="bg-transparent text-sm outline-none"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.symbol} {c.code}
                  </option>
                ))}
              </select>

              <CurrencyInput
                placeholder="Enter amount"
                decimalsLimit={2}
                value={form.amountTotal ? Number(form.amountTotal) : undefined}
                onValueChange={(value) => update("amountTotal", value ?? "")}
                intlConfig={{
                  locale: "en-NG",
                  currency: form.currency,
                }}
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>

            {form.amountTotal && (
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">
                  Fee: {selectedCurrency?.symbol}
                  {platformFee.toFixed(2)}
                </span>
                <span className="font-medium">
                  Receive: {selectedCurrency?.symbol}
                  {sellerReceives.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          <Textarea
            placeholder="Description (optional)"
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            className="rounded-xl px-4"
          />

          <Textarea
            placeholder="Terms (required)"
            value={form.terms}
            onChange={(e) => update("terms", e.target.value)}
            className="rounded-xl px-4"
          />

          <div className="flex gap-2">
            {visibilityOptions.map((v) => (
              <button
                key={v.value}
                onClick={() => update("visibility", v.value)}
                className={cn(
                  "flex-1 py-2 rounded-xl text-xs border",
                  form.visibility === v.value
                    ? "bg-primary text-white"
                    : "text-gray-600",
                )}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-sm"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick expiry date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="w-auto p-2 rounded-xl border bg-white shadow-xl"
              >
                <div className="rounded-lg overflow-hidden">
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      setDate(d);
                      update("autoExpire", d?.toISOString());
                    }}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Button
            disabled={!isValid}
            className={cn(
              "w-full h-12 rounded-xl",
              isValid ? "bg-black text-white" : "bg-gray-200 text-gray-400",
            )}
          >
            Create Deal
          </Button>

          <div className="flex items-center justify-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5 text-gray-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>Escrow protected</span>
            </div>
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex items-center gap-1.5 text-gray-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>5% fee</span>
            </div>
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex items-center gap-1.5 text-gray-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>48h dispute</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 w-full text-center">
        <p className="text-[11px] sm:text-xs text-gray-400 mb-4">
          Powered by trusted payment infrastructure
        </p>

        <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
            <div className="flex items-center justify-center h-8 sm:h-10">
              <Image
                src="/logos/stripe.svg"
                alt="Stripe"
                width={90}
                height={30}
                className="h-4 sm:h-6 w-auto object-contain opacity-80"
              />
            </div>

            <div className="flex items-center justify-center h-8 sm:h-10">
              <Image
                src="/logos/paystack.svg"
                alt="Paystack"
                width={90}
                height={30}
                className="h-4 sm:h-5 w-auto object-contain opacity-80"
              />
            </div>

            <div className="flex items-center justify-center h-8 sm:h-10">
              <Image
                src="/logos/flutterwave.png"
                alt="Flutterwave"
                width={100}
                height={30}
                className="h-4 sm:h-5 w-auto object-contain opacity-80"
              />
            </div>

            <div className="flex items-center justify-center h-8 sm:h-10">
              <Image
                src="/logos/opay.png"
                alt="OPay"
                width={90}
                height={30}
                className="h-5 sm:h-6 w-auto object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[11px] sm:text-xs text-gray-400">
          Need help?{" "}
          <Link
            href=""
            className="text-primary hover:text-primary-600 font-medium underline underline-offset-2"
          >
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
