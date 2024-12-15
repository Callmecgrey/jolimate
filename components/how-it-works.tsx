// components/how-it-works.tsx
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Create Profile",
    description:
      "Create Your Profile, add photos, share your interests, and let JoliMate's algorithms do the rest.",
  },
  {
    number: 2,
    title: "Discover Matches",
    description:
      "Discover Matches and explore a curated selection of matches tailored to your preferences.",
  },
  {
    number: 3,
    title: "Connect with Individuals",
    description:
      "Break the ice and connect with like-minded individuals and build meaningful connections in a comfortable and secure environment.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Area */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-12 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-medium text-lg">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-2xl">{step.title}</h3>
                  <p className="text-xl text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Image Area */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex justify-center items-center">
            <Image
              src="https://pub-ea8248bf64c240949901e0d6b0c81e53.r2.dev/how-it-works.png"
              alt="How It Works Illustration"
              width={400}
              height={500}
              className="object-cover shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
