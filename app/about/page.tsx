// app/about/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutUs } from "@/components/about/about";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <AboutUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
