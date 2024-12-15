// components/skip-line.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SkipLine() {
  return (
    <section className="bg-purple-600 py-24 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Area */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              Skip the
              <br />
              line
            </h2>
            <p className="text-xl opacity-90">
              Find those closer to you in spotlight and maps.
            </p>
            <p className="text-xl opacity-90">
              Ignite the spark with a conversation
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Download App
            </Button>
          </div>
          {/* Image Area */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex justify-center items-center">
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/skip-img.png"
              alt="Skip the Line Illustration"
              width={400}
              height={500}
              className="object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
