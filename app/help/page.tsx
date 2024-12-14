// app/help/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Head from "next/head";
import { CategoryCard } from "@/components/help-center/category-card";
import { LiveChat } from "@/components/help-center/live-chat";

const categories = [
  {
    title: "Account & Subscription",
    description: "Refund requests, billing, and subscription issues",
    articlesCount: 30,
    href: "/help/account-subscription",
  },
  {
    title: "Dating Tips & Advice",
    description: "Improve your online dating experience",
    articlesCount: 40,
    href: "/help/dating-tips",
  },
  {
    title: "Privacy & Policies",
    description: "Details on data privacy and usage policies",
    articlesCount: 15,
    href: "/help/privacy-policies",
  },
];

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Help Center - JoliMate</title>
        <meta
          name="description"
          content="Find answers to your questions and get support from JoliMate."
        />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Top Section with Heading & Search */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Advice and answers from the JoliMate Team
            </h1>
            <p className="text-gray-700 mb-8">
              Browse by topic below, or use the search bar to find what you need.
            </p>
            <div className="max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <LiveChat />
    </div>
  );
}
