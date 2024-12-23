// app/user/map-chat/page.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

// Dynamically import the MapComponent with no SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <p className="text-center text-gray-500">Loading map...</p>,
});

export default function UserMapChat() {
  const [isGhostMode, setIsGhostMode] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Toggle Ghost Mode
  const toggleGhostMode = () => {
    setIsGhostMode((prevMode) => !prevMode);
  };

  return (
    <div className="relative h-screen p-4 bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Map Finder</h1>
        <div className="relative">
          {/* Ghost Mode Toggle */}
          <button
            onClick={toggleGhostMode}
            className={classNames(
              'flex items-center gap-2 px-4 py-2 rounded-lg shadow transition-colors duration-200 focus:outline-none',
              isGhostMode ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-700'
            )}
          >
            <span>{isGhostMode ? 'Deactivate Ghost Mode' : 'Activate Ghost Mode'}</span>
            <span
              className={classNames(
                'w-6 h-6 rounded-full transition-colors duration-200',
                isGhostMode ? 'bg-white' : 'bg-gray-600'
              )}
            />
          </button>
          <p className="text-sm text-gray-500 mt-1">
            {isGhostMode
              ? 'Ghost Mode is active. Your location is hidden.'
              : 'Activating ghost mode prevents others from finding you via maps.'}
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-grow">
        <MapComponent
          isGhostMode={isGhostMode}
          userLocation={userLocation}
          setUserLocation={setUserLocation}
          setError={setError}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
