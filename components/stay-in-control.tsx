// components/StayInControl.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function StayInControl() {
  const slides = [
    "/images/profile1.png",
    "/images/profile2.png",
    "/images/profile3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const slideCount = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    // Set interval to 5000ms for a slower rotation
    slideInterval.current = setInterval(nextSlide, 20000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => {
    // Restart the interval after hovering out
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  // Swipe handlers
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Slider Area */}
          <div
            className="w-full lg:w-1/2 relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-1500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${slideCount * 100}%`,
              }}
              ref={sliderRef}
            >
              {slides.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex justify-center items-center"
                >
                  <div className="relative w-32 aspect-[3/4]">
                    <Image
                      src={src}
                      alt={`Stay in Control ${index + 1}`}
                      fill
                      className="object-cover rounded-xl shadow-lg"
                      priority={index === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold">Stay in Control</h2>
            <p className="text-lg text-muted-foreground">
              Connect with people you desire
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
