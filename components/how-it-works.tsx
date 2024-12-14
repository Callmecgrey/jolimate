// components/how-it-works.tsx
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Create Profile",
    description: "Create Your Profile, add photos, share your interests, and let JoliMate's algorithms do the rest."
  },
  {
    number: 2,
    title: "Discover Matches",
    description: "Discover Matches and explore a curated selection of matches tailored to your preferences."
  },
  {
    number: 3,
    title: "Connect with Individuals",
    description: "Break the ice and connect with like-minded individuals and build meaningful connections in a comfortable and secure environment."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-medium">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-[400px]">
            {/* You can add an image or any other content here */}
            {/* Example:
            <Image src="/path-to-image.jpg" alt="How it works" fill className="object-cover" />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
