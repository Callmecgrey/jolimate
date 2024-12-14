// components/payment-method-dialog.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PaymentMethodDialog({
  open,
  onOpenChange,
}: PaymentMethodDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment Method</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-center">
            <Image
              src="https://icons8.com/icon/CaSfJLdM4LTY/paypal"
              alt="PayPal"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cardHolder">Card Holder Name</Label>
            <Input id="cardHolder" defaultValue="Alex Halley" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="2323 3243 2435 055" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="expiry">Expiration</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="CVC" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zip">Billing Zip Code</Label>
              <Input id="zip" placeholder="ZIP" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => onOpenChange(false)}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
