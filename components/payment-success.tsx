// components/payment-success.tsx
import { ThumbsUp } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PaymentSuccess() {
  return (
    <div className="container flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-6 pt-6">
          <div className="rounded-full bg-green-100 p-3">
            <ThumbsUp className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Payment Successful</h2>
            <p className="mt-2 text-gray-600">
              Your wallet has been credited
              <br />
              on the mobile app
            </p>
          </div>
          <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
            <Link href="/">Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
