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
    <div className="flex flex-col bg-gray-100 h-full w-full">
      {/* Top Bar with Filter and Notification Icons */}
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <button
          aria-label="Filter"
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <Filter className="h-6 w-6 text-gray-700" />
        </button>
        <button
          aria-label="Notifications"
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <Bell className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Profile Card */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <div
          className={classNames(
            "relative bg-white rounded-3xl overflow-hidden shadow-xl w-full",
            "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          )}
        >
          {/* Image */}
          <div className="relative h-96 md:h-[28rem] lg:h-[32rem]">
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/profile1.png"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority
            />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent text-white p-6">
            <h4 className="text-2xl font-bold">Ashley Jones, 23</h4>
            <p className="text-sm">Professional model</p>
            <div className="flex items-center mt-2 text-sm">
              <MapPin className="mr-1 h-4 w-4" />
              <span>1 km</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-8 gap-4 md:gap-6">
          {/* Refresh Button */}
          <button
            aria-label="Refresh"
            className="w-14 h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <RefreshCw className="h-6 w-6 text-gray-700" />
          </button>

          {/* Reject Button */}
          <button
            aria-label="Reject"
            className="w-14 h-14 md:w-16 md:h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Like Button */}
          <button
            aria-label="Like"
            className="w-20 h-20 md:w-24 md:h-24 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-200"
          >
            <Star className="h-8 w-8" />
          </button>

          {/* Love Button */}
          <button
            aria-label="Love"
            className="w-14 h-14 md:w-16 md:h-16 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors duration-200"
          >
            <Heart className="h-6 w-6" />
          </button>

          {/* Gift Button */}
          <button
            aria-label="Gift"
            className="w-14 h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <Gift className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
