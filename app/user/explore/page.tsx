// app/user/explore/page.tsx
"use client";

import {
  RefreshCw,
  X,
  Star,
  Heart,
  Gift,
  Filter,
  Bell,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import classNames from "classnames";

export default function UserExplore() {
  return (
    <div className="flex flex-col bg-gray-100 h-full w-full relative pt-10 md:pt-12">

      {/* Filter Icon */}
      <button
        aria-label="Filter"
        className="absolute top-4 left-3 md:top-6 md:left-6 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
      >
        <Filter className="h-5 w-5 text-gray-700" />
      </button>

      {/* Notification Icon */}
      <button
        aria-label="Notifications"
        className="absolute top-4 right-3 md:top-6 md:right-6 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
      >
        <Bell className="h-5 w-5 text-gray-700" />
      </button>

      {/* Profile Card */}
      <div className="flex flex-col items-center justify-start flex-grow px-4 py-4 md:py-6 overflow-y-auto">
        <div
          className={classNames(
            "relative bg-white rounded-3xl overflow-hidden shadow-xl w-full",
            "max-w-sm sm:max-w-md md:max-w-lg"
          )}
        >
          {/* Image */}
          <div className="relative h-[24rem] md:h-[36rem] overflow-hidden"> {/* Reduced height to 24rem on mobile */}
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/profile1.png"
              alt="Profile Image"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              priority
            />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent text-white p-4 md:p-6">
            <h4 className="text-xl md:text-2xl font-bold">Ashley Jones, 23</h4>
            <p className="text-xs md:text-sm">Professional model</p>
            <div className="flex items-center mt-1 md:mt-2 text-xs md:text-sm">
              <MapPin className="mr-1 h-4 w-4" />
              <span>1 km</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-4 md:mt-6 gap-3 md:gap-4">
          {/* Refresh Button */}
          <button
            aria-label="Refresh"
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <RefreshCw className="h-4 w-4 text-gray-700" />
          </button>

          {/* Reject Button */}
          <button
            aria-label="Reject"
            className="w-12 h-12 md:w-14 md:h-14 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Like Button */}
          <button
            aria-label="Like"
            className="w-16 h-16 md:w-20 md:h-20 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-200"
          >
            <Star className="h-5 w-5" />
          </button>

          {/* Love Button */}
          <button
            aria-label="Love"
            className="w-12 h-12 md:w-14 md:h-14 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors duration-200"
          >
            <Heart className="h-4 w-4" />
          </button>

          {/* Gift Button */}
          <button
            aria-label="Gift"
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <Gift className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
