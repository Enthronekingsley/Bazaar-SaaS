// import React from "react";

// function page() {
//   return (
//     <div>
//       <h1>Product Page</h1>
//     </div>
//   );
// }

// export default page;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  Lock,
  Globe,
  Users,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Heart,
  Gem,
  Crown,
  Zap,
  Wallet,
  Scale,
  Gift,
  Star,
  Award,
  Rocket,
  Eye,
  EyeOff,
} from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { Label } from "@repo/ui/components/ui/label";
import { Switch } from "@repo/ui/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@repo/ui/components/ui/radio-group";
import { Separator } from "@repo/ui/components/ui/separator";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import { Progress } from "@repo/ui/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";

// Schema based on Deal model
const dealSchema = z.object({
  // Parties
  buyerEmail: z.string().email("Please enter a valid email").optional(),
  sellerId: z.string().min(1, "Seller is required"),

  // Deal definition
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title too long"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(2000, "Description too long"),
  terms: z.string().min(20, "Terms must be at least 20 characters"),

  // Visibility
  visibility: z.enum(["PRIVATE", "PUBLIC", "LINK_ONLY"]),

  // Pricing
  amountTotal: z
    .number()
    .min(100, "Minimum amount is 100")
    .max(10000000, "Maximum amount exceeded"),
  currency: z.string().default("NGN"),

  // Expiry
  acceptBy: z.string().optional(),
  autoExpire: z.string().min(1, "Expiry date is required"),

  // Optional fields
  isLocked: z.boolean().default(false),
});

type DealFormValues = z.infer<typeof dealSchema>;

// Mock sellers data - replace with actual data from your API
const sellers = [
  {
    id: "1",
    name: "Luxury Goods Store",
    rating: 4.9,
    deals: 342,
    avatar: "/avatars/seller1.jpg",
    verified: true,
  },
  {
    id: "2",
    name: "Elite Electronics",
    rating: 4.8,
    deals: 256,
    avatar: "/avatars/seller2.jpg",
    verified: true,
  },
  {
    id: "3",
    name: "Premium Collectibles",
    rating: 4.95,
    deals: 189,
    avatar: "/avatars/seller3.jpg",
    verified: true,
  },
  {
    id: "4",
    name: "Luxury Fashion House",
    rating: 4.7,
    deals: 423,
    avatar: "/avatars/seller4.jpg",
    verified: false,
  },
];

