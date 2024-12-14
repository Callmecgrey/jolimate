// app/cookie-policy/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl mt-12">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-700 mb-4">
          Effective Date: [Effective Date]
        </p>
        <p className="text-gray-700 mb-4">
          At JoliMate, we use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content. This Cookie Policy explains what these technologies are, why we use them, and how you can manage your preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files that are placed on your device when you visit a website. They help websites function properly, remember your preferences, and gather analytic data about user behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Essential Cookies:</strong> Necessary for our site to function and enable core features.</li>
          <li><strong>Performance Cookies:</strong> Collect anonymous data about how users interact with our site, helping us improve usability.</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience.</li>
          <li><strong>Advertising Cookies:</strong> Tailor advertisements based on your browsing habits and interests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Cookies</h2>
        <p className="text-gray-700 mb-4">
          We use cookies to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Keep you signed in and maintain your session preferences.</li>
          <li>Understand which features of our site are most popular and improve performance.</li>
          <li>Deliver relevant advertising content.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
        <p className="text-gray-700 mb-4">
          We may use third-party service providers, such as analytics or advertising partners, who set their own cookies. We do not control these cookies and encourage you to review their privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Managing Your Cookie Preferences</h2>
        <p className="text-gray-700 mb-4">
          Most web browsers allow you to control cookies through your settings. You can choose to block or delete cookies. Note that some features of our site may not function properly if you disable cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Cookie Policy from time to time. We will notify you of material changes by posting the updated policy on our site and/or by sending you an email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about our use of cookies and similar technologies, please contact us at 
          <a href="mailto:support@jolimate.app" className="text-purple-600 hover:underline"> support@jolimate.app</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
