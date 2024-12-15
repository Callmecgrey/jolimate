// components/StayInControl.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function StayInControl() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Area */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex justify-center items-center">
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/stay-in-control.png"
              alt="Stay in Control Illustration"
              width={600}
              height={500}
              className="object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Text Area */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              Stay in Control
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with people you desire
            </p>
            <Button
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
              size="lg"
            >
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
