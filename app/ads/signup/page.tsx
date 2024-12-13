// app/ads/signup/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SignUpForm } from "@/components/ads/signup-form";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16 flex items-center justify-center p-4 bg-gray-50">
        <SignUpForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
