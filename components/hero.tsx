// components/hero.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Area */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight tracking-tighter lg:text-7xl lg:leading-[1.1]">
              Chat, Date
              <br />
              Make Friends
              <br />
              Have Fun,
              <br />
              Hangout
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              The ultimate dating app that goes beyond the swipe
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Button variant="outline" className="px-6 py-3">
                Login
              </Button>
              <Button className="px-6 py-3">
                Signup
              </Button>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative h-[600px] w-full flex justify-center items-center">
            {/* Single Image - No Tilt */}
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/hero-img.png"
              alt="App Screenshot"
              width={400}
              height={500}
              className="object-cover transform  z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
