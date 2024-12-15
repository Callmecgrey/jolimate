// app/ads/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function AdsSpacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <section className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:py-24">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Ad Space
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-purple-500">"</span> Harness the power of
              Jolimate&apos;s user base to engage with your target audience and
              grow your business.
            </h1>
            <div className="flex gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/ads/login">Login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ads/signup">Signup</Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative aspect-square w-full max-w-xl rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 md:aspect-video">
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/ads-space.png"
              alt="Ads Illustration"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
