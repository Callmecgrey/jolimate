// components/top-up-form.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PaymentMethodDialog } from "./payment-method-dialog";

export function TopUpForm() {
  const router = useRouter();
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual payment logic
    router.push("/payment-success");
  };

  return (
    <div className="flex items-center justify-center h-full px-4 py-8">
      <div className="w-full max-w-6xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-center md:text-3xl">
              Top Up Your Account
            </h1>
            <p className="mt-2 text-center text-gray-600">
              Gift users and pay for a pro subscription.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="mobile">Enter the Mobile Number</Label>
              <div className="flex mt-1">
                <Input
                  className="w-16"
                  defaultValue="+91"
                  id="country-code"
                  placeholder="+91"
                />
                <Input
                  className="flex-1 ml-2"
                  defaultValue="88 77 44 2148"
                  id="mobile"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="username">User Name</Label>
              <Input defaultValue="@hailybarbie" id="username" />
            </div>
            <div>
              <Label htmlFor="amount">Enter the Amount</Label>
              <Input defaultValue="£ 100" id="amount" />
            </div>
            <div>
              <Label>Payment Method</Label>
              <RadioGroup defaultValue="visa" className="mt-2 space-y-2">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="visa" value="visa" />
                    <Label htmlFor="visa" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      **** 8304
                    </Label>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <button
                      type="button"
                      onClick={() => setShowPaymentDialog(true)}
                      className="hover:text-gray-600"
                    >
                      Edit
                    </button>
                    <span>•</span>
                    <button type="button" className="hover:text-gray-600">
                      Delete
                    </button>
                  </div>
                </div>
              </RadioGroup>
              <Button
                type="button"
                variant="outline"
                className="mt-4 w-full"
                onClick={() => setShowPaymentDialog(true)}
              >
                + Add New
              </Button>
            </div>
            <Button type="submit" className="mt-6 bg-purple-600 hover:bg-purple-700 w-full">
              Top Up £ 100
            </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto hidden md:block">
          <Image
            src="/images/top-up-image.svg"
            alt="Top-Up Illustration"
            layout="fill"
            objectFit="cover"
            className="hidden md:block"
          />
          <Image
            src="/images/placeholder.svg"
            alt="Top-Up Illustration Mobile"
            layout="fill"
            objectFit="cover"
            className="block md:hidden"
          />
        </div>

        {/* Payment Method Dialog */}
        <PaymentMethodDialog
          open={showPaymentDialog}
          onOpenChange={setShowPaymentDialog}
        />
      </div>
    </div>
  );
}
