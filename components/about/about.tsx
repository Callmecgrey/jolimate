// components/about/about.tsx
import { Mission } from "./mission";
import { Story } from "./story";

export function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About JoliMate</h1>
        <p className="text-gray-700 max-w-2xl">
          JoliMate is a next-generation dating app designed to help people form meaningful 
          connections. We leverage innovative matching algorithms and intuitive design to 
          bring individuals together and foster authentic relationships.
        </p>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Story Section */}
      <Story />
    </div>
  );
}
