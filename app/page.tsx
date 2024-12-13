// app/page.tsx
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkipLine } from "@/components/skip-line";
import { HowItWorks } from "@/components/how-it-works";
import { StayInControl } from "@/components/stay-in-control";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SkipLine />
        <HowItWorks />
        <StayInControl />
      </main>
      <Footer />
    </>
  );
}
