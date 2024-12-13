// app/top-up/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopUpForm } from "@/components/top-up-form";

export default function TopUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <TopUpForm />
      </main>
      <Footer />
    </div>
  );
}
