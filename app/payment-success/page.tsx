// app/payment-success/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PaymentSuccess } from "@/components/payment-success";

export default function PaymentSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16 bg-gray-50">
        <PaymentSuccess />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
