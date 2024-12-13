// components/ads/success-message.tsx
import Link from "next/link";
import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SuccessMessage() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col items-center gap-6 pt-6">
        {/* Success Icon */}
        <div className="rounded-full bg-green-100 p-3">
          <ThumbsUp className="h-6 w-6 text-green-600" />
        </div>

        {/* Success Message */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Ad Space Created Successfully</h2>
          <p className="text-sm text-gray-500">
            Your ad space has been successfully created and is now live.
          </p>
        </div>

        {/* Dashboard Button */}
        <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
          <Link href="/ads/dashboard">Go to Dashboard</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
