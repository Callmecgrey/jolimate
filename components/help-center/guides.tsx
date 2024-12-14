// components/help-center/guides.tsx
import Link from "next/link";
import { BookOpen } from "lucide-react";

type Guide = {
  title: string;
  description: string;
  link: string;
};

const guides: Guide[] = [
  {
    title: "Optimizing Your Dating Profile",
    description:
      "Learn how to make a great first impression and attract the right matches.",
    link: "/help/guides/optimizing-dating-profile",
  },
  {
    title: "Managing Your Subscription",
    description:
      "A step-by-step guide to upgrading, downgrading, or canceling your subscription.",
    link: "/help/guides/managing-subscription",
  },
  {
    title: "Securing Your Account",
    description:
      "Best practices for keeping your account safe, including password tips and two-factor authentication.",
    link: "/help/guides/securing-your-account",
  },
];

export function Guides() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Guides & Tutorials
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <Link
            href={guide.link}
            key={index}
            className="flex items-start p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <BookOpen className="h-6 w-6 text-purple-600 mr-4" />
            <div>
              <h3 className="text-xl font-medium">{guide.title}</h3>
              <p className="text-gray-600">{guide.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
