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
          <div className="relative h-[500px]">
            {/* First Image */}
            <Image
              src="/images/hero-image.png" // Corrected Path
              alt="App Screenshot 1"
              fill // Updated Prop
              className="object-cover transform rotate-30 z-10" // Added z-10
              priority
            />
            
            {/* Second Image */}
            <Image
              src="/images/hero-image-2.png" // Corrected Path
              alt="App Screenshot 2"
              fill // Updated Prop
              className="object-cover transform -rotate-30 absolute top-4 left-4 z-20" // Added z-20
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
