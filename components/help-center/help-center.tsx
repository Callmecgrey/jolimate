// components/help-center/help-center.tsx
import Image from "next/image";
import { Faq } from "./faq";
import { Guides } from "./guides";
import { ContactSupport } from "./contact-support";

export function HelpCenter() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            How Can We Help You?
          </h1>
          <p className="text-gray-700">
            Welcome to JoliMate's Help Center. Browse through our FAQs, explore detailed guides, or get in touch with our support team for personalized assistance.
          </p>
        </div>
        {/* Image */}
        <div className="relative w-full h-64 md:h-auto md:w-1/2">
          <Image
            src="/images/help-center-hero.svg"
            alt="Help Center Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
      </section>

      {/* FAQs Section */}
      <Faq />

      {/* Guides/Tutorials Section */}
      <Guides />

      {/* Contact Support Section */}
      <ContactSupport />
    </div>
  );
}