export default function CreateDealPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedSeller, setSelectedSeller] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, dirtyFields },
    trigger,
  } = useForm<DealFormValues>({
    resolver: zodResolver(dealSchema),
    defaultValues: {
      currency: "NGN",
      visibility: "PRIVATE",
      isLocked: false,
    },
    mode: "onChange",
  });

  const watchedValues = watch();
  const amountTotal = watch("amountTotal") || 0;
  const platformFee = Math.floor(amountTotal * 0.025); // 2.5% fee
  const sellerAmount = amountTotal - platformFee;
  const escrowAmount = amountTotal;

  // Calculate form progress
  const calculateProgress = () => {
    const fields = [
      "title",
      "description",
      "terms",
      "amountTotal",
      "autoExpire",
      "sellerId",
    ];
    const filled = fields.filter((field) => {
      const value = watchedValues[field as keyof DealFormValues];
      return value !== undefined && value !== "" && value !== 0;
    }).length;
    return (filled / fields.length) * 100;
  };

  const onSubmit = async (data: DealFormValues) => {
    setIsSubmitting(true);
    try {
      // Add sellerId from selected seller
      data.sellerId = selectedSeller;

      // Submit to your API
      const response = await fetch("/api/deals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/deals/success");
      }
    } catch (error) {
      console.error("Failed to create deal:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Choose Seller", icon: <Users className="h-4 w-4" /> },
    {
      number: 2,
      title: "Deal Details",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      number: 3,
      title: "Terms & Pricing",
      icon: <Scale className="h-4 w-4" />,
    },
    {
      number: 4,
      title: "Review & Publish",
      icon: <Rocket className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 border-primary-200 bg-primary-50/50 text-primary-700"
          >
            <Gem className="h-3.5 w-3.5 mr-1" />
            Premium Deal Creation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-primary-900 to-slate-900 bg-clip-text text-transparent">
            Create a Masterpiece Deal
          </h1>
          <p className="text-lg text-slate-600 mt-3 max-w-2xl mx-auto">
            Secure. Protected. Elegant. Every deal is a promise, protected by
            Bazaar's world-class escrow.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Deal Completion</span>
            <span className="font-medium text-primary-600">
              {Math.round(calculateProgress())}%
            </span>
          </div>
          <Progress value={calculateProgress()} className="h-2 bg-slate-100" />
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-between items-center mb-10 px-4">
          {steps.map((s, idx) => (
            <div key={s.number} className="flex items-center flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 cursor-pointer transition-all ${
                  step >= s.number ? "text-primary-600" : "text-slate-400"
                }`}
                onClick={() => s.number <= step && setStep(s.number)}
              >
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                  ${
                    step > s.number
                      ? "bg-primary-600 border-primary-600 text-white"
                      : step === s.number
                        ? "border-primary-600 text-primary-600 bg-primary-50"
                        : "border-slate-200 bg-white"
                  }
                `}
                >
                  {step > s.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    s.icon
                  )}
                </div>
                <span className="font-medium hidden sm:block">{s.title}</span>
              </motion.div>
              {idx < steps.length - 1 && (
                <ChevronRight
                  className={`h-5 w-5 mx-2 flex-shrink-0 ${
                    step > s.number ? "text-primary-400" : "text-slate-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Preview Toggle */}
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPreviewMode(!previewMode)}
            className="gap-2"
          >
            {previewMode ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            {previewMode ? "Hide Preview" : "Show Preview"}
          </Button>
        </div>

        {/* Main Form and Preview Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-primary-50 rounded-xl">
                            <Users className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">
                              Choose Your Seller
                            </h2>
                            <p className="text-slate-500">
                              Select a trusted partner for your deal
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {sellers.map((seller) => (
                            <motion.div
                              key={seller.id}
                              whileHover={{ scale: 1.02, y: -2 }}
                              className={`
                                relative p-4 rounded-xl border-2 cursor-pointer transition-all
                                ${
                                  selectedSeller === seller.id
                                    ? "border-primary-500 bg-primary-50/50 shadow-lg shadow-primary-100"
                                    : "border-slate-200 hover:border-primary-200 hover:bg-slate-50"
                                }
                              `}
                              onClick={() => {
                                setSelectedSeller(seller.id);
                                setValue("sellerId", seller.id);
                                trigger("sellerId");
                              }}
                            >
                              {seller.verified && (
                                <Badge className="absolute top-3 right-3 bg-primary-100 text-primary-700 border-0">
                                  <Crown className="h-3 w-3 mr-1" />
                                  Verified
                                </Badge>
                              )}

                              <div className="flex items-center gap-4">
                                <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                                  <AvatarImage src={seller.avatar} />
                                  <AvatarFallback className="bg-gradient-to-br from-primary-100 to-secondary-100">
                                    {seller.name[0]}
                                  </AvatarFallback>
                                </Avatar>

                                <div className="flex-1">
                                  <h3 className="font-semibold text-lg">
                                    {seller.name}
                                  </h3>
                                  <div className="flex items-center gap-4 mt-1">
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm font-medium">
                                        {seller.rating}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-slate-500">
                                      <Gift className="h-4 w-4" />
                                      <span className="text-sm">
                                        {seller.deals} deals
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {selectedSeller === seller.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center"
                                >
                                  <CheckCircle className="h-4 w-4 text-white" />
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-secondary-50 rounded-xl">
                            <FileText className="h-6 w-6 text-secondary-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">
                              Deal Details
                            </h2>
                            <p className="text-slate-500">
                              What's this deal about?
                            </p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div className="space-y-2">
                            <Label
                              htmlFor="title"
                              className="text-sm font-medium flex items-center gap-2"
                            >
                              <Sparkles className="h-4 w-4 text-primary-500" />
                              Deal Title
                            </Label>
                            <Input
                              id="title"
                              placeholder="e.g., Vintage Rolex Submariner 16610"
                              className="h-12 border-slate-200 focus:border-primary-400 focus:ring-primary-400/20"
                              {...register("title")}
                            />
                            {errors.title && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.title.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="description"
                              className="text-sm font-medium flex items-center gap-2"
                            >
                              <FileText className="h-4 w-4 text-primary-500" />
                              Description
                            </Label>
                            <Textarea
                              id="description"
                              placeholder="Describe what you're selling or trading..."
                              className="min-h-[120px] border-slate-200 focus:border-primary-400 focus:ring-primary-400/20"
                              {...register("description")}
                            />
                            {errors.description && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.description.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="buyerEmail"
                              className="text-sm font-medium flex items-center gap-2"
                            >
                              <Users className="h-4 w-4 text-primary-500" />
                              Buyer Email (Optional)
                            </Label>
                            <Input
                              id="buyerEmail"
                              type="email"
                              placeholder="invite@buyer.com"
                              className="h-12 border-slate-200"
                              {...register("buyerEmail")}
                            />
                            <p className="text-xs text-slate-500 mt-1">
                              Leave empty to create a public deal link
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-emerald-50 rounded-xl">
                            <Scale className="h-6 w-6 text-emerald-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">
                              Terms & Pricing
                            </h2>
                            <p className="text-slate-500">
                              Set the rules and value
                            </p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div className="space-y-2">
                            <Label
                              htmlFor="amountTotal"
                              className="text-sm font-medium flex items-center gap-2"
                            >
                              <DollarSign className="h-4 w-4 text-primary-500" />
                              Deal Amount
                            </Label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                                ₦
                              </span>
                              <Input
                                id="amountTotal"
                                type="number"
                                placeholder="250000"
                                className="h-12 pl-8 border-slate-200"
                                {...register("amountTotal", {
                                  valueAsNumber: true,
                                })}
                              />
                            </div>
                            {errors.amountTotal && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.amountTotal.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="terms"
                              className="text-sm font-medium flex items-center gap-2"
                            >
                              <Lock className="h-4 w-4 text-primary-500" />
                              Terms & Conditions
                            </Label>
                            <Textarea
                              id="terms"
                              placeholder="Outline the specific terms of this deal..."
                              className="min-h-[150px] border-slate-200"
                              {...register("terms")}
                            />
                            {errors.terms && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.terms.message}
                              </p>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="acceptBy"
                                className="text-sm font-medium flex items-center gap-2"
                              >
                                <Calendar className="h-4 w-4 text-primary-500" />
                                Accept By (Optional)
                              </Label>
                              <Input
                                id="acceptBy"
                                type="datetime-local"
                                className="h-12 border-slate-200"
                                {...register("acceptBy")}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="autoExpire"
                                className="text-sm font-medium flex items-center gap-2"
                              >
                                <Clock className="h-4 w-4 text-primary-500" />
                                Expires On
                              </Label>
                              <Input
                                id="autoExpire"
                                type="datetime-local"
                                className="h-12 border-slate-200"
                                {...register("autoExpire")}
                              />
                              {errors.autoExpire && (
                                <p className="text-sm text-red-500 mt-1">
                                  {errors.autoExpire.message}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Label className="text-sm font-medium">
                              Visibility
                            </Label>
                            <RadioGroup
                              defaultValue="PRIVATE"
                              onValueChange={(value: any) =>
                                setValue("visibility", value as any)
                              }
                              className="grid grid-cols-3 gap-3"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="PRIVATE" id="private" />
                                <Label
                                  htmlFor="private"
                                  className="flex items-center gap-1"
                                >
                                  <Lock className="h-3 w-3" />
                                  Private
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="LINK_ONLY" id="link" />
                                <Label
                                  htmlFor="link"
                                  className="flex items-center gap-1"
                                >
                                  <Globe className="h-3 w-3" />
                                  Link Only
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="PUBLIC" id="public" />
                                <Label
                                  htmlFor="public"
                                  className="flex items-center gap-1"
                                >
                                  <Users className="h-3 w-3" />
                                  Public
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                              <Switch
                                id="isLocked"
                                onCheckedChange={(checked: any) =>
                                  setValue("isLocked", checked)
                                }
                              />
                              <Label htmlFor="isLocked" className="text-sm">
                                Lock deal after creation
                              </Label>
                            </div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Shield className="h-4 w-4 text-slate-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Locked deals cannot be modified</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-amber-50 rounded-xl">
                            <Rocket className="h-6 w-6 text-amber-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold">
                              Review & Launch
                            </h2>
                            <p className="text-slate-500">
                              Almost there! Review your deal
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-slate-50 p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-medium">Deal Summary</span>
                              <Badge
                                variant="outline"
                                className="border-primary-200"
                              >
                                {watchedValues.visibility}
                              </Badge>
                            </div>

                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-slate-500">Title:</span>
                                <span className="font-medium">
                                  {watchedValues.title}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Amount:</span>
                                <span className="font-medium">
                                  ₦{watchedValues.amountTotal?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">
                                  Platform Fee (2.5%):
                                </span>
                                <span className="text-slate-600">
                                  ₦{platformFee.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between pt-2 border-t">
                                <span className="font-medium">
                                  Seller Receives:
                                </span>
                                <span className="text-primary-600 font-semibold">
                                  ₦{sellerAmount.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-primary-600" />
                              <span className="font-medium">
                                Escrow Protection
                              </span>
                            </div>
                            <p className="text-sm text-slate-600">
                              ₦{escrowAmount.toLocaleString()} will be held
                              securely in escrow until all conditions are met.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      disabled={step === 1}
                      className="px-6"
                    >
                      Previous
                    </Button>

                    {step < 4 ? (
                      <Button
                        type="button"
                        onClick={async () => {
                          const fieldsToValidate =
                            step === 1
                              ? ["sellerId"]
                              : step === 2
                                ? ["title", "description"]
                                : step === 3
                                  ? ["amountTotal", "terms", "autoExpire"]
                                  : [];

                          const isValid = await trigger(
                            fieldsToValidate as any,
                          );
                          if (isValid) setStep(step + 1);
                        }}
                        className="bg-primary hover:bg-primary-600 px-8 gap-2"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 px-8 gap-2"
                      >
                        {isSubmitting ? (
                          <>Creating...</>
                        ) : (
                          <>
                            <Rocket className="h-4 w-4" />
                            Launch Deal
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Live Preview Panel */}
          {previewMode && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-24 border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-4 w-4 text-primary-500" />
                    <h3 className="font-semibold">Live Preview</h3>
                    <Badge className="ml-auto bg-green-100 text-green-700 border-0">
                      Active
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center text-white p-4 text-center">
                      <div>
                        <Crown className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                        <p className="text-sm font-medium">Premium Deal</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium truncate">
                        {watchedValues.title || "Your Deal Title"}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {watchedValues.description ||
                          "Deal description will appear here..."}
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Amount</span>
                        <span className="font-medium">
                          ₦{amountTotal.toLocaleString() || "0"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Escrow</span>
                        <span className="text-green-600 font-medium">
                          Protected ✓
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Shield className="h-3 w-3" />
                        <span>
                          Funds held securely until both parties confirm
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Shield className="h-4 w-4 text-primary-500" />
            <span>Bank-grade Security</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Lock className="h-4 w-4 text-primary-500" />
            <span>Dispute Protection</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Zap className="h-4 w-4 text-primary-500" />
            <span>Instant Settlement</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Wallet className="h-4 w-4 text-primary-500" />
            <span>Multiple Payment Methods</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
