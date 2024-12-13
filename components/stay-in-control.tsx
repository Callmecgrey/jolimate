// components/StayInControl.tsx
'use client';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";

export function StayInControl() {
  // Exactly three images
  const slides = [
    "/images/profile1.png",
    "/images/profile2.png",
    "/images/profile3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(1); 
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const slideCount = slides.length;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  // Auto-play functionality
  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000);

    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  // Pause auto-play on mouse hover
  const handleMouseEnter = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => {
    slideInterval.current = setInterval(nextSlide, 3000);
  };

  // Swipe Handlers for Mobile
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

    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard Navigation
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

  // Determine slide positions relative to currentIndex
  const getSlidePosition = (index: number) => {
    if (slideCount === 3) {
      // Calculate positions for three slides
      if (index === currentIndex) return "center";
      if (index === (currentIndex - 1 + slideCount) % slideCount) return "left";
      if (index === (currentIndex + 1) % slideCount) return "right";
    }
    return "hidden";
  };

  return (
    <section className="py-24">
      <div className="container mx-auto">
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
              className="flex justify-center items-center transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${slideCount * 100}%`,
              }}
              ref={sliderRef}
            >
              {slides.map((src, index) => {
                const position = getSlidePosition(index);
                return (
                  <div
                    key={index}
                    className={clsx(
                      "flex-shrink-0 w-full lg:w-1/3 flex justify-center items-center transition-transform duration-700 ease-in-out",
                      position === "center"
                        ? "scale-110 opacity-100"
                        : position === "left" || position === "right"
                        ? "scale-90 opacity-70"
                        : "hidden"
                    )}
                  >
                    <div className="relative w-3/4 aspect-[3/4]">
                      <Image
                        src={src}
                        alt={`Stay in Control ${index + 1}`}
                        fill
                        className="object-cover rounded-xl shadow-lg"
                        priority={index === currentIndex}
                      />
                    </div>
                  </div>
                );
              })}
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
