// app/user/map-chat/MapComponent.tsx
'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';

// Fix default icon issues with Leaflet by pointing to the public directory
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

// Component to change map view
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function MapComponent({
  isGhostMode,
  userLocation,
  setUserLocation,
  setError,
}: {
  isGhostMode: boolean;
  userLocation: [number, number] | null;
  setUserLocation: React.Dispatch<React.SetStateAction<[number, number] | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  // Fetch user location
  useEffect(() => {
    if (!isGhostMode) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation([position.coords.latitude, position.coords.longitude]);
            setError(null);
          },
          (err) => {
            setError('Unable to retrieve your location.');
            console.error(err);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
    } else {
      setUserLocation(null);
    }
  }, [isGhostMode, setUserLocation, setError]);

  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center (London)
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full rounded-lg shadow-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!isGhostMode && userLocation && (
        <>
          <ChangeView center={userLocation} zoom={13} />
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
}
