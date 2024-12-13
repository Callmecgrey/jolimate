// app/ads/success/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SuccessMessage } from "@/components/ads/success-message";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16 flex items-center justify-center p-4 bg-gray-50">
        <SuccessMessage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
