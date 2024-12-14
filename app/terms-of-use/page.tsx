// app/terms-of-use/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl mt-12">
        <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
        <p className="text-gray-700 mb-4">
          Effective Date: [Effective Date]
        </p>
        <p className="text-gray-700 mb-4">
          These Terms of Use (“Terms”) govern your use of the JoliMate application and any related websites, services, and features (collectively, the “Services”). By accessing or using our Services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility</h2>
        <p className="text-gray-700 mb-4">
          You must be at least 18 years old to use our Services. By using the Services, you represent and warrant that you meet this age requirement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Account Registration</h2>
        <p className="text-gray-700 mb-4">
          To access certain features, you may need to create an account. You agree to provide accurate, complete, and current information and to promptly update it if it changes. You are responsible for maintaining the confidentiality of your account credentials.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Acceptable Use</h2>
        <p className="text-gray-700 mb-4">
          You agree to use the Services in accordance with all applicable laws. You will not:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Use the Services for any unlawful or fraudulent purposes.</li>
          <li>Harass, threaten, or harm other users or post offensive content.</li>
          <li>Impersonate any person or entity or misrepresent your identity.</li>
          <li>Reverse engineer, decompile, or tamper with the Services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content, trademarks, and other intellectual property related to the Services are the property of JoliMate or its licensors. You may not use these materials without our prior written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Content</h2>
        <p className="text-gray-700 mb-4">
          By submitting or posting content on the Services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, distribute, and display that content. You represent that you have all necessary rights to grant this license.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
        <p className="text-gray-700 mb-4">
          We may terminate or suspend your access to the Services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
        <p className="text-gray-700 mb-4">
          The Services are provided “as is” and “as available” without warranties of any kind. We disclaim all warranties, express or implied, including fitness for a particular purpose, and non-infringement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          To the fullest extent permitted by law, JoliMate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to These Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms and/or by sending you an email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law and Dispute Resolution</h2>
        <p className="text-gray-700 mb-4">
          These Terms are governed by the laws of [Jurisdiction], without regard to its conflict of laws principles. Any disputes arising under these Terms shall be resolved in the courts located in [Jurisdiction].
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions regarding these Terms, please contact us at 
          <a href="mailto:support@jolimate.app" className="text-purple-600 hover:underline"> support@jolimate.app</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
