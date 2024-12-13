// app/ads/verify/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OTPVerification } from "@/components/ads/otp-verification";

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16 flex items-center justify-center p-4 bg-gray-50">
        <OTPVerification />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
